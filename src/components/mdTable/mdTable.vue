<template>
  <div class="md-table" :class="[themeClass]">
    <table>
      <slot></slot>
    </table>
  </div>
</template>

<style lang="scss" src="./mdTable.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    name: 'md-table',
    props: {
      mdSortType: String,
      mdSort: String
    },
    mixins: [theme],
    data() {
      return {
        sortType: this.mdSortType,
        sortBy: this.mdSort,
        hasRowSelection: false,
        data: [],
        selectedRows: []
      };
    },
    computed: {
      numberOfRows() {
        return this.data ?
          this.data.length :
          0;
      },
      numberOfSelected() {
        return this.selectedRows ?
          this.selectedRows.length :
          0;
      }
    },
    methods: {
      emitSort(name) {
        this.sortBy = name;
        this.$emit('sort', {
          name,
          type: this.sortType
        });
      },
      emitSelection() {
        this.$emit('select', this.selectedRows);
      },
      removeRow(row, array = null) {
        const list = array || this.data;
        const index = list.indexOf(row);

        if (index !== -1) {
          list.splice(index, 1);
        }
      },
      setRowSelection(isSelected, row) {
        if (isSelected) {
          this.selectedRows.push(row);
          return;
        }
        this.removeRow(row, this.selectedRows);
      },
      setMultipleRowSelection(isSelected) {
        this.selectedRows = isSelected ?
          Object.assign([], this.data) :
          [];
      }
    },
    watch: {
      mdSort() {
        this.sortBy = this.mdSort;
        this.$emit('sortInput');
      },
      mdSortType() {
        this.sortType = this.mdSortType;
        this.$emit('sortInput');
      }
    },
    mounted() {
      this.parentCard = getClosestVueParent(this.$parent, 'md-table-card');

      if (this.parentCard) {
        this.parentCard.tableInstance = this;
      }
    }
  };
</script>
