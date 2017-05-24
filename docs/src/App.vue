<template>
  <div class="container">
    <slot />

    <div>
      <div>Default</div>
      <md-button :md-ripple="false">Button</md-button>
      <md-button class="md-primary">Button</md-button>
      <md-button class="md-accent">Button</md-button>
    </div>

    <div>
      <div>Raised</div>
      <md-button md-theme="secondary" class="md-raised">Button</md-button>
      <md-button md-theme="secondary" class="md-raised md-primary">Button</md-button>
      <md-button md-theme="secondary" class="md-raised md-accent">Button</md-button>
    </div>

    <div>
      <div>Dense</div>
      <md-button md-theme="tertiary" class="md-dense md-raised">Button</md-button>
      <md-button md-theme="tertiary" class="md-dense md-raised md-primary">Button</md-button>
      <md-button md-theme="tertiary" class="md-dense md-raised md-accent">Button</md-button>
    </div>

    <div>
      <div>Disabled</div>
      <md-button disabled>Button</md-button>
      <md-button disabled class="md-raised md-primary">Button</md-button>
      <md-button disabled class="md-raised md-accent">Button</md-button>
    </div>
  </div>
</template>

<style lang="scss">
  @import '~theme/index';

  @include md-register-theme('default', $md-theme-blue-red);
  @include md-register-theme('secondary', $md-theme-green-orange);
  @include md-register-theme('tertiary', $md-theme-black-green);

  @import '~base/theme';
  @import '~components/mdButton/theme';
</style>

<script>
  export default {
    name: 'app'
  }
</script>
