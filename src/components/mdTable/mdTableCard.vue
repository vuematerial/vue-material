<template>
  <md-card class="md-table-card" :class="[themeClass]">
    <slot></slot>
  </md-card>
</template>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-table-card',
    mixins: [theme]
  };
</script>
