<template>
  <div class="container" :class="containerClass">
    <md-toolbar class="main-header" :md-elevation="mainHeaderElevation" :class="mainHeaderClasses">
      <div class="logo">
        <logo-vue-material :animated="isHome" :blending="false" @click.native="$router.push('/')" />
      </div>

      <div class="md-title">
        <span class="md-hide-xsmall">Vue Material</span>
        <span class="md-hide-xsmall" v-if="pageTitle"> - </span>
        <span v-if="isHome">{{ pageTitle }}</span>
        <h1 class="md-title" v-else>{{ pageTitle }}</h1>
      </div>

      <md-button class="md-icon-button" @click="openGithub">
        <md-icon md-src="assets/icon-github.svg" class="icon-github" />
      </md-button>
    </md-toolbar>

    <div class="container-wrapper md-layout-row md-layout-column-xsmall">
      <transition name="nav" appear>
        <nav class="main-navigation" v-if="!isSplash">
          <router-link to="/">{{ $t('pages.home.title') }}</router-link>
          <router-link to="/getting-started">{{ $t('pages.gettingStarted.title') }}</router-link>
          <router-link to="/components">{{ $t('pages.components.title') }}</router-link>
          <div class="main-navigation-level">
            <router-link to="/components/button">{{ $t('pages.button.title') }}</router-link>
            <router-link to="/components/content">{{ $t('pages.content.title') }}</router-link>
            <router-link to="/components/icon">{{ $t('pages.icon.title') }}</router-link>
            <router-link to="/components/toolbar">{{ $t('pages.toolbar.title') }}</router-link>
          </div>
          <router-link to="/ui-elements">{{ $t('pages.uiElements.title') }}</router-link>
          <div class="main-navigation-level">
            <router-link to="/ui-elements/layout">{{ $t('pages.layout.title') }}</router-link>
          </div>
        </nav>
      </transition>

      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  @import "./themes/default";
  @import "./themes/dark";
  @import "./themes/demo";
</style>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";
  @import "~vue-material/theme/factory";

  $sizebar-width: 200px;

  .container {
    padding-top: 64px;
    font-family: "Roboto Mono", monospace;
    transition: $md-transition-default;
    transition-property: padding-top;

    @include md-layout-small {
      padding-top: 48px;
    }

    @include md-layout-xsmall {
      padding-top: 56px;
    }

    &:not(.splash) {
      padding-left: $sizebar-width;

      @include md-layout-xsmall {
        padding-left: 0;
      }
    }

    &.splash .main-header {
      max-width: 1312px;
      transition: .3s $md-transition-default-timing;
      transition-property: max-width;
    }
  }

  .main-header {
    margin: auto;
    max-width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
    transition: .3s $md-transition-default-timing,
                box-shadow .4s .1s $md-transition-stand-timing;
    will-change: box-shadow, max-width, background-color;

    &.md-transparent {
      background-color: #303030;
    }

    .md-title {
      flex: 1;
    }

    h1 {
      display: inline-block;
    }
  }

  .logo {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo-vue-material {
      max-width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  .main-navigation {
    width: $sizebar-width;
    padding: 0 16px 16px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 90px;
    bottom: 0;
    left: 0;
    transition: $md-transition-default;
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

  .main-navigation-level {
    margin-bottom: 8px;
    margin-left: 16px;
  }

  .main-container {
    position: relative;
    z-index: 1;
    flex: 1;
  }
</style>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapState({
        stateTitle: 'pageTitle',
        isSplash: 'splashPage'
      }),
      pageTitle () {
        const { stateTitle } = this

        return stateTitle && stateTitle
      },
      isHome () {
        return this.$route.path === '/'
      },
      containerClass () {
        const { isSplash } = this

        return {
          splash: isSplash
        }
      },
      mainHeaderClasses () {
        const { isSplash } = this

        return {
          'md-transparent': isSplash
        }
      },
      mainHeaderElevation () {
        if (this.isSplash) {
          return 0
        }

        return 2
      }
    },
    methods: {
      openGithub () {
        window.open('http://github.com/vuematerial/vue-material-experiments')
      }
    }
  }
</script>
