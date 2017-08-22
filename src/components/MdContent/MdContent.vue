<template>
  <div class="md-content" :class="[$mdActiveTheme]">
    <slot />
  </div>
</template>

<script>
import MdComponent from 'core/MdComponent'

export default new MdComponent({
  name: 'MdContent'
})
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-content {
    transition: .3s $md-transition-default-timing;
  }
</style>
