<template>
  <td class="md-table-cell" :class="classes">
    <div class="md-table-cell-container">
      <slot></slot>
    </div>
  </td>
</template>

<script>
  export default {
    props: {
      mdNumeric: Boolean
    },
    computed: {
      classes() {
        return {
          'md-numeric': this.mdNumeric
        };
      }
    }
  };
</script>
