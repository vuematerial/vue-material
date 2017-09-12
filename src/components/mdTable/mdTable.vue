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
      removeRow(row) {
        const index = this.data.indexOf(row);

        if (index !== -1) {
          this.data.splice(index, 1);
        }

        this.removeSelectedRow(row);
      },
      removeSelectedRow(row) {
        const selectedIndex = this.selectedRows.indexOf(row);

        if (selectedIndex !== -1) {
          this.selectedRows.splice(selectedIndex, 1);
        }
      },
      setRowSelection(isSelected, row) {
        if (isSelected) {
          this.selectedRows.push(row);
          return;
        }
        this.removeSelectedRow(row);
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
