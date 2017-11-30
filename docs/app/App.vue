<template>
  <div id="docs" class="container" :class="containerClass">
    <main-header />

    <div class="container-wrapper md-layout-row" :class="containerClass">
      <main-nav />

      <div class="main-container" v-if="loading">
        <code-loading>Loading page...</code-loading>
      </div>

      <router-view v-else />
    </div>

    <main-footer />

    <md-snackbar class="version-message" md-theme="default" :md-active.sync="message" :md-duration="Infinity">
      <span>This site is for the Vue Material 1.0 beta.</span>
      <div>
        <md-button href="https://vue-material-old.netlify.com/" target="_blank">Visit old docs</md-button>
        <md-button class="md-accent" @click="closeMessage">Dismiss</md-button>
      </div>
    </md-snackbar>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import CodeLoading from './components/CodeLoading'
  import MainHeader from './template/MainHeader'
  import MainNav from './template/MainNav'
  import MainFooter from './template/MainFooter'

  export default {
    name: 'App',
    components: {
      CodeLoading,
      MainHeader,
      MainNav,
      MainFooter
    },
    data: () => ({
      loading: false,
      message: false
    }),
    computed: {
      ...mapState({
        isSplash: 'splashPage'
      }),
      containerClass () {
        return {
          splash: this.isSplash
        }
      }
    },
    methods: {
      closeMessage () {
        this.message = false
      },
      beforeRouteRender (to, from, next) {
        this.loading = true
        next()
      },
      afterRouteRender () {
        this.loading = false
      }
    },
    created () {
      this.$router.beforeEach(this.beforeRouteRender)
      this.$router.afterEach(this.afterRouteRender)
    },
    mounted () {
      window.setTimeout(() => {
        this.message = true
      }, 2000)
    }
  }
</script>

<style lang="scss">
  @import "./themes/default";
  @import "./themes/default-dark";
  @import "./themes/light-green";
  @import "./themes/dark-green";
  @import "./themes/dark";
  @import "./themes/demo";

  body {
    height: 100%;
  }
</style>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/components/MdLayout/mixins";
  @import "~vue-material/theme/engine";

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

    &.splash >>> {
      .main-header .md-toolbar-row,
      .main-footer-container {
        max-width: 1312px;
        margin: 0 auto;
      }
    }
  }

  .container-wrapper {
    &:not(.splash) {
      flex: 1;
      padding-left: 230px !important;

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

  .code-loading {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .version-message {
    .md-button:not(.md-accent) {
      color: #fff;
    }
  }
</style>
