<template>
  <div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-layout md-gutter">
        <div class="md-layout-item"></div>
        <div class="md-layout-item"></div>
        <div class="md-layout-item"></div>
      </div>

      <div class="md-layout-item md-layout md-gutter">
        <div class="md-layout-item"></div>
        <div class="md-layout-item"></div>
      </div>

      <div class="md-layout-item md-layout md-gutter">
        <div class="md-layout-item"></div>
        <div class="md-layout-item"></div>
        <div class="md-layout-item"></div>
        <div class="md-layout-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LayoutHorizontalNested'
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/theme/engine";

  .md-layout-item {
    height: 72px;

    &:after {
      width: 100%;
      height: 100%;
      display: block;
      content: " ";
    }

    &.md-layout {
      &:after {
        transform: translateY(-100%);
        background: md-get-palette-color(yellow, 200);
      }

      .md-layout-item:after {
        height: 40px;
        margin-top: 16px;
        position: relative;
        z-index: 1;
        background: md-get-palette-color(pink, 200);
      }
    }
  }
</style>
