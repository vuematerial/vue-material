<template>
  <md-ripple class="md-list-item-content" :md-disabled="mdDisabled">
    <slot />
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
