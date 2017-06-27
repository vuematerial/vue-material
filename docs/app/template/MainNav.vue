<template>
  <transition name="nav" appear>
    <nav class="main-nav" v-if="!isSplash">
      <router-link to="/">{{ $t('pages.home.title') }}</router-link>
      <router-link to="/getting-started">{{ $t('pages.gettingStarted.title') }}</router-link>

      <router-link to="/components">{{ $t('pages.components.title') }}</router-link>
      <div class="main-nav-level">
        <router-link to="/components/button">{{ $t('pages.button.title') }}</router-link>
        <router-link to="/components/content">{{ $t('pages.content.title') }}</router-link>
        <router-link to="/components/icon">{{ $t('pages.icon.title') }}</router-link>
        <router-link to="/components/toolbar">{{ $t('pages.toolbar.title') }}</router-link>
      </div>

      <router-link to="/ui-elements">{{ $t('pages.uiElements.title') }}</router-link>
      <div class="main-nav-level">
        <router-link to="/ui-elements/layout">{{ $t('pages.layout.title') }}</router-link>
      </div>
    </nav>
  </transition>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'MainNav',
    computed: {
      ...mapState({
        isSplash: 'splashPage'
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";
  @import "~vue-material/theme/factory";

  .main-nav {
    width: 200px;
    padding: 0 16px 16px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 90px;
    bottom: 0;
    left: 0;
    z-index: 3;
    transition: .3s $md-transition-default-timing;
    transition-property: top;
    font-size: 14px;

    @include md-layout-small {
      top: 74px;
    }

    @include md-layout-xsmall {
      top: 82px;
      padding: 16px;
      position: static;
    }

    a {
      display: block;
      color: inherit;
      line-height: 2em;
    }

    .router-link-exact-active {
      color: md-get-palette-color(pink, 700);
    }
  }

  .nav-leave-active {
    display: none;
  }

  .nav-enter-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
    transition: .4s $md-transition-default-timing;
    transition-property: opacity, transform;
    will-change: opacity, transform;
  }

  .nav-enter-to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .main-nav-level {
    margin-bottom: 8px;
    margin-left: 16px;
  }
</style>
