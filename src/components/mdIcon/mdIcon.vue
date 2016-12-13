<template>
  <i class="md-icon material-icons" :class="[themeClass]">
    <slot></slot>
  </i>
</template>

<style lang="scss" src="./mdIcon.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    mixins: [theme]
  };
</script>
