<template>
  <div class="md-card" :class="classes">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdCard.scss"></style>

<script>
  export default {
    props: {
      mdWithHover: Boolean
    },
    computed: {
      classes() {
        return {
          'md-with-hover': this.mdWithHover
        };
      }
    }
  };
</script>
