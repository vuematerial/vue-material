<template>
  <md-ripple class="md-list-item-content" :md-disabled="mdDisabled">
    <slot></slot>
  </md-ripple>
</template>

<script>
import MdRipple from 'components/MdRipple/MdRipple.vue'

export default {
  name: 'MdListItemContent',
  components: {
    MdRipple
  },
  props: {
    mdDisabled: Boolean
  }
}
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-list-item-content {

  }
</style>
