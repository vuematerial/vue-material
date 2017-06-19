<template>
  <div class="md-bottom-bar" :class="[themeClass, classes]">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdBottomBar.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-bottom-bar',
    props: {
      mdShift: Boolean
    },
    mixins: [theme],
    computed: {
      classes() {
        return this.mdShift ? 'md-shift' : 'md-fixed';
      }
    },
    methods: {
      setActive(item) {
        this.$children.forEach((child) => {
          child.active = child === item;
        });

        this.$emit('change', this.$children.findIndex((i) => i === item));
      }
    }
  };
</script>
