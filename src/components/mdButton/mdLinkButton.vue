<template>
  <a class="md-button" :disabled="disabled" v-md-ink-ripple="disabled">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    props: {
      disabled: Boolean
    }
  };
</script>
