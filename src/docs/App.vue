<template>
  <div class="container" v-md-theme="theme">
    <md-sidenav class="main-sidebar md-left md-fixed" ref="main-sidebar">
      <md-toolbar class="vue-material-logo" v-md-theme="'white'">
        <router-link exact to="/">
          <img src="data:image/png;base64,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" alt="Vue">
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
                  <router-link exact to="/components/checkbox">Checkbox</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/icon">Icon</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/input">Input</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/list">List</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/radio">Radio</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/ripple">Ripple</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/select">Select</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/components/sidenav">Sidenav</router-link>
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
                  <router-link exact to="/ui-elements/typography">Typography</router-link>
                </md-list-item>

                <md-list-item class="md-inset">
                  <router-link exact to="/ui-elements/grid-system">Grid System</router-link>
                </md-list-item>
              </md-list>
            </md-list-expand>
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
            <router-link exact to="/changelog">Changelog</router-link>
          </md-list-item>

          <md-list-item>
            <router-link exact to="/about">About</router-link>
          </md-list-item>
        </md-list>
      </div>
    </md-sidenav>

    <transition name="md-router">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
  @import '../core/stylesheets/variables.scss';

  $sizebar-size: 280px;

  html,
  body {
    height: 100%;
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

    @media (min-width: 1280px) {
      padding-left: $sizebar-size;
    }
  }

  .main-header {
    position: relative;
    z-index: 3;

    .md-button:first-child {
      @media (min-width: 1280px) {
        display: none;
      }
    }

    .md-toolbar,
    .md-title {
      color: #fff;
    }

    .md-title {
      .page-title {
        margin-left: 0;

        @media (min-width: 1280px) {
          margin-left: 8px;
        }
      }

      span:not(.page-title) {
        @media (min-width: 1280px) {
          display: none;
        }
      }
    }
  }

  .main-sidebar.md-sidenav {
    .md-sidenav-content {
      width: $sizebar-size;
      display: flex;
      flex-flow: column;

      @media (min-width: 1280px) {
        top: 0;
        pointer-events: auto;
        transform: translate3d(0, 0, 0);
        box-shadow: $material-shadow-2dp;
      }
    }

    .md-backdrop {
      @media (min-width: 1280px) {
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
      }

      img {
        margin-bottom: 24px;
      }
    }

    .main-sidebar-links {
      overflow: auto;

      .md-inset .md-list-item-container {
        padding-left: 36px;
      }

      .md-list-item-container {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  .page-content {
    display: flex;
    flex-flow: column;
    flex: 1;
    overflow: auto;
    position: relative;
    z-index: 1;
  }

  .page-content-wrapper {
    display: flex;
    flex-flow: column;
    flex: 1;
  }

  .main-content {
    padding: 16px;
    flex: 1;
    overflow: auto;
  }

  .md-router-enter-active,
  .md-router-leave-active {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    transition: $swift-ease-out;

    @media (min-width: 1280px) {
      left: 280px;
    }
  }

  .md-router-enter,
  .md-router-leave-active {
    opacity: .2;
  }

  .md-router-enter {
    .md-display-2 {
      transform: translate3D(0, -36px, 0);
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
</style>

<script>
  export default {
    data() {
      return {
        toolbar: true,
        theme: 'default',
        pageTitle: ''
      };
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
