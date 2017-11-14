<template>
  <home-icon class="home-icon-square">
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
  </home-icon>
</template>

<script>
  import HomeIcon from './HomeIcon'

  export default {
    name: 'HomeIconSquare',
    components: {
      HomeIcon
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/engine";

  .home-icon-square {
    &:hover {
      .square {
        opacity: .87;

        &:nth-child(2) {
          transform: translate3d(16px, 16px, 0);
        }

        &:nth-child(3) {
          transform: translate3d(32px, 32px, 0);
        }
      }
    }
  }

  .square {
    position: absolute;
    top: 0;
    left: 0;
    transition: $md-transition-stand;
    will-change: transform, opacity;

    &:nth-child(1) {
      background: md-get-palette-color(blue, A200);
    }

    &:nth-child(2) {
      background: md-get-palette-color(lightgreen, A200);
      transform: translate3d(8px, 8px, 0);
    }

    &:nth-child(3) {
      background: md-get-palette-color(grey, 50);
      transform: translate3d(16px, 16px, 0);
    }
  }
</style>
