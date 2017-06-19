<template>
  <li class="md-subheader" :class="[themeClass]" v-if="$parent.$options._componentTag === 'md-list'">
    <slot></slot>
  </li>

  <div class="md-subheader" :class="[themeClass]" v-else>
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdSubheader.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-subheader',
    mixins: [theme]
  };
</script>
