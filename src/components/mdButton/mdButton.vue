<template>
  <button class="md-button" :type="type || 'button'" :disabled="disabled" v-md-ink-ripple="disabled">
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
