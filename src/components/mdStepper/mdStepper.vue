<template>
  <ul class="md-stepper" :class="[themeClass]">
    <slot></slot>
  </ul>
</template>

<style lang="scss" src="./mdStepper.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    mixins: [theme]
  };
</script>
