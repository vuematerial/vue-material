<template>
  <td class="md-table-cell" :class="cellClasses">
    <div class="md-table-cell-container">
      <slot />
    </div>
  </td>
</template>

<script>
  export default {
    name: 'MdTableCell',
    props: {
      mdId: [String, Number],
      mdLabel: String,
      mdNumeric: Boolean,
      mdTooltip: String,
      mdSortBy: String
    },
    inject: ['MdTable'],
    data: () => ({
      index: null,
      parentNode: null
    }),
    computed: {
      cellClasses () {
        return {
          'md-numeric': this.mdNumeric
        }
      }
    },
    watch: {
      mdSortBy () {
        this.setCellData()
      },
      mdNumeric () {
        this.setCellData()
      },
      mdLabel () {
        this.setCellData()
      },
      mdTooltip () {
        this.setCellData()
      }
    },
    methods: {
      setCellData ($vm = this) {
        this.$set(this.MdTable.items, $vm.index, {
          id: $vm.mdId,
          label: $vm.mdLabel,
          numeric: $vm.mdNumeric,
          tooltip: $vm.mdTooltip,
          sortBy: $vm.mdSortBy
        })
      },
      updateAllCellData () {
        this.MdTable.items = {}

        const cells = Array.from(this.parentNode.childNodes).filter(({ tagName, classList }) => {
          const isSelection = classList && classList.contains('md-table-cell-selection')
          const isTd = tagName && tagName.toLowerCase() === 'td'

          return isTd && !isSelection
        })

        cells.forEach((cell, index) => {
          const $vm = cell.__vue__

          $vm.index = index

          this.setCellData($vm)
        })
      }
    },
    mounted () {
      this.parentNode = this.$el.parentNode
      this.updateAllCellData()
    },
    destroyed () {
      const rowRemoved = this.$el.parentNode !== null

      if (rowRemoved) {
        return false
      }

      this.updateAllCellData()
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table-cell {
    height: 48px;
    position: relative;
    transition: .3s $md-transition-default-timing;
    font-size: 13px;
    line-height: 18px;

    &.md-numeric {
      text-align: right;
    }

    &:last-child .md-table-cell-container {
      padding-right: 24px;
    }
  }

  .md-table-cell-container {
    padding: 6px 32px 6px 24px;
  }
</style>
