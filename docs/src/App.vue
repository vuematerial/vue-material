<template>
  <div class="container">
    <slot />

    <div>
      <md-button class="md-theme-root">Button</md-button>
      <md-button class="md-theme-root md-accent">Button</md-button>
    </div>

    <div>
      <md-button class="md-theme-secondary">Button</md-button>
      <md-button class="md-theme-secondary md-accent">Button</md-button>
    </div>

    <div>
      <md-button class="md-theme-tertiary">Button</md-button>
      <md-button class="md-theme-tertiary md-accent">Button</md-button>
    </div>
  </div>
</template>

<style lang="scss">
  @import '~theme';

  @include md-register-theme('root', $md-theme-black-green);
  @include md-register-theme('secondary', $md-theme-green-orange);
  @include md-register-theme('tertiary',$md-theme-blue-red);

  @import '~components/mdButton/theme';
</style>

<script>
  export default {
    name: 'app'
  }
</script>
