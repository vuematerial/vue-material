<template>
  <div class="md-list-item-fake-button" :disabled="disabled">
    <md-list-item-content :md-disabled="isDisabled">
      <slot />
    </md-list-item-content>
  </div>
</template>

<script>
  import MdListItemMixin from './MdListItemMixin'

  export default {
    name: 'MdListItemFakeButton',
    mixins: [MdListItemMixin]
  }
</script>
