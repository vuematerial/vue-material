<template>
  <div class="md-file" :class="[themeClass, classes]">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdFile.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    props: {

    },
    mixins: [theme],
    data: () => ({

    }),
    watch: {

    },
    computed: {
      classes() {
        return {

        };
      }
    },
    methods: {

    },
    created() {

    }
  };
</script>
