<template>
  <div class="md-layout md-gutter md-alignment-center">
    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
      <span>Always Show</span>
    </div>

    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
      <span>Always Show</span>
    </div>

    <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
      <span>Always Show</span>
    </div>

    <div class="md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-hide">
      <span>Hide Xsmall</span>
    </div>

    <div class="md-layout-item md-medium-size-50 md-small-hide">
      <span>Hide Small</span>
    </div>

    <div class="md-layout-item md-medium-hide">
      <span>Hide Medium</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LayoutHorizontalHide'
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/theme/engine";

  .md-layout-item {
    height: 40px;
    margin-top: 8px;
    margin-bottom: 8px;

    span {
      width: 100%;
      height: 100%;
      padding: 8px;
      display: block;
      background: md-get-palette-color(teal, 200);
    }
  }
</style>
