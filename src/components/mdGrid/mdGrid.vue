<template>
  <div class="md-grid" :class="[themeClass]">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdGrid.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    mixins: [theme]
  };
</script>
