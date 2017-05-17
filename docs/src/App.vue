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

  @include md-apply-theme('root', $md-theme-black-green);
  @include md-apply-theme('secondary', $md-theme-green-orange);
  @include md-apply-theme('tertiary',$md-theme-blue-red);

  @import '~components/mdButton/theme';
</style>

<script>
  import MdButton from 'components/mdButton/mdButton'

  export default {
    name: 'app',
    components: {
      MdButton
    }
  }
</script>
