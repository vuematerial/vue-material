<template>
  <div class="container">
    <slot />

    <md-button @click.native="accent = !accent" :class="{ 'md-accent': accent }" class="md-theme-default">Button</md-button>
    <md-button @click.native="accent = !accent" :class="{ 'md-accent': accent }" class="md-theme-alt">Button</md-button>
  </div>
</template>

<style lang="scss">
  @import '~theme';

  @include md-apply-theme('default');
  @include md-apply-theme('alt', (
    primary: #212121,
    accent: #CDDC39
  ));

  @import '~components/mdButton/theme';
</style>

<script>
  import MdButton from 'components/mdButton/mdButton'

  export default {
    name: 'app',
    components: {
      MdButton
    },
    data: () => ({
      accent: false
    })
  }
</script>
