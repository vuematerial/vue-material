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
        numberOfRows: 0,
        numberOfSelected: 0,
        selectedRows: {}
      };
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
      }
    },
    watch: {
      data() {
        this.numberOfRows = this.data.length;
      },
      selectedRows() {
        this.numberOfSelected = Object.keys(this.selectedRows).length;
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
