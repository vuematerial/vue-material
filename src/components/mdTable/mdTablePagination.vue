<template>
  <div class="md-table-pagination">
    <span class="md-table-pagination-label">Rows per page:</span>

    <md-select v-model="currentSize" @change="$emit('size')">
      <md-option value="10">10</md-option>
      <md-option value="25">25</md-option>
      <md-option value="50">50</md-option>
      <md-option value="100">100</md-option>
    </md-select>

    <span>1-10 of {{ mdTotal }}</span>

    <md-button class="md-icon-button md-table-pagination-previous">
      <md-icon>keyboard_arrow_left</md-icon>
    </md-button>

    <md-button class="md-icon-button md-table-pagination-next">
      <md-icon>keyboard_arrow_right</md-icon>
    </md-button>
  </div>
</template>

<script>
  export default {
    props: {
      mdSize: {
        type: Number,
        default: 10
      },
      mdPage: {
        type: Number,
        default: 1
      },
      mdTotal: {
        type: [Number, String],
        default: 'Many'
      }
    },
    data() {
      return {
        currentSize: this.mdSize,
        currentPage: this.mdPage
      };
    }
  };
</script>
