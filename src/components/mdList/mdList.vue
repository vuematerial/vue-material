<template>
  <ul class="md-list" :class="[themeClass]">
    <slot></slot>
  </ul>
</template>

<style lang="scss" src="./mdList.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    mixins: [theme]
  };
</script>
