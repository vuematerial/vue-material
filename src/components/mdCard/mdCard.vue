<template>
  <div class="md-card" :class="[themeClass, classes]">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdCard.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-card',
    props: {
      mdWithHover: Boolean
    },
    mixins: [theme],
    computed: {
      classes() {
        return {
          'md-with-hover': this.mdWithHover
        };
      }
    }
  };
</script>
