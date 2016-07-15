<template>
  <a :disabled="disabled" class="md-button" v-md-ink-ripple="disabled">
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
