<template>
  <div class="md-data-table" :class="[themeClass]">
    <div v-show="loading" style="position:absolute; z-index:9997; width: 100%; height: 100%; min-height: 296px; text-align: center; vertical-align: middle;">
      <div style="background: #ffffff; z-index:9998; width: 100%; height: 100%; min-height: 296px; opacity: 0.5"></div>
      <md-spinner :md-size="150" :md-stroke="1" md-indeterminate class="md-warn" style="position:absolute; top:50%; height:10em; margin-top:-70px; margin-left: -75px;"></md-spinner>
    </div>

    <md-toolbar v-show="showToolbar">
      <h1 class="md-title">{{ toolbar.title }}</h1>
      <md-button v-for="(button, buttonIndex) in toolbarButtons" class="md-icon-button" @click.prevent="button.clickEvent">
        <md-icon>{{ button.icon }}</md-icon>
      </md-button>
      <md-button v-show="typeof toolbar.showRefreshButton !== 'undefined' && toolbar.showRefreshButton === true" class="md-icon-button" @click.prevent="refresh()">
        <md-icon>refresh</md-icon>
      </md-button>
    </md-toolbar>

    <md-table-alternate-header md-selected-label="selected" v-show="showAlternateToolbar">
      <md-button v-for="(button, buttonIndex) in mdAlternateToolbar.buttons" class="md-icon-button" @click.prevent="button.clickEvent">
        <md-icon>{{ button.icon }}</md-icon>
      </md-button>
    </md-table-alternate-header>

    <md-table :md-sort="sortBy" :md-sort-type="sortType" @select="onSelect" @sort="onSort" v-show="!loading">
      <md-table-header>
        <md-table-row>
          <md-table-head v-for="(column, columnIndex) in fields" :md-sort-by="column.sortable ? column.key : ''" :md-numeric="column.numeric" :md-tooltip="column.tooltip">
            <md-icon v-if="column.icon !== null">{{ column.icon }}</md-icon>
            {{ typeof column.label !== 'undefined' && column.label !== null ? column.label : column.key }}
          </md-table-head>
        </md-table-row>
      </md-table-header>

      <md-table-body>
        <md-table-row v-for="(row, rowIndex) in visibleRows" :key="rowIndex" :md-item="row" :md-selection="mdRowSelection" :md-auto-select="mdRowAutoSelect">
          <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="fieldsNumericKeys.indexOf(columnIndex) !== -1">
            {{ column }}
          </md-table-cell>

          <md-table-cell v-if="mdRowActions.length > 0">
            <md-menu md-size="3">
              <md-button class="md-icon-button" md-menu-trigger>
                <md-icon>more_vert</md-icon>
              </md-button>

              <md-menu-content>
                <md-menu-item v-for="(button, buttonIndex) in mdRowActions" @click="button.clickEvent(row)">
                  <md-icon>{{ button.icon }}</md-icon>
                  <span>{{ button.label }}</span>
                </md-menu-item>
              </md-menu-content>
            </md-menu>
          </md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
    <md-table-pagination ref="pagination" v-show="!loading"
      :md-total="dataCount"
      :md-page="page"
      :md-size="pageSize"
      :md-page-options="pageSizeOptions"
      :md-label="mdPaginationRowsLabel"
      :md-separator="mdPaginationSeparatorLabel"
    @pagination="onPagination"></md-table-pagination>
  </div>
</template>

<script>
  import Vue from 'vue';
  import theme from '../../core/components/mdTheme/mixin';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';
  import { getData, getServerRequestParameters } from '../../core/utils/getData';
  import { get, sortBy } from 'lodash';

  export default {
    props: {
      mdHttp: {
        type: Function,
        default() {
          return null;
        }
      },
      mdHttpHeaders: {
        type: Object,
        default() {
          return {};
        }
      },
      mdData: {
        type: Array | String,
        required: true,
        default() {
          return [];
        }
      },
      mdToolbar: {
        type: Object,
        default() {
          return {
            title: '',
            showRefreshButton: false,
            buttons: []
          };
        }
      },
      mdAlternateToolbar: {
        type: Object,
        default() {
          return {
            buttons: []
          };
        }
      },
      mdFields: {
        type: Array,
        default() {
          return [];
        }
      },
      mdRowActions: {
        type: Array,
        default() {
          return [];
        }
      },
      mdRowSelection: {
        type: Boolean,
        default() {
          return false;
        }
      },
      mdRowAutoSelect: {
        type: Boolean,
        default() {
          return false;
        }
      },
      mdSort: {
        type: String,
        default() {
          return 'name';
        }
      },
      mdSortType: {
        type: String,
        default() {
          return 'asc';
        }
      },
      mdPaginationTotal: {
        type: Number | String,
        default() {
          return 'Many';
        }
      },
      mdPaginationPage: {
        type: Number,
        default() {
          return 1;
        }
      },
      mdPaginationSizeOptions: {
        type: Array,
        default() {
          return [5, 10, 25, 50];
        }
      },
      mdPaginationSize: {
        type: Number,
        default() {
          return this.mdPaginationSizeOptions[0];
        }
      },
      mdPaginationRowsLabel: {
        type: String,
        default() {
          return 'Rows';
        }
      },
      mdPaginationSeparatorLabel: {
        type: String,
        default() {
          return 'of';
        }
      }
    },
    mixins: [theme],
    data() {
      return {
        loading: false,
        toolbar: this.mdToolbar,
        toolbarButtons: [],
        alternateToolbar: this.mdAlternateToolbar,
        alternateToolbarButtons: [],
        data: {},
        dataCount: this.mdPaginationTotal,
        page: this.mdPaginationPage,
        pageSize: this.mdPaginationSize,
        pageSizeOptions: this.mdPaginationSizeOptions,
        sortBy: this.mdSort,
        sortType: this.mdSortType,
        fields: [],
        fieldsKeys: [],
        fieldsNumericKeys: [],
        visibleRows: [],
        serverSidePagination: false,
        numberOfRows: 0,
        numberOfSelected: 0,
        selectedRows: {}
      };
    },
    computed: {
      serverSide() {
        return typeof this.mdData === 'string';
      },
      showToolbar() {
        return this.toolbar !== 'undefined' && Object.keys(this.toolbar).length > 0;
      },
      showAlternateToolbar() {
        return typeof this.alternateToolbar !== 'undefined' && Object.keys(this.alternateToolbar.buttons).length > 0;
      }
    },
    created() {
      this.$watch('data', this.onDataChange, {
        immediate: true
      });

      this.bootstrap();
    },
    methods: {
      bootstrap() {
        if (this.showToolbar && typeof this.toolbar.buttons !== 'undefined') {
          this.addToolbarButtons();
        }

        this.parentCard = getClosestVueParent(this.$parent, 'md-table-card');

        if (this.parentCard) {
          this.parentCard.tableInstance = this;
        }

        if (this.serverSide) {
          this.getServerData(true);
        } else {
          this.dataCount = this.mdData.length;
          this.$set(this, 'data', this.mdData);
        }
      },
      onDataChange(value) {
        this.setFields(value);
        this.render();
      },
      setFields(data = []) {
        if (Object.keys(this.mdFields).length > 0) {
          this.fields = this.mdFields;
        } else if (data.length > 0) {
          let fields = [];
          let fieldsArray = Object.getOwnPropertyNames(data[0]);
          let obIndex = fieldsArray.indexOf('__ob__');

          if (obIndex > -1) {
            fieldsArray.splice(obIndex, 1);
          }

          fieldsArray.map((item) => {
            fields.push({
              key: item,
              label: `${item.charAt(0).toUpperCase()}${item.slice(1)}`,
              numeric: false,
              sortable: true,
              icon: null
            });
          });

          this.fields = fields;
        } else {
          this.fields = [];
        }

        this.setFieldsKeys();
        this.setFieldsNumericKeys();
      },
      setFieldsKeys() {
        let fieldsKeys = [];

        this.fields.map((row) => {
          fieldsKeys.push(row.key);
        });

        this.fieldsKeys = fieldsKeys;
      },
      setFieldsNumericKeys() {
        this.fieldsNumericKeys = this.fields.filter((value) => {
          return value.numeric === true;
        }).map(function(a) {
          return a.name;
        });
      },
      addToolbarButtons() {
        let buttons = [];

        this.toolbar.buttons.map((item) => {
          buttons.push(item);
        });

        this.toolbarButtons = buttons;
      },
      getServerData() {
        this.loading = true;
        const http = Vue.$http || this.mdHttp;
        const url = `${this.mdData}?${getServerRequestParameters(this.page, this.pageSize, this.sortBy, this.sortType)}`;

        getData(url, http, this.mdHttpHeaders).then((data) => {
          this.prepareServerData(data);
        });
      },
      prepareServerData(responseBody) {
        if (typeof responseBody.count !== 'undefined' && typeof responseBody.data !== 'undefined') {
          this.serverSidePagination = true;
          this.dataCount = responseBody.count;
          this.$set(this, 'data', responseBody.data);
        } else {
          this.serverSidePagination = false;
          this.dataCount = this.mdPaginationTotal === null || isNaN(this.mdPaginationTotal) ? 'Many' : this.mdPaginationTotal;
          this.$set(this, 'data', this.dataFieldsFilter(responseBody));
        }

        this.render();
        this.loading = false;
      },
      dataFieldsFilter(data) {
        let row = {};
        let rows = [];

        data.map((r) => {
          row = {};

          this.fieldsKeys.map((k) => {
            row[k] = get(r, k);
          });

          rows.push(row);
        });

        return rows;
      },
      onSelect(data) {
        this.selectedData = data;
      },
      onSort(sort) {
        this.sortBy = sort.name;
        this.sortType = sort.type;

        this.refresh();
      },
      onPagination(pagination) {
        if (pagination.size !== this.pageSize) {
          this.page = 1;
          this.pageSize = pagination.size;
        } else {
          this.page = pagination.page;
        }

        this.refresh();
      },
      refresh() {
        if (this.serverSide) {
          this.getServerData();
        } else {
          this.render();
        }
      },
      render() {
        if (this.serverSidePagination) {
          this.visibleRows = this.data;
          return;
        }

        let offset = (this.page - 1) * this.pageSize;
        let orderedData = sortBy(this.data, this.sortBy);

        if (this.sortType === 'desc') {
          orderedData.reverse();
        }

        this.visibleRows = orderedData.slice(offset, offset + this.pageSize);
        this.page = 1;
      },
      getSelected() {
        return this.selectedData;
      }
    }
  };
</script>
