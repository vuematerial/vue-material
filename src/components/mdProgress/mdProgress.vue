<template>
  <transition name="md-progress" appear>
    <div class="md-progress" :class="[themeClass, classes]":style="styles">
    </div>
  </transition>
</template>

<style lang="scss" src="./mdProgress.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    props: {

    },
    mixins: [theme],
    computed: {
      classes() {
        return {

        };
      },
      styles() {
        return {

        };
      }
    },
    data: () => ({

    }),
    methods: {

    }
  };
</script>
