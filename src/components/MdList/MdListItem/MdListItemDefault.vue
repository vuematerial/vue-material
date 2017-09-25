<template>
  <div class="md-list-item-default">
    <md-list-item-content md-disabled>
      <slot />
    </md-list-item-content>
  </div>
</template>

<script>
  import MdListItemMixin from './MdListItemMixin'

  export default {
    name: 'MdListItemDefault',
    mixins: [MdListItemMixin]
  }
</script>
