<template>
  <a class="md-list-item-link" v-bind="{ href, disabled, target }">
    <md-list-item-content :md-disabled="isDisabled">
      <slot />
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
