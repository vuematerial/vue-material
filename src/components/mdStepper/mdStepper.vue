<template>
  <div class="md-stepper" :class="[themeClass]">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdStepper.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    mixins: [theme]
  };
</script>
