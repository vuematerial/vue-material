<template>
  <a class="md-list-item-link" v-bind="{ href, disabled, target }">
    <md-list-item-content :md-disabled="isDisabled">
      <slot></slot>
    </md-list-item-content>
  </a>
</template>

<script>
  import MdListItemMixin from './MdListItemMixin'

  export default {
    name: 'MdListItemLink',
    mixins: [MdListItemMixin],
    props: {
      href: String,
      target: String
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-list-item-link {

  }
</style>
