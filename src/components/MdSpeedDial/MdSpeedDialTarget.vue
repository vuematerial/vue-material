<template>
  <md-button class="md-speed-dial-target md-fab">
    <slot />
  </md-button>
</template>

<script>
export default {
  name: 'MdSpeedDialTarget'
}
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-speed-dial-target {
    order: 2;
    margin-bottom: 0 !important;
    transition: .3s $md-transition-default-timing;
  }
</style>
