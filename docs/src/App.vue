<template>
  <div class="container">
    <slot />

    <div>
      <md-button>Button</md-button>
      <md-button class="md-accent">Button</md-button>
    </div>

    <div>
      <md-button md-theme="secondary">Button</md-button>
      <md-button md-theme="secondary" class="md-accent">Button</md-button>
    </div>

    <div>
      <md-button md-theme="tertiary">Button</md-button>
      <md-button md-theme="tertiary" class="md-accent">Button</md-button>
    </div>
  </div>
</template>

<style lang="scss">
  @import '~theme/index';

  @include md-register-theme('default', $md-theme-black-green);
  @include md-register-theme('secondary', $md-theme-green-orange);
  @include md-register-theme('tertiary', $md-theme-blue-red);

  @import '~components/mdButton/theme';
</style>

<script>
  export default {
    name: 'app'
  }
</script>
