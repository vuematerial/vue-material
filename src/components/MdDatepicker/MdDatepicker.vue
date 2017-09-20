<template>
  <div class="md-datepicker" :class="[$mdActiveTheme]">
    <slot />
  </div>
</template>

<script>
import MdComponent from 'core/MdComponent'

export default new MdComponent({
  name: 'MdDatepicker'
})
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-datepicker {
    transition: .3s $md-transition-default-timing;
  }
</style>