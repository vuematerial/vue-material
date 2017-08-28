<template>
  <div class="md-speed-dial-content">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MdSpeedDialContent'
}
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-speed-dial-content {
    order: 1;
    display: flex;
    flex-direction: column;
    transition: .3s $md-transition-default-timing;

    .md-button:first-child {
      margin-top: 0;
    }
  }
</style>
