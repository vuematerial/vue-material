<template>
  <div class="md-layout md-gutter md-alignment-center">
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></div>
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></div>
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></div>
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></div>
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></div>
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></div>
  </div>
</template>

<script>
  export default {
    name: 'LayoutHorizontalResponsive'
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/engine";

  .md-layout-item {
    height: 40px;
    margin-top: 8px;
    margin-bottom: 8px;
    transition: .3s $md-transition-stand-timing;

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      background: md-get-palette-color(purple, 200);
      content: " ";
    }
  }
</style>
