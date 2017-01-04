<template>
  <i class="md-icon-css" :class="[themeClass, cls]">
     <slot></slot>
  </i>
</template>

<style lang="scss" src="./mdIconCSS.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    props: {
      cls: String
    },
    mixins: [theme]
  };
</script>
