<template>
  <home-icon class="home-icon-circle">
    <div class="circle">
      <md-ripple md-centered />
    </div>

    <div class="circle"></div>
    <div class="circle"></div>
  </home-icon>
</template>

<script>
  import HomeIcon from './HomeIcon'

  export default {
    name: 'HomeIconCircle',
    components: {
      HomeIcon
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";
  @import "~vue-material/theme/engine";

  .home-icon-circle {
    &:hover .circle {
      &:nth-child(2) {
        transform: scale(.66) translate3D(0, -75%, 0);

        @include md-layout-xsmall {
          transform: scale(.66) translate3D(-75%, -75%, 0);
        }
      }

      &:nth-child(3) {
        transform: scale(.33) translate3D(0, -150%, 0);

        @include md-layout-xsmall {
          transform: scale(.33) translate3D(-150%, -150%, 0);
        }
      }
    }
  }

  .circle {
    position: absolute;
    top: 50%;
    left: 0;
    border-radius: 100%;
    transform: translate3D(0, -50%, 0);
    transition: $md-transition-stand;
    will-change: transform;

    @include md-layout-xsmall {
      left: 50%;
      transform: translate3D(-50%, -50%, 0);
    }

    &:nth-child(1) {
      background: md-get-palette-color(cyan, 300);
      transform: scale(.98) translate3D(0, -50%, 0);

      @include md-layout-xsmall {
        transform: scale(.98) translate3D(-50%, -50%, 0);
      }
    }

    &:nth-child(2) {
      background: md-get-palette-color(red, 400);
      transform: scale(.98) translate3D(0, -50%, 0);

      @include md-layout-xsmall {
        transform: scale(.98) translate3D(-50%, -50%, 0);
      }
    }

    &:nth-child(3) {
      color: md-get-palette-color(yellow, 900);
      background: md-get-palette-color(yellow, 500);
    }

    .md-ripple {
      border-radius: 50%;
    }
  }
</style>
