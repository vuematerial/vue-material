<template>
  <div class="md-bottom-bar" :class="classes">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdBottomBar.scss"></style>

<script>
  export default {
    props: {
      mdShift: Boolean
    },
    computed: {
      classes() {
        return this.mdShift ? 'md-shift' : 'md-fixed';
      }
    }
  };
</script>
