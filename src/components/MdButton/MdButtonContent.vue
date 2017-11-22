<template>
  <md-ripple :md-disabled="!mdRipple || disabled">
    <div class="md-button-content">
      <slot />
    </div>
  </md-ripple>
</template>

<script>
  import MdRipple from 'components/MdRipple/MdRipple'

  export default {
    name: 'MdButtonContent',
    components: {
      MdRipple
    },
    props: {
      mdRipple: Boolean,
      disabled: Boolean
    }
  }
</script>

<style lang="scss">
  .md-button-content {
    position: relative;
    z-index: 2;
  }
</style>
