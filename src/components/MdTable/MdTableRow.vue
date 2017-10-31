<template>
  <tr class="md-table-row" :class="rowClasses" @click="onClick">
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
      mdAutoSelect: Boolean
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
        return this.MdTable.singleSelection === this.mdId
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
      mdId (newId, oldId) {
        this.removeSelectableItem(oldId)
        this.addSelectableItem(newId)
      },
      isSelected () {
        this.MdTable.manageItemSelection(this.mdIndex)
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
        if (this.MdTable.singleSelection === this.mdId) {
          this.MdTable.singleSelection = null
          this.$emit('md-selected', null)
        } else {
          this.MdTable.singleSelection = this.mdId
          this.$emit('md-selected', this.MdTable.getModelItem(this.mdIndex))
        }
      },
      selectRowIfMultiple () {
        if (this.mdAutoSelect) {
          this.toggleSelection()
        }
      },
      addSelectableItem (id) {
        if (this.hasMultipleSelection && !this.mdDisabled) {
          this.$set(this.MdTable.selectable, id || this.mdId, isSelected => {
            this.isSelected = isSelected
          })
        }
      },
      removeSelectableItem (id) {
        if (this.hasMultipleSelection) {
          this.$delete(this.MdTable.selectable, id || this.mdId)
        }
      }
    },
    created () {
      this.addSelectableItem()
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
