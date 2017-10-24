<template>
  <tr class="md-table-row" :class="rowClasses" @click="autoSelectRow">
    <md-table-cell-selection v-model="isSelected" :md-selectable="mdSelectable" :md-row-id="uniqueId" />
    <slot />
  </tr>
</template>

<script>
  import MdUuid from 'core/utils/MdUuid'
  import MdTableCellSelection from './MdTableCellSelection'

  export default {
    name: 'MdTableRow',
    components: {
      MdTableCellSelection
    },
    props: {
      mdIndex: [Number, String],
      mdSelectable: Boolean,
      mdAutoSelect: Boolean
    },
    inject: ['MdTable'],
    data: () => ({
      index: null,
      uniqueId: 'md-row-' + MdUuid(),
      isSelected: false
    }),
    computed: {
      rowClasses () {
        return {
          'md-autoselect': this.mdAutoSelect,
          'md-selected': this.isSelected
        }
      }
    },
    methods: {
      autoSelectRow () {
        if (this.mdAutoSelect) {
          this.isSelected = !this.isSelected
        }
      }
    },
    async mounted () {
      await this.$nextTick()

      this.$set(this.MdTable.selectable, this.mdIndex, this.mdSelectable)
    },
    beforeDestroy () {
      if (this.mdItem) {
        this.$set(this.MdTable.selectable, this.mdIndex)
      }
    }
  }
</script>

<style lang="scss">
  .md-table-row {
    &.md-autoselect {
      cursor: pointer;
    }

    tbody & td {
      border-top: 1px solid;
    }
  }
</style>

