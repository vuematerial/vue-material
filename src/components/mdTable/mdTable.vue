<template>
  <div class="md-table" :class="classes">
    <table>
      <slot></slot>
    </table>
  </div>
</template>

<style lang="scss" src="./mdTable.scss"></style>

<script>
  export default {
    props: {
      mdRowSelection: Boolean
    },
    data() {
      return {
        numberOfRows: 0,
        numberOfSelected: 0,
        selectedRows: {}
      };
    },
    computed: {
      classes() {
        return {

        };
      }
    },
    methods: {

    },
    mounted() {

    }
  };
</script>
