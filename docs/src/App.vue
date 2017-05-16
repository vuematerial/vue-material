<template>
  <div class="container">
    <slot />

    <div class="md-button md-theme-default" @click="accent = !accent" :class="{ 'md-accent': accent }"></div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~theme/index';
  @import '~components/mdButton/theme';

  @include md-apply-theme('default');
  @include md-apply-theme('alt', (
    primary: green
  ));
</style>

<script>
  export default {
    name: 'app',
    data: () => ({
      accent: false
    })
  }
</script>
