<template>
  <div class="container">
    <md-sidenav class="main-sidebar md-left md-fixed" md-swipeable ref="main-sidebar">
      <md-toolbar class="vue-material-logo" md-theme="white">
        <router-link exact to="/">
          <img :src="logo" alt="Vue">
          <span>Vue Material</span>
        </router-link>
      </md-toolbar>

      <div class="main-sidebar-links">
        <md-list class="md-dense">
          <md-list-item>
            <router-link exact to="/">Introduction</router-link>
          </md-list-item>

          <md-list-item>
            <router-link exact to="/getting-started">Getting Started</router-link>
          </md-list-item>

          <md-list-item>
            <span>Themes</span>

            <md-list-expand>
              <md-list>
                <md-list-item class="md-inset">
                  <router-link exact to="/themes/configuration">Configuration</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/themes/dynamic-themes">Dynamic Theme</router-link>
                </md-list-item>
              </md-list>
            </md-list-expand>
          </md-list-item>

          <md-list-item>
            <span>Components</span>

            <md-list-expand>
              <md-list>
                <md-list-item class="md-inset">
                  <router-link exact to="/components/avatar">Avatar</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/bottom-bar">Bottom Bar</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/button">Button</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/button-toggle">Button Toggle</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/card">Card</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/checkbox">Checkbox</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/chips">Chips</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/dialog">Dialog</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/file">File</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/icon">Icon</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/image-loader">Image Loader</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/ink-ripple">Ink Ripple</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/input">Input</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/list">List</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/menu">Menu</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/progress">Progress</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/radio">Radio</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/rating-bar">Rating Bar</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/select">Select</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/sidenav">Sidenav</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/snackbar">Snackbar</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/speed-dial">Speed Dial</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/spinner">Spinner</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/subheader">Subheader</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/switch">Switch</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/tabs">Tabs</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/table">Table</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/toolbar">Toolbar</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/tooltip">Tooltip</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/whiteframe">Whiteframe</router-link>
                </md-list-item>
              </md-list>
            </md-list-expand>
          </md-list-item>

          <md-list-item>
            <span>UI Elements</span>
            <md-list-expand>
              <md-list>
                <md-list-item class="md-inset">
                  <router-link exact to="/ui-elements/layout">Layout</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/ui-elements/typography">Typography</router-link>
                </md-list-item>
              </md-list>
            </md-list-expand>
          </md-list-item>

          <md-list-item>
            <router-link exact to="/changelog">Changelog</router-link>
          </md-list-item>

          <md-list-item>
            <router-link exact to="/about">About</router-link>
          </md-list-item>
        </md-list>
      </div>

      <release-version></release-version>
    </md-sidenav>

    <transition name="md-router" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="sass">
  @import '../../src/core/stylesheets/variables.scss';

  $sizebar-size: 280px;

  [v-cloak] {
    display: none;
  }

  html,
  body {
    height: 100%;
    overflow: hidden;
  }

  body {
    display: flex;
  }

  .container {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    transition: $swift-ease-out;

    @media (min-width: 1281px) {
      padding-left: $sizebar-size;
    }
  }

  .main-sidebar.md-sidenav {
    .md-sidenav-content {
      width: $sizebar-size;
      display: flex;
      flex-flow: column;
      overflow: hidden;

      @media (min-width: 1281px) {
        top: 0;
        pointer-events: auto;
        transform: translate3d(0, 0, 0);
        box-shadow: $material-shadow-2dp;
      }
    }

    .md-backdrop {
      @media (min-width: 1281px) {
        opacity: 0;
        pointer-events: none;
      }
    }

    .md-toolbar {
      min-height: 172px;
      border-bottom: 1px solid rgba(#000, .12);
    }

    .vue-material-logo {
      font-size: 24px;

      a {
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        color: inherit;
        text-decoration: none;

        &:hover {
          color: inherit;
          text-decoration: none;
        }
      }

      img {
        width: 160px;
        margin-bottom: 16px;
      }
    }

    .main-sidebar-links {
      overflow: auto;
      flex: 1;

      .md-inset .md-list-item-container {
        padding-left: 36px;
      }

      .md-list-item-container {
        font-size: 14px;
        font-weight: 500;
      }
    }

    .release-version {
      padding: 8px 8px 8px 16px;
      border-top: 1px solid rgba(#000, .12);
      display: none;

      @media (max-width: 480px) {
        display: block;
      }

      > div {
        justify-content: center;
      }

      .md-select:after {
        color: rgba(#000, .87);
      }
    }
  }

  .main-content {
    padding: 16px;
    flex: 1;
    overflow: auto;
    background-color: #fff;
    transform: translate3D(0, 0, 0);
    transition: $swift-ease-out;
    transition-delay: .2s;
  }

  .md-router-enter,
  .md-router-leave {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    @media (min-width: 1281px) {
      left: $sizebar-size;
    }

    .main-content {
      opacity: 0;
      overflow: hidden;
    }
  }

  .md-router-leave {
    z-index: 1;
    transition: $swift-ease-in;
    transition-duration: .25s;
  }

  .md-router-enter {
    z-index: 2;
    transition: $swift-ease-out;

    .main-content {
      transform: translate3D(0, 10%, 0);
    }
  }

  code {
    &:not(.hljs) {
      margin-left: 1px;
      margin-right: 1px;
      padding: 0 4px;
      display: inline-block;
      border-radius: 2px;
      font-family: "Operator Mono", "Fira Code", Menlo, Hack, "Roboto Mono", "Liberation Mono", Monaco, monospace;

      pre {
        margin: 8px 0;
      }
    }
  }

  .phone-viewport {
    width: 360px;
    height: 540px;
    margin-right: 16px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid rgba(#000, .12);
  }

  .api-table tr > td:first-child {
    white-space: nowrap;
  }
</style>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        toolbar: true,
        theme: 'default',
        pageTitle: ''
      };
    },
    computed: {
      logo() {
        let theme = Vue.material.currentTheme;

        if (theme) {
          return `assets/logo-vue-material-${theme}.png`;
        }

        return 'assets/logo-vue-material-default.png';
      }
    },
    methods: {
      toggleSidenav() {
        this.$refs['main-sidebar'].toggle();
      },
      closeSidenav() {
        this.$refs['main-sidebar'].close();
      }
    }
  };
</script>
