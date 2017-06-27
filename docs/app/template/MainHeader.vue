<template>
  <md-toolbar class="main-header" :class="mainHeaderClasses" :md-elevation="mainHeaderElevation">
    <div class="logo">
      <logo-vue-material :animated="isHome" :blending="false" @click.native="$router.push('/')" />
    </div>

    <div class="md-title">
      <span class="md-hide-xsmall">Vue Material</span>
      <span class="md-hide-xsmall" v-if="pageTitle"> - </span>
      <span v-if="isHome">{{ pageTitle }}</span>
      <h1 class="md-title" v-else>{{ pageTitle }}</h1>
    </div>

    <md-button href="http://github.com/vuematerial/vue-material-experiments" target="_blank" class="md-icon-button">
      <md-icon md-src="assets/icon-github.svg" class="icon-github" />
    </md-button>
  </md-toolbar>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'MainHeader',
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
      mainHeaderClasses () {
        const { isSplash } = this

        return {
          'md-transparent': isSplash,
          'md-elevation-2': !isSplash
        }
      },
      mainHeaderElevation () {
        if (this.isSplash) {
          return 0
        }

        return 2
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";

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
</style>
