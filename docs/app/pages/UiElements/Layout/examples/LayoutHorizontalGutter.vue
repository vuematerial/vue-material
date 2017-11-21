<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item"></div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script>
  export default {
    name: 'LayoutHorizontalGutter'
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
      content: " ";
    }

    &:nth-child(1) {
      background: md-get-palette-color(red, 200);
    }

    &:nth-child(2) {
      background: md-get-palette-color(green, 200);
    }

    &:nth-child(3) {
      background: md-get-palette-color(blue, 200);
    }
  }
</style>
