<template>
  <a class="md-list-item-link" v-bind="$props">
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
      download: String,
      href: String,
      hreflang: String,
      ping: String,
      rel: String,
      target: String,
      type: String
    }
  }
</script>
