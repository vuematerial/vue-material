<template>
  <button type="button" class="md-list-item-button">
    <md-list-item-content :md-disabled="isDisabled">
      <slot></slot>
    </md-list-item-content>
  </button>
</template>

<script>
import MdListItemMixin from './MdListItemMixin'

export default {
  name: 'MdListItemButton',
  mixins: [MdListItemMixin]
}
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-list-item-button {

  }
</style>
