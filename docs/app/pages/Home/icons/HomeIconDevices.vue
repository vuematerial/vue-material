<template>
  <home-icon class="home-icon-devices">
    <div class="device"></div>
    <div class="device"></div>
    <div class="device"></div>
  </home-icon>
</template>

<script>
  import HomeIcon from './HomeIcon'

  export default {
    name: 'HomeIconDevices',
    components: {
      HomeIcon
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/engine";

  .home-icon-devices {
    width: 160px;

    &:hover .device {
      &:nth-child(2) {
        top: -30%;
        right: -45%;
        bottom: 65%;
        left: 85%;
      }

      &:nth-child(3) {
        right: -10%;
        left: 85%;
      }
    }
  }

  div.device {
    width: auto;
    height: auto;
    position: absolute;
    transition: $md-transition-default;
    will-change: z-index, transform;

    &:after,
    &:before {
      position: absolute;
      content: " ";
    }

    &:after {
      width: 6px;
      height: 6px;
      right: 3px;
      bottom: 3px;
      border-radius: 50%;
      background: md-get-palette-color(red, 500);
    }

    &:before {
      height: 8px;
      top: 0;
      right: 0;
      left: 0;
    }

    &:nth-child(1) {
      top: 0;
      right: 20%;
      bottom: 10%;
      left: 0%;
      z-index: 1;
      background: md-get-palette-color(blue, 500);

      &:before {
        background: md-get-palette-color(blue, 700);
      }
    }

    &:nth-child(2) {
      top: 35%;
      right: 10%;
      bottom: 0;
      left: 30%;
      z-index: 2;
      background: md-get-palette-color(cyan, 400);

      &:before {
        background: md-get-palette-color(cyan, 600);
      }
    }

    &:nth-child(3) {
      top: 45%;
      right: 0;
      bottom: -10%;
      left: 75%;
      z-index: 3;
      background: md-get-palette-color(grey, 50);

      &:before {
        background: md-get-palette-color(grey, 200);
      }
    }
  }
</style>
