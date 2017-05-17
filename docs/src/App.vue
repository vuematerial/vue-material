<template>
  <div class="container">
    <slot />

    <div class="md-button md-theme-default" @click="accent = !accent" :class="{ 'md-accent': accent }">Button</div>
    <div class="md-button md-theme-alt" @click="accent = !accent" :class="{ 'md-accent': accent }">Button</div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~theme/index';

  @include md-apply-theme('default');
  @include md-apply-theme('alt', (
    primary: #212121,
    accent: #CDDC39
  ));

  @import '~components/mdButton/mdButton';
</style>

<script>
  export default {
    name: 'app',
    data: () => ({
      accent: false
    })
  }
</script>
