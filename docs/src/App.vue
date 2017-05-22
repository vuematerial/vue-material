<template>
  <div class="container">
    <slot />

    <div>
      <div>Default</div>
      <md-button>Button</md-button>
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
      <md-button md-theme="secondary" class="md-dense">Button</md-button>
      <md-button md-theme="secondary" class="md-dense md-raised">Button</md-button>
      <md-button md-theme="secondary" class="md-dense md-raised md-primary">Button</md-button>
      <md-button md-theme="secondary" class="md-dense md-raised md-accent">Button</md-button>
    </div>

    <div>
      <div>Disabled</div>
      <md-button disabled md-theme="tertiary">Button</md-button>
      <md-button disabled md-theme="tertiary" class="md-raised md-primary">Button</md-button>
      <md-button disabled md-theme="tertiary" class="md-raised md-accent">Button</md-button>
    </div>
  </div>
</template>

<style lang="scss">
  @import '~theme/index';

  @include md-register-theme('default', $md-theme-black-green);
  @include md-register-theme('secondary', $md-theme-green-orange);
  @include md-register-theme('tertiary', $md-theme-blue-red);

  @import '~base/theme';
  @import '~components/mdButton/theme';
</style>

<script>
  export default {
    name: 'app'
  }
</script>
