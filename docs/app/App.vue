<template>
  <div class="container" :class="containerClass">
    <md-toolbar class="main-header" :class="mainHeaderClasses">
      <div class="logo">
        <logo-vue-material :animated="isHome" @click.native="$router.push('/')" />
      </div>

      <span class="md-title">Vue Material {{ pageTitle }}</span>

      <md-icon md-src="assets/icon-github.svg" class="icon-github" />
    </md-toolbar>

    <router-view />
  </div>
</template>

<style lang="scss">
  @import './themes/default';
  @import './themes/splash';
</style>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/factory";

  .container {
    font-family: 'Roboto Mono', monospace;

    &.splash .main-header {
      max-width: 1280px;
      padding: 16px;
      transition: .3s $md-transition-default-timing;
      transition-property: max-width;
    }
  }

  .main-header {
    margin: auto;
    max-width: 100%;
    transition: .3s $md-transition-default-timing,
                box-shadow .4s .1s $md-transition-stand-timing;
    will-change: box-shadow, max-width, background-color;

    &.md-transparent .logo {
      background: #fff;
    }

    .md-title {
      flex: 1;
    }
  }

  .logo {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: md-get-palette-color(grey, 300);
    border-radius: 50%;

    .logo-vue-material {
      max-width: 75%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  .main-content {
    padding: 16px;
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

        if (stateTitle) {
          return '- ' + stateTitle
        }

        return null
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
          'md-transparent': isSplash,
          'md-elevation-2': !isSplash
        }
      }
    },
    mounted () {
      if (this.isSplash) {
        this.$material.theming.theme = 'splash'
      } else {
        this.$material.theming.theme = 'default'
      }
    }
  }
</script>
