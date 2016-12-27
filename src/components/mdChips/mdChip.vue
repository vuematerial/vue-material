<template>
  <div class="md-chip" :class="[themeClass, classes]" tabindex="0">
    <slot></slot>
  </div>
</template>

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
