<template>
  <div class="md-table-pagination">
    <template v-if="mdPageOptions !== false">
      <span class="md-table-pagination-label">{{ mdLabel }}</span>

      <md-field>
        <md-select v-model="currentPageSize" md-dense md-class="md-pagination-select">
          <md-option v-for="amount in mdPageOptions" :key="amount" :value="amount">{{ amount }}</md-option>
        </md-select>
      </md-field>
    </template>

    <span>{{ (mdPage - 1) * currentPageSize + 1 }}–{{ Math.min(mdPage * currentPageSize, mdCount) }} {{ mdSeparator }} {{ mdCount }}</span>

    <md-button class="md-icon-button md-table-pagination-previous" @click="changePage(-1)" :disabled="mdPage === 1">
      <md-icon>keyboard_arrow_left</md-icon>
    </md-button>

    <md-button class="md-icon-button md-table-pagination-next" @click="changePage(+1)" :disabled="mdPage === pageCount">
      <md-icon>keyboard_arrow_right</md-icon>
    </md-button>
  </div>
</template>

<script lang="babel">
  const getPageData = (data, mdPage, mdPageSize) => {
    return data.slice((mdPage - 1) * mdPageSize, ((mdPage - 1) * mdPageSize) + mdPageSize)
  }
  export default {
    name: 'MdTablePagination',
    inject: ['MdTable'],
    props: {
      mdData: {
        type: [Array, Object]
      },
      mdPageOptions: {
        type: [Array, Boolean],
        default: () => [5, 10, 25, 50, 100]
      },
      mdPaginatedData: {
        type: Array,
        default: () => []
      },
      mdPageSize: {
        type: Number,
        default: 10
      },
      mdUpdate: {
        type: Function,
        default: () => true
      },
      mdLabel: {
        type: String,
        default: 'Rows per page:'
      },
      mdSeparator: {
        type: String,
        default: 'of'
      }
    },
    data: () => ({
      mdPage: 0,
      mdCount: 0,
      currentPageSize: 0
    }),
    computed: {
      pageCount () {
        return this.getPageCount()
      },
      isExternalPagination () {
        return this.mdData && this.mdData.mdData
      }
    },
    watch: {
      mdData: {
        immediate: true,
        handler (mdData) {
          this.$emit('update:mdData', mdData)
          this.updatePage()
        }
      },
      mdPageSize: {
        immediate: true,
        handler (pageSize) {
          this.currentPageSize = pageSize
          this.updatePage()
        }
      },
      currentPageSize: {
        immediate: true,
        handler (newValue, oldValue) {
          if (this.mdUpdate(this.mdPage, this.currentPageSize, this.MdTable.sort, this.MdTable.sortOrder) !== false) {
            this.updatePage()
          }
        }
      }
    },
    methods: {
      getPageCount () {
        return Math.ceil(this.mdCount / this.currentPageSize)
      },
      setPage (mdPage, mdCount) {
        this.mdPage = mdCount > 0 ? (mdPage > 0 ? mdPage : (this.mdPage > 0 ? this.mdPage : 1)) : 0
        var pageCount = this.getPageCount()
        if (this.mdPage > pageCount) {
          this.mdPage = pageCount
        }
      },
      updatePage () {
        if (this.currentPageSize !== 0) {
          if (this.isExternalPagination) {
            this.mdCount = this.mdData.mdCount
            this.setPage(this.mdData.mdPage, this.mdCount)
            this.$emit('update:mdPaginatedData', this.mdData.mdData)
          } else {
            this.mdCount = this.mdData.length
            this.setPage(this.mdPage, this.mdCount)
            if (this.mdPage > 0) {
              this.$emit('update:mdPaginatedData', getPageData(this.mdData, this.mdPage, this.currentPageSize))
            } else {
              this.$emit('update:mdPaginatedData', [])
            }
          }
        }
      },
      changePage (AddOrSubtract) {
        if (this.mdUpdate(this.mdPage + AddOrSubtract, this.currentPageSize, this.MdTable.sort, this.MdTable.sortOrder) !== false) {
          this.mdPage = this.mdPage + AddOrSubtract
          if (!this.isExternalPagination) {
            this.$emit('update:mdPaginatedData', getPageData(this.mdData, this.mdPage, this.currentPageSize))
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table-pagination {
    height: 56px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid;
    font-size: 12px;

    .md-table-pagination-previous {
      margin-right: 2px;
      margin-left: 18px;
    }

    .md-field {
      width: 48px;
      min-width: 36px;
      margin: -16px 24px 0 32px;

      &:after,
      &:before {
        display: none;
      }

      .md-select-value {
        font-size: 13px;
      }
    }
  }

  .md-menu-content.md-pagination-select {
    max-width: 82px;
    min-width: 56px;
    margin-top: 5px;
  }
</style>
