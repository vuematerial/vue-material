<template>
  <button :type="type || 'button'" :disabled="disabled" class="md-button" v-md-ink-ripple="disabled">
    <slot></slot>
  </button>
</template>

<style lang="scss" src="./mdButton.scss"></style>

<script>
  export default {
    props: {
      type: String,
      disabled: Boolean
    }
  };
</script>
