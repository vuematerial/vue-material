<template>
  <td class="md-table-cell" :class="classes">
    <div class="md-table-cell-container">
      <slot></slot>
    </div>
  </td>
</template>

<script>
  export default {
    name: 'md-table-cell',
    props: {
      mdNumeric: Boolean
    },
    data: () => ({
      hasAction: false
    }),
    computed: {
      classes() {
        return {
          'md-numeric': this.mdNumeric,
          'md-has-action': this.hasAction
        };
      }
    },
    mounted() {
      if (this.$children.length > 0) {
        this.hasAction = true;
      }
    }
  };
</script>
