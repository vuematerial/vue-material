<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-15"></div>
    <div class="md-layout-item"></div>
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-15"></div>
  </div>
</template>

<script>
  export default {
    name: 'LayoutHorizontalSizes'
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/theme/engine";

  .md-layout-item {
    height: 40px;

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      background: md-get-palette-color(green, 200);
      content: " ";
    }
  }
</style>
