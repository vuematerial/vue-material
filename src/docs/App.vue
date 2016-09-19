<template>
  <div class="container">
    <md-sidenav class="main-sidebar md-left md-fixed" ref="main-sidebar">
      <md-toolbar class="vue-material-logo" v-md-theme="'white'">
        <router-link to="/" class="md-title">Vue Material</router-link>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <router-link to="/avatar">Avatar</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/bottom-bar">Bottom Bar</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/button">Button</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/button-toggle">Button Toggle</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/checkbox">Checkbox</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/icon">Icon</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/input">Input</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/list">List</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/radio">Radio</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/ripple">Ripple</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/select">Select</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/sidenav">Sidenav</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/subheader">Subheader</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/switch">Switch</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/tabs">Tabs</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/theme">Theme</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/toolbar">Toolbar</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/tooltip">Tooltip</router-link>
        </md-list-item>

        <md-list-item>
          <router-link to="/whiteframe">Whiteframe</router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <md-toolbar class="main-header">
      <md-button class="md-icon-button" @click="toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <div class="md-title">
        <span class="logo-vue-material">Vue Material</span>
        <span> – </span>
        <span class="page-title">{{ pageTitle }}</span>
      </div>
    </md-toolbar>

    <router-view></router-view>
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

  .md-theme-default .main-header {
    color: #fff;
  }

  .main-header {
    position: relative;
    z-index: 3;

    .md-button:first-child {
      @media (min-width: 1280px) {
        display: none;
      }
    }

    .md-title {
      .logo-vue-material {
        display: inline-block;
      }

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
      display: flex;
      flex-flow: column;

      @media (min-width: 1280px) {
        width: $sizebar-size;
        top: 0;
        pointer-events: auto;
        transform: translate3d(0, 0, 0);
        box-shadow: $material-shadow-3dp;
      }
    }

    .md-backdrop {
      @media (min-width: 1280px) {
        opacity: 0;
        pointer-events: none;
      }
    }

    .md-toolbar {
      height: 112px;
      border-bottom: 1px solid rgba(#000, .12);

      a {
        color: inherit;
        text-decoration: none;
      }
    }

    .md-list {
      overflow: auto;
      flex: 1;
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
</style>

<script>
  export default {
    data() {
      return {
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
