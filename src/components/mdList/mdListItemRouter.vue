<template>
  <li class="md-list-item" :class="classes" :disabled="disabled">
    <slot />
    <md-ink-ripple :disabled="disabled" />
  </li>
</template>

<script>
  export default {
    name: 'md-list-item',
    props: {
      disabled: Boolean
    },
    computed: {
      classes() {
        return {
          'md-disabled': this.disabled
        };
      }
    }
  };
</script>
