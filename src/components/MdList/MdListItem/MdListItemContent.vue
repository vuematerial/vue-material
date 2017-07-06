<template>
  <md-ripple class="md-list-item-content" :md-disabled="mdDisabled">
    <slot></slot>
  </md-ripple>
</template>

<script>
  export default {
    name: 'MdListItemContent',
    props: {
      mdDisabled: Boolean
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-list-item-content {

  }
</style>
