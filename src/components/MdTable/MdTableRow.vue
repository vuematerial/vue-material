<template>
  <tr class="md-table-row" :class="rowClasses" @click="onClick" v-on="$listeners">
    <md-table-cell-selection
      v-model="isSelected"
      :md-disabled="mdDisabled"
      :md-selectable="mdSelectable === 'multiple'"
      :md-row-id="mdIndex"
      v-if="selectableCount" />
    <slot />
  </tr>
</template>

<script>
  import MdPropValidator from 'core/utils/MdPropValidator'
  import MdTableCellSelection from './MdTableCellSelection'

  export default {
    name: 'MdTableRow',
    components: {
      MdTableCellSelection
    },
    props: {
      mdIndex: [Number, String],
      mdId: [Number, String],
      mdSelectable: {
        type: [String],
        ...MdPropValidator('md-selectable', ['multiple', 'single'])
      },
      mdDisabled: Boolean,
      mdAutoSelect: Boolean,
      mdItem: Object
    },
    inject: ['MdTable'],
    data: () => ({
      index: null,
      isSelected: false
    }),
    computed: {
      selectableCount () {
        return Object.keys(this.MdTable.selectable).length
      },
      isSingleSelected () {
        return this.MdTable.singleSelection === this.mdItem
      },
      hasMultipleSelection () {
        return this.MdTable.hasValue && this.mdSelectable === 'multiple'
      },
      hasSingleSelection () {
        return this.MdTable.hasValue && this.mdSelectable === 'single'
      },
      rowClasses () {
        if (this.MdTable.hasValue) {
          return {
            'md-has-selection': !this.mdDisabled && (this.mdAutoSelect || this.hasSingleSelection),
            'md-selected': this.isSelected,
            'md-selected-single': this.isSingleSelected
          }
        }
      },
      isInSelectedItems () {
        return this.MdTable.selectedItems.includes(this.mdItem)
      }
    },
    watch: {
      mdDisabled () {
        if (this.mdDisabled) {
          this.removeSelectableItem()
        } else {
          this.addSelectableItem()
        }
      },
      isSelected (val) {
        let noChange = (val && this.isInSelectedItems) || (!val && !this.isInSelectedItems)

        if (noChange) {
          return false
        }

        this.MdTable.manageItemSelection(this.mdItem)
      },
      isInSelectedItems (val) {
        this.isSelected = val
      },
      mdSelectable () {
        this.MdTable.selectingMode = this.mdSelectable
      }
    },
    methods: {
      onClick () {
        if (this.MdTable.hasValue && !this.mdDisabled) {
          if (this.hasMultipleSelection) {
            this.selectRowIfMultiple()
          } else if (this.hasSingleSelection) {
            this.selectRowIfSingle()
          }
        }
      },
      toggleSelection () {
        this.isSelected = !this.isSelected
      },
      selectRowIfSingle () {
        if (this.MdTable.singleSelection === this.mdItem) {
          this.MdTable.singleSelection = null
        } else {
          this.MdTable.singleSelection = this.mdItem
        }
      },
      selectRowIfMultiple () {
        if (this.mdAutoSelect) {
          this.toggleSelection()
        }
      },
      addSelectableItem () {
        if (!this.hasMultipleSelection || this.mdDisabled) {
          return
        }

        if (this.MdTable.selectable.includes(this.mdItem)) {
          return
        }

        this.MdTable.selectable.push(this.mdItem)
      },
      removeSelectableItem () {
        if (!this.hasMultipleSelection) {
          return
        }

        this.MdTable.selectable = this.MdTable.selectable.filter(item => item !== this.mdItem)
      }
    },
    created () {
      this.addSelectableItem()
      this.MdTable.selectingMode = this.mdSelectable
    },
    beforeDestroy () {
      this.removeSelectableItem()
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table-row {
    transition: .3s $md-transition-default-timing;
    transition-property: background-color, font-weight;
    will-change: background-color, font-weight;

    &.md-has-selection {
      cursor: pointer;
    }

    &.md-selected-single {
      font-weight: 500;
    }

    tbody & td {
      border-top: 1px solid;
    }
  }
</style>
