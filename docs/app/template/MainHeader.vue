<template>
  <md-toolbar class="main-header" :class="mainHeaderClasses" :md-elevation="mainHeaderElevation">
    <md-button to="/" class="md-icon-button logo">
      <logo-vue-material :animated="isHome" />
    </md-button>

    <md-button class="md-icon-button menu" @click="showMenu">
      <md-icon>menu</md-icon>
    </md-button>

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
import { mapState, mapMutations } from 'vuex'
import * as types from 'store/mutation-types'

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
  },
  methods: {
    ...mapMutations({
      showMenu: types.SHOW_MENU
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";

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

      .md-title {
        margin-left: 0;
      }
    }

    h1 {
      display: inline-block;
    }
  }

  .logo {
    border-radius: 0;

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
</style>
