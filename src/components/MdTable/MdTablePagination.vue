<template>
  <div class="md-table-pagination">
    <template v-if="mdPageOptions !== false">
      <span class="md-table-pagination-label">{{ mdLabel }}</span>

      <md-field>
        <md-select v-model="currentPageSize" md-dense md-class="md-pagination-select" @changed="setPageSize">
          <md-option v-for="amount in mdPageOptions" :key="amount" :value="amount">{{ amount }}</md-option>
        </md-select>
      </md-field>
    </template>

    <span>{{ currentItemCount }}-{{ currentPageCount }} {{ mdSeparator }} {{ mdTotal }}</span>

    <md-button class="md-icon-button md-table-pagination-previous" @click="goToPrevious()" :disabled="mdPage === 1">
      <md-icon>keyboard_arrow_left</md-icon>
    </md-button>

    <md-button class="md-icon-button md-table-pagination-next" @click="goToNext()">
      <md-icon>keyboard_arrow_right</md-icon>
    </md-button>
  </div>
</template>

<script>
  export default {
    name: 'MdTablePagination',
    inject: ['MdTable'],
    props: {
      mdPageSize: {
        type: [String, Number],
        default: 10
      },
      mdPageOptions: {
        type: Array,
        default: () => [10, 25, 50, 100]
      },
      mdPage: {
        type: Number,
        default: 1
      },
      mdTotal: {
        type: [String, Number],
        default: 'Many'
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
      currentPageSize: 0
    }),
    computed: {
      currentItemCount () {
        return ((this.mdPage - 1) * this.mdPageSize) + 1
      },
      currentPageCount () {
        return this.mdPage * this.mdPageSize
      }
    },
    watch: {
      mdPageSize: {
        immediate: true,
        handler (pageSize) {
          this.currentPageSize = this.pageSize
        }
      }
    },
    methods: {
      setPageSize () {
        this.$emit('update:mdPageSize', this.currentPageSize)
      },
      goToPrevious () {

      },
      goToNext () {

      }
    },
    created () {
      this.currentPageSize = this.mdPageSize
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
