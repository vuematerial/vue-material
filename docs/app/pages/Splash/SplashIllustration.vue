<template>
  <div class="splash-illustration" v-once>
    <div class="sheet">
      <md-ripple />
    </div>

    <div class="sheet">
      <md-ripple />
    </div>

    <div class="sheet">
      <md-ripple />
    </div>

    <div class="sheet">
      <md-ripple />
    </div>

    <div class="sheet">
      <md-ripple />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdElevation/index";
  @import "~vue-material/theme/factory";

  .splash-illustration {
    width: 360px;
    height: 240px;
    margin-right: 40px;
    position: relative;
    @include md-elevation(8);

    .sheet {
      position: absolute;
      transition: $md-transition-stand .1s;
      will-change: transform, box-shadow, width, height;

      &:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 6;
        background: rgba(#000, .12);
        opacity: 0;
        transition: $md-transition-stand;
        content: " ";
      }

      &:active:before {
        opacity: 1;
      }

      &:nth-child(1) {
        width: 100%;
        height: 100%;
        left: 0;
        z-index: 5;
        background: md-get-palette-color(blue, A200);
        color: md-get-palette-color(blue, 800);
        animation: slidein1 $md-transition-enter 1s forwards;
      }

      &:nth-child(2) {
        width: 50%;
        height: 100%;
        right: 0;
        z-index: 4;
        background: md-get-palette-color(lightgreen, A200);
        color: md-get-palette-color(lightgreen, 800);
        animation: slidein2 $md-transition-enter 1.2s forwards;
      }

      &:nth-child(3) {
        width: 50%;
        height: 50%;
        bottom: 0;
        left: 50%;
        z-index: 3;
        background: md-get-palette-color(red, A200);
        color: md-get-palette-color(red, 800);
        animation: slidein3 $md-transition-enter 1.4s forwards;
      }

      &:nth-child(4) {
        width: 25%;
        height: 50%;
        top: 50%;
        right: 0;
        z-index: 2;
        background: md-get-palette-color(purple, A200);
        color: md-get-palette-color(purple, 800);
        animation: slidein4 $md-transition-enter 1.6s forwards;
      }

      &:nth-child(5) {
        width: 25%;
        height: 25%;
        bottom: 0;
        left: 75%;
        background: md-get-palette-color(grey, 50);
        color: md-get-palette-color(grey, 600);
        z-index: 1;
      }
    }

    @keyframes slidein1 {
      0% {
        width: 100%;
      }

      100% {
        width: 50%;
      }
    }

    @keyframes slidein2 {
      0% {
        height: 100%;
      }

      100% {
        height: 50%;
      }
    }

    @keyframes slidein3 {
      0% {
        width: 50%;
      }

      100% {
        width: 25%;
      }
    }

    @keyframes slidein4 {
      0% {
        height: 50%;
      }

      100% {
        height: 25%;
      }
    }

    @keyframes slidein5 {
      0% {
        width: 25%;
      }

      100% {
        width: 12.5%;
      }
    }
  }
</style>

<script>
  export default {
    name: 'SplashIllustation'
  }
</script>
