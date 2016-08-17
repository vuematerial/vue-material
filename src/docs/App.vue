<template>
  <div class="container">
    <md-sidenav class="main-sidebar md-left md-fixed" :md-visible.sync="showSidenav">
      <md-toolbar class="md-extended">
        <div class="md-toolbar-container">
          <h1 class="md-title vue-material-logo">Vue Material</h1>
        </div>
      </md-toolbar>

      <md-list>
        <md-list-item v-link="avatar">Avatar</md-list-item>
        <md-list-item v-link="bottom-bar">Bottom Bar</md-list-item>
        <md-list-item v-link="button">Button</md-list-item>
        <md-list-item v-link="button-toggle">Button Toggle</md-list-item>
        <md-list-item v-link="checkbox">Checkbox</md-list-item>
        <md-list-item v-link="divider">Divider</md-list-item>
        <md-list-item v-link="icon">Icon</md-list-item>
        <md-list-item v-link="input">Input</md-list-item>
        <md-list-item v-link="list">List</md-list-item>
        <md-list-item v-link="radio">Radio</md-list-item>
        <md-list-item v-link="ripple">Ripple</md-list-item>
        <md-list-item v-link="select">Select</md-list-item>
        <md-list-item v-link="sidenav">Sidenav</md-list-item>
        <md-list-item v-link="subheader">Subheader</md-list-item>
        <md-list-item :v-link="'switch'">Switch</md-list-item>
        <md-list-item v-link="theme">Theme</md-list-item>
        <md-list-item v-link="toolbar">Toolbar</md-list-item>
        <md-list-item v-link="tooltip">Tooltip</md-list-item>
        <md-list-item v-link="whiteframe">Whiteframe</md-list-item>
      </md-list>
    </md-sidenav>

    <div class="main-content">
      <md-whiteframe md-elevation="3dp" class="main-header">
        <md-toolbar>
          <md-button class="md-icon-button" @click="toggleSidenav">
            <md-icon>menu</md-icon>
          </md-button>

          <span class="vue-material-logo">Vue Material</span>

          <h2 class="md-title">{{ pageTitle }}</h2>
        </md-toolbar>
      </md-whiteframe>

      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../core/stylesheets/variables.scss';

  $sizebar-size: 280px;

  .container {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
  }

  .main-header {
    position: relative;
    z-index: 3;

    .md-button:first-child {
      @media (min-width: 1280px) {
        display: none;
      }
    }

    .vue-material-logo {
      margin-right: 16px;
      padding-right: 16px;
      border-right: 1px solid rgba(#fff, .6);
      font-size: 20px;
      font-weight: 500;
      line-height: 26px;

      @media (min-width: 1280px) {
        margin-left: 8px;
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

    .md-list {
      overflow: auto;
      flex: 1;
    }
  }

  .main-content {
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
</style>

<script>
  export default {
    name: 'app',
    data() {
      return {
        showSidenav: false,
        pageTitle: ''
      };
    },
    methods: {
      toggleSidenav() {
        this.showSidenav = !this.showSidenav;
      },
      hideSidenav() {
        this.showSidenav = false;
      }
    },
    ready() {
      this.$on('pageTitle', (title) => {
        this.pageTitle = title;
      });
    }
  };
</script>
