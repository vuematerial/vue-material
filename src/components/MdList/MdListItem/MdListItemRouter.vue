<template>
  <router-link class="md-list-item-router" v-bind="routerProps">
    <md-list-item-content :md-disabled="isDisabled">
      <slot></slot>
    </md-list-item-content>
  </router-link>
</template>

<script>
  import MdListItemMixin from './MdListItemMixin'

  export default {
    name: 'MdListItemRouter',
    mixins: [MdListItemMixin],
    computed: {
      routerProps () {
        return this.$props
      }
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-list-item-router {

  }
</style>
