<template>
  <div class="container">
    <md-sidenav class="main-sidebar md-left md-fixed" ref="main-sidebar">
      <md-toolbar v-md-theme="'white'">
        <a href="/#" class="md-title">Vue Material</a>
      </md-toolbar>

      <md-list>
        <md-list-item>Avatar</md-list-item>
        <md-list-item>Bottom Bar</md-list-item>
        <md-list-item>Button</md-list-item>
        <md-list-item>Button Toggle</md-list-item>
        <md-list-item>Checkbox</md-list-item>
        <md-list-item>Divider</md-list-item>
        <md-list-item>Icon</md-list-item>
        <md-list-item>Input</md-list-item>
        <md-list-item>List</md-list-item>
        <md-list-item>Radio</md-list-item>
        <md-list-item>Ripple</md-list-item>
        <md-list-item>Select</md-list-item>
        <md-list-item>Sidenav</md-list-item>
        <md-list-item>Subheader</md-list-item>
        <md-list-item>Switch</md-list-item>
        <md-list-item>Theme</md-list-item>
        <md-list-item>Toolbar</md-list-item>
        <md-list-item>Tooltip</md-list-item>
        <md-list-item>Whiteframe</md-list-item>
      </md-list>
    </md-sidenav>

    <div class="page-content">
      <md-whiteframe class="main-header" md-elevation="2">
        <md-toolbar>
          <md-button class="md-icon-button" @click="toggleSidenav">
            <md-icon>menu</md-icon>
          </md-button>

          <div class="md-title">
            <span class="logo-vue-material">Vue Material</span>
            <span> – </span>
            <span class="page-title">Home</span>
          </div>
        </md-toolbar>
      </md-whiteframe>

      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
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
  }

  .md-theme-default .md-toolbar:not(.md-theme-white) {
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
      @media (min-width: 1280px) {
        width: $sizebar-size;
        display: flex;
        flex-flow: column;
        top: 0;
        z-index: 2;
        pointer-events: auto;
        transform: translate3d(0, 0, 0);
        box-shadow: $material-shadow-3dp;
      }
    }

    .md-toolbar {
      border-bottom: 1px solid rgba(#000, .12);
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
    position: relative;
    z-index: 1;
    transition: $swift-ease-out;

    @media (min-width: 1280px) {
      padding-left: $sizebar-size;
    }
  }

  .main-content {
    padding: 16px;
    flex: 1;
    overflow: auto;
  }
</style>

<script>
  export default {
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
