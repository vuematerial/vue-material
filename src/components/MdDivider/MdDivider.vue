<template>
  <hr class="md-divider" :class="[$mdActiveTheme]">
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdDivider'
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-divider {
    height: 1px;
    margin: 0;
    padding: 0;
    display: block;
    border: 0;
    transition: .3s $md-transition-default-timing;

    &.md-inset {
      margin-left: 72px;
    }
  }
</style>
