<template>
  <div class="container" :class="containerClass">
    <main-header />

    <div class="container-wrapper md-layout-row" :class="containerClass">
      <main-nav :is-splash="isSplash" />

      <router-view />
    </div>

    <main-footer />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import MainHeader from './template/MainHeader'
  import MainNav from './template/MainNav'
  import MainFooter from './template/MainFooter'

  export default {
    name: 'App',
    components: {
      MainHeader,
      MainNav,
      MainFooter
    },
    computed: {
      ...mapState({
        isSplash: 'splashPage'
      }),
      containerClass () {
        return {
          splash: this.isSplash
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./themes/default";
  @import "./themes/dark";
  @import "./themes/demo";

  body {
    height: 100%;
  }
</style>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";
  @import "~vue-material/theme/factory";

  .container {
    min-height: 100%;
    padding-top: 64px;
    display: flex;
    flex-direction: column;
    font-family: "Roboto Mono", monospace;
    transition: $md-transition-default;
    transition-property: padding-top;

    @include md-layout-small {
      padding-top: 48px;
    }

    @include md-layout-xsmall {
      padding-top: 56px;
    }

    &.splash .main-header {
      max-width: 1312px;
      transition: .3s $md-transition-default-timing;
      transition-property: max-width;
    }
  }

  .container-wrapper {
    &:not(.splash) {
      padding-left: 210px !important;

      @include md-layout-xsmall {
        padding-left: 0 !important;
      }
    }
  }

  .main-container {
    flex: 1;
    position: relative;
    z-index: 1;
  }
</style>
