<template>
  <div class="md-table">
    <table>
      <slot></slot>
    </table>
  </div>
</template>

<style lang="scss" src="./mdTable.scss"></style>

<script>
  export default {
    props: {
      mdRowSelection: Boolean,
      mdSortType: String,
      mdSort: String
    },
    data() {
      return {
        sortType: this.mdSortType,
        sortBy: this.mdSort,
        numberOfRows: 0,
        numberOfSelected: 0,
        selectedRows: {}
      };
    },
    methods: {
      emitSort(name) {
        this.sortBy = name;
        this.$emit('sort', name);
      }
    },
    mounted() {
      if (this.$parent.$el.classList.contains('md-table-card')) {
        this.$parent.tableInstance = this;
      }
    }
  };
</script>
