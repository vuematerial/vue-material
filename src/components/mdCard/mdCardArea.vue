<template>
  <div class="md-card-area" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'md-card-area',
    props: {
      mdInset: Boolean
    },
    computed: {
      classes() {
        return {
          'md-inset': this.mdInset
        };
      }
    }
  };
</script>
