<template>
  <md-toolbar class="main-header" :class="mainHeaderClasses" :md-elevation="mainHeaderElevation">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <md-button to="/" class="md-icon-button logo">
          <logo-vue-material :animated="isHome" />
        </md-button>

        <md-button class="md-icon-button menu" @click="showMenu">
          <md-icon>menu</md-icon>
        </md-button>

        <div class="md-title">
          <span class="md-xsmall-hide">Vue Material</span>
          <span class="md-xsmall-hide" v-if="pageTitle"> - </span>
          <span v-if="isHome">{{ pageTitle }}</span>
          <h1 class="md-title" v-else>{{ pageTitle }}</h1>
        </div>
      </div>

      <div class="md-toolbar-section-end">
        <div class="md-medium-hide">
          <md-button href="/getting-started">
            Docs
          </md-button>

          <md-button href="/components/app">
            Components
          </md-button>

          <md-button href="/premium-themes">
            Premium themes
          </md-button>
          <md-menu md-size="medium" md-align-trigger>
            <md-button md-menu-trigger>
              Ecosystem

              <md-icon class="md-size-1x">arrow_drop_down</md-icon>

            </md-button>
            <md-menu-content>
              <md-menu-item>
                <router-link to="/getting-started">
                  Getting started
                </router-link>

              </md-menu-item>
              <md-menu-item>
                <router-link to="/about">
                  About
                </router-link>

              </md-menu-item>
              <md-menu-item>
                <a href="https://www.creative-tim.com/services/updivision?ref=vuematarial.io" target="_blank">
                  Custom development
                </a>
              </md-menu-item>
              <md-menu-item>
                <a href="https://github.com/vuematerial/webpack" target="_blank">
                  Webpack SPA
                </a>
              </md-menu-item>
              <md-menu-item>
                <a href="https://github.com/vuematerial/nuxtjs" target="_blank">
                  Nuxt.js
                </a>
              </md-menu-item>

              <md-menu-item>
                <a href="https://codesandbox.io/s/github/vuematerial/examples/tree/master/examples/quick-start" target="_blank">
                  Codesandbox
                </a>
              </md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>

        <md-button href="http://github.com/vuematerial/vue-material" target="_blank" class="md-icon-button">
          <md-icon md-src="/assets/icon-github.svg" class="icon-github" />
        </md-button>

        <div v-if="!isSplash">
          <md-menu md-align-trigger>
            <md-button class="button-theme md-icon-button md-dense md-raised md-primary" md-menu-trigger>
              <md-icon class="icon-github">invert_colors</md-icon>
            </md-button>
            <md-menu-content class="fixed-theme-selector-items">
              <md-menu-item class="align-center" :class="getPrimaryClass('default')" @click="setTheme('default')"><md-avatar md-theme="default" class="md-small md-primary"></md-avatar> Light</md-menu-item>
              <md-menu-item class="align-center" :class="getPrimaryClass('default-dark')" @click="setTheme('default-dark')"><md-avatar md-theme="default-dark" class="md-small md-primary"></md-avatar> Dark</md-menu-item>
              <md-menu-item class="align-center" :class="getPrimaryClass('light-green')" @click="setTheme('light-green')"><md-avatar md-theme="light-green" class="md-small md-primary"></md-avatar> Light Green</md-menu-item>
              <md-menu-item class="align-center" :class="getPrimaryClass('dark-green')" @click="setTheme('dark-green')"><md-avatar md-theme="dark-green" class="md-small md-primary"></md-avatar> Dark Green</md-menu-item>
            </md-menu-content>
          </md-menu>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex'
  import * as types from 'store/mutation-types'

  export default {
    name: 'MainHeader',
    data: () => ({
      themeMenuActive: false
    }),
    computed: {
      ...mapState({
        stateTitle: 'pageTitle',
        isSplash: 'splashPage',
        currentTheme: 'theme'
      }),
      pageTitle () {
        const { stateTitle } = this

        return stateTitle && stateTitle
      },
      isHome () {
        return this.$route.path === '/'
      },
      mainHeaderClasses () {
        const { isSplash } = this

        return {
          'md-transparent': isSplash,
          'md-elevation-2': !isSplash,
          'md-primary': !this.currentTheme.includes('default')
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
      ...mapActions({
        setCurrentTheme: types.CHANGE_THEME
      }),
      ...mapMutations({
        showMenu: types.SHOW_MENU
      }),
      setTheme (theme) {
        this.setCurrentTheme(theme)

        window.setTimeout(() => {
          this.themeMenuActive = false
        }, 50)
      },
      getPrimaryClass (theme) {
        if (theme === this.currentTheme) {
          return 'md-primary'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdElevation/mixins";
  @import "~components/MdLayout/mixins";

  .align-center >>> .md-list-item-content {
    justify-content: flex-start;
  }

  .main-header {
    margin: auto;
    max-width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 3;
    transition: .3s $md-transition-default-timing,
                box-shadow .4s .1s $md-transition-stand-timing;
    will-change: box-shadow, max-width, background-color;

    &.md-transparent {
      background-color: #303030;
    }
  }

  div.md-toolbar-row {
    max-width: 100%;
    transition: max-width .3s $md-transition-default-timing;
    will-change: max-width;

    .md-title {
      flex: 1;

      .md-title {
        margin-left: 0;
      }
    }

    h1 {
      display: inline-block;
    }
  }

  .logo {
    &:not(.md-theme-default):not(.md-theme-dark):not(.md-theme-default-dark) {
      background-color: rgba(#fff, .2);
    }

    @include md-layout-xsmall {
      display: none;
    }

    >>> .md-ripple {
      padding: 0;
      overflow: visible;
    }

    >>> .md-button-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .logo-vue-material {
      max-width: 72%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  .menu {
    display: none;

    @include md-layout-xsmall {
      display: inline-block;
    }
  }

  .fixed-theme-selector {
    display: none;

    @include md-layout-medium {
      display: block;
    }
  }

  .fixed-theme-selector-items {
    min-width: 118px;
  }

  .floating-theme-selector {
    @include md-elevation(2);
    max-height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow: hidden;
    position: fixed;
    top: 50%;
    right: 0;
    transform: translate3D(124px, -50%, 0);
    border-radius: 20px 0 0 20px;
    transition: .3s $md-transition-default-timing;
    transition-property: border-radius, max-height, transform;
    will-change: border-radius, max-height, transform;

    &.active {
      max-height: 215px;
      border-radius: 2px 0 0 2px;
      transform: translate3d(0, -50%, 0);

      >>> .md-list {
        padding: 4px 0;
        opacity: 1;

        .md-list-item:first-child {
          ~ .md-list-item {
            opacity: 1;
          }

          .md-list-item-content {
            padding-left: 16px;
            font-weight: 700;
            border-bottom: 1px solid rgba(#000, .12);
          }
        }
      }
    }

    @include md-layout-medium {
      display: none;
    }
  }

  .floating-theme-selector-items {
    >>> .md-list {
      padding: 0;
      border-bottom-left-radius: 2px;

      .md-list-item:first-child {
        ~ .md-list-item {
          opacity: 0;
          transition: opacity .35s $md-transition-drop-timing;
          will-change: opacity;
        }

        .md-list-item-content {
          padding-left: 8px;
        }
      }

      .md-list-item-content {
        justify-content: flex-start;
      }
    }
  }

  .md-menu{
    margin: 6px 8px;
  }

  .md-menu-content{
    background: #303030;
    z-index: 9999;
    >>>.md-list-item-content {
      a{
        color: inherit;
      }
    }
  }


</style>
