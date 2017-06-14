<template>
  <md-ripple :md-disabled="!mdRipple || disabled">
    <span class="md-button-content">
      <slot />
    </span>
  </md-ripple>
</template>

<script>
  export default {
    name: 'MdButtonContent',
    props: {
      mdRipple: Boolean,
      disabled: Boolean
    }
  }
</script>
