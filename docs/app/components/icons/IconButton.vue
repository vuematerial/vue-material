<template>
  <div class="icon-button" v-once>
    <div class="square"></div>
    <div class="circle"></div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/engine";

  .icon-button {
    position: relative;
  }

  .square {
    width: 100%;
    height: 40%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 2px;
    border: 2px solid md-get-palette-color(blue, A200);
  }

  .circle {
    width: 55%;
    height: 55%;
    position: absolute;
    top: 45%;
    right: 0;
    border-radius: 50%;
    border: 2px solid md-get-palette-color(lightgreen, A200);
    transition: $md-transition-stand;
    transform: translateZ(0);

    &:hover {
      transform: translateZ(0) rotate(180deg);
    }

    &:after,
    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      background-color: #fff;
      content: " ";
    }

    &:before {
      width: 3%;
      height: 42%;
    }

    &:after {
      width: 42%;
      height: 3%;
    }
  }
</style>

<script>
export default {
  name: 'IconButton'
}
</script>
