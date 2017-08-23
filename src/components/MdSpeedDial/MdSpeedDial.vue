<template>
  <div class="md-speed-dial" :class="[$mdActiveTheme]">
    <slot />
  </div>
</template>

<script>
import MdComponent from 'core/MdComponent'

export default new MdComponent({
  name: 'MdSpeedDial'
})
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-speed-dial {
    transition: .3s $md-transition-default-timing;
  }
</style>
