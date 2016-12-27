<template>
  <div class="md-chips" :class="[themeClass, classes]" tabindex="0">
    <div class="md-chips-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" src="./mdChips.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    data: () => ({

    }),
    mixins: [theme],
    computed: {
      classes() {

      }
    },
    methods: {

    }
  };
</script>
