<template>
  <page-content page-title="Components - DataTable">
    <docs-component>
      <div slot="description">
        <p>Data tables display sets of raw data. They usually appear in desktop enterprise products. Data tables may be embedded on a surface, such as a card.</p>
      </div>

      <div slot="api">
        <api-table name="md-data-table">

          <p>This component uses md-table and others in a way that simplify use.</p>
          <p>Data can be client-side or server-side.</p>

          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-data</md-table-cell>
                <md-table-cell><code>Array | String</code></md-table-cell>
                <md-table-cell class="display-block">
                  <p>Can be set with an array or a string with url to server data. This is the only <code>required</code> property.</p>
                  <p>
                      In case of string, an ajax request will be made (
                      <code>page</code>, <code>pageSize</code>, <code>sortBy</code> and <code>sortType</code> parameters will be appended to the request).
                  </p>
                  <p>You can return data from your server in two ways:</p>
                  <p>Body of response can contain <code>count</code> and <code>data</code> properties like example below.</p>
                  <p>Count is the total items without pagination, and data contains only items of current page.</p>
                  <code-block lang="javascript">
                    {
                      count: 10,
                      data: [
                        {
                          id: 1,
                          name: 'Chuck Norris'
                        },
                        {
                          id: 2,
                          name: 'Van Gogh'
                        }
                      ]
                    }
                  </code-block>
                  <p>Or, if you can't return total count on response body, you can return data directly, without sub keys.</p>
                  <p>
                     Then you can set mdPaginationTotal property with total count, or
                     you can leave it blank and default <code>Many</code> will appear at pagination.
                  </p>
                </md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-fields</md-table-cell>
                <md-table-cell><code>Array</code></md-table-cell>
                <md-table-cell class="display-block">
                  <p>Fields configuration, this property is not mandatory but extremely recomended.</p>
                  <p>It sets column names, label, if it is of numeric type, if is sortable and more.</p>
                  <p>
                    <code>name | String </code> field name;<br />
                    <code>label | String </code> how will be show on header;<br />
                    <code>numeric | Boolean </code> if data type is numeric;<br />
                    <code>sortable | Boolean </code> if can be sorted;<br />
                    <code>icon | String </code> column header icon;<br />
                    <code>tooltip | String </code> tooltip when mouseover column header;
                  </p>
                  <code-block lang="javascript">
                    [
                      {
                        name: 'id',
                        label: 'Id',
                        numeric: true,
                        sortable: true,
                        icon: null,
                        tooltip: 'ID Tooltip'
                      },
                      {
                        name: 'name',
                        label: 'Name',
                        numeric: false,
                        sortable: true,
                        icon: null
                      },
                      {
                        name: 'email',
                        label: 'E-mail',
                        numeric: false,
                        sortable: false
                      },
                      {
                        name: 'website',
                        label: 'Website',
                        numeric: false,
                        sortable: true
                      }
                    ]
                  </code-block>
                </md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-toolbar</md-table-cell>
                <md-table-cell><code>Object</code></md-table-cell>
                <md-table-cell class="display-block">
                  <p>Configuration of toolbar.</p>
                  <p>
                    There're three parameters:
                    <code>title | String</code> to set top title<br />
                    <code>showRefreshButton | Boolean</code> to show/hide refresh button on top-right position of table.<br />
                    <code>
                      buttons | Array of objects</code> to add custom buttons. Each one must have two properties:
                      <code>icon | String</code> and <code>clickEvent | Function
                    </code>
                  </p>
                  <code-block lang="javascript">
                    {
                      title: 'Nutrition',
                      showRefreshButton: false,
                      buttons: [
                        {
                          icon: 'filter_list',
                          clickEvent: null
                        },
                        {
                          icon: 'search',
                          clickEvent: null
                        }
                      ]
                    }
                  </code-block>
                </md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-alternate-toolbar</md-table-cell>
                <md-table-cell><code>Object</code></md-table-cell>
                <md-table-cell class="display-block">
                  <p>Configuration of alternate toolbar (visible when you have rows selected).</p>
                  <p>
                    For now it has just one parameter:
                    <code>
                      buttons | Array of objects</code> to add custom buttons. Each one must have two properties:
                      <code>icon | String</code> and <code>clickEvent | Function
                    </code>
                  </p>
                  <code-block lang="javascript">
                    {
                      buttons: [
                        {
                          icon: 'filter_list',
                          clickEvent: null
                        },
                        {
                          icon: 'search',
                          clickEvent: null
                        }
                      ]
                    }
                  </code-block>
                </md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-row-actions</md-table-cell>
                <md-table-cell><code>Array</code></md-table-cell>
                <md-table-cell class="display-block">
                  <p>When set, add a button at the end of each row, for more specific actions.</p>
                  <p>
                    There're three parameters for each buttom:
                    <code>icon | String</code> to set top title<br />
                    <code>label | String</code> to show/hide refresh button on top-right position of table.<br />
                    <code>clickEvent | Function </code> Function to be executed. Row data will be passed as param to this function.
                  </p>
                  <code-block lang="javascript">
                    [
                      {
                        icon: 'search',
                        label: 'Visualizar',
                        clickEvent: null
                      },
                      {
                        icon: 'edit',
                        label: 'Editar',
                        clickEvent: null
                      },
                    ]
                  </code-block>
                </md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-row-selection</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable selection inside a particular row. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-row-auto-select</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>
                  Click in any area of the row to select it.
                  On a table with <code>md-row-actions</code> it's recomended to be turned of. Default <code>false</code>
                </md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-sort</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Property name to match for sorting.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-sort-type</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The order to apply on the sort: <br>Values: <code>asc</code> | <code>desc</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-pagination-page</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Current page of the table pagination. Required. Default <code>1</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-pagination-size-options</md-table-cell>
                <md-table-cell><code>Array | Boolean</code></md-table-cell>
                <md-table-cell>Set the values inside the page amout selector. Default <code>[10, 25, 50, 100]</code> <br>When false this flag will hide the page selector.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-pagination-rows-label</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Text to be shown on the left of the page selector. Default <code>Rows per page</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-pagination-separator-label</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Text to be shown on the left of the page selector. Default <code>of</code></md-table-cell>
              </md-table-row>

            </md-table-body>
          </md-table>

          <md-table slot="events">

          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <h2>Client</h2>
        <md-table-card>
          <md-data-table ref="clientdatatable"
            :md-data="nutrition"
            :md-row-selection="true"
            :md-row-auto-select="true"
            :md-toolbar="clientToolbar"
            :md-alternate-toolbar="clientAlternateToolbar"
          ></md-data-table>
        </md-table-card>

        <h2>Server</h2>
        <md-table-card>
          <md-data-table ref="serverdatatable"
            md-data="https://api.github.com/repos/marcosmoura/vue-material/commits"
            :md-toolbar="serverToolbar"
            :md-fields="serverFields"
            :md-row-actions="rowActions"
            :md-row-selection="true"
            :md-row-auto-select="false"
            :md-pagination-size-options="pageSizeOptions"
            md-pagination-rows-label="Registros"
            md-pagination-separator-label="de"
          ></md-data-table>
        </md-table-card>
      </div>
  </page-content>
</template>

<style lang="sass" scoped>
  .md-table + .md-table-card,
  .md-table-card + .md-table-card {
    margin-top: 24px;
  }

  .output {
    margin-top: 24px;

    .md-title {
      font-size: 20px;
    }
  }
</style>

<style>
  .md-table-cell.display-block .md-table-cell-container {
    display: block !important;
  }
</style>

<script>
  export default {
    data: () => ({
      clientToolbar: {
        title: 'Nutrition',
        showRefreshButton: false,
        buttons: []
      },
      clientAlternateToolbar: {
        buttons: [
          { icon: 'delete', clickEvent: null },
          { icon: 'more_vert', clickEvent: null }
        ]
      },
      serverToolbar: {
        title: 'Users',
        showRefreshButton: true,
        buttons: [
          { icon: 'search', clickEvent: null }
        ]
      },
      pageSizeOptions: [5, 25, 50, 100, 500, 1000],
      serverFields: [
        {
          key: 'sha',
          label: 'Sha',
          numeric: false,
          sortable: true,
          icon: 'fingerprint',
          tooltip: 'ID Tooltip'
        },
        {
          key: 'author.login',
          label: 'Author',
          numeric: false,
          sortable: true,
          icon: 'account_circle'
        },
        {
          key: 'commit.message',
          label: 'Message',
          numeric: false,
          sortable: true,
          icon: 'message'
        }
      ],
      rowActions: [
        {
          icon: 'search',
          label: 'Visualizar',
          clickEvent: null
        },
        {
          icon: 'edit',
          label: 'Editar',
          clickEvent: null
        }
      ],
      nutrition: [
        {
          dessert: 'Frozen yogurt',
          type: 'ice_cream',
          calories: 159,
          fat: '6.0',
          comment: '1'
        },
        {
          dessert: 'Ice cream sandwich',
          type: 'ice_cream',
          calories: 237,
          fat: '9.0',
          comment: '2'
        },
        {
          dessert: 'Eclair',
          type: 'pastry',
          calories: 12,
          fat: '16.0',
          comment: '3'
        },
        {
          dessert: 'Cupcake',
          type: 'pastry',
          calories: 132,
          fat: '3.7',
          comment: '4'
        },
        {
          dessert: 'Gingerbread',
          type: 'other',
          calories: 453,
          fat: '16.0',
          comment: '5'
        },
        {
          dessert: 'Frozen yogurt',
          type: 'ice_cream',
          calories: 45,
          fat: '6.0',
          comment: '6'
        },
        {
          dessert: 'Ice cream sandwich',
          type: 'ice_cream',
          calories: 987,
          fat: '9.0',
          comment: '7'
        },
        {
          dessert: 'Eclair',
          type: 'pastry',
          calories: 45,
          fat: '16.0',
          comment: '8'
        },
        {
          dessert: 'Cupcake',
          type: 'pastry',
          calories: 12,
          fat: '3.7',
          comment: '9'
        },
        {
          dessert: 'Gingerbread',
          type: 'other',
          calories: 234,
          fat: '16.0',
          comment: '10'
        },
        {
          dessert: 'Cupcake',
          type: 'pastry',
          calories: 3456,
          fat: '3.7',
          comment: '11'
        },
        {
          dessert: 'Gingerbread',
          type: 'other',
          calories: 356,
          fat: '16.0',
          comment: '12'
        }
      ],
      selectedData: [],
      sort: {},
      page: {}
    }),
    mounted() {
      this.clientAlternateToolbar.buttons[0].clickEvent = () => {
        this.deleteRows();
      };
      this.rowActions[0].clickEvent = (row) => {
        console.log(row);
        window.alert('Visualizar');
      };
      this.rowActions[1].clickEvent = (row) => {
        console.log(row);
        window.alert('Editar');
      };
    },
    methods: {
      deleteRows() {
        window.alert('Delete Rows');
        console.log(this.$refs.clientdatatable.getSelected());
      }
    }
  };
</script>
