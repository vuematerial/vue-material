<template>
  <div class="md-toolbar" :class="[themeClass]">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdToolbar.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-toolbar',
    mixins: [theme]
  };
</script>
