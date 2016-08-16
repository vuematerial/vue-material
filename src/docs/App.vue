<template>
  <div class="container" v-cloak>
    <md-whiteframe md-elevation="3dp" class="main-header">
      <md-toolbar>
        <md-button class="md-icon-button" @click="toggleSidenav">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title">Vue Material</h2>
      </md-toolbar>
    </md-whiteframe>

    <md-sidenav class="main-sidebar md-left md-fixed" :md-visible.sync="showSidenav">
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
        <md-list-item v-link="switch">Switch</md-list-item>
        <md-list-item v-link="theme">Theme</md-list-item>
        <md-list-item v-link="toolbar">Toolbar</md-list-item>
        <md-list-item v-link="tooltip">Tooltip</md-list-item>
        <md-list-item v-link="whiteframe">Whiteframe</md-list-item>
      </md-list>
    </md-sidenav>

    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        showSidenav: false
      };
    },
    methods: {
      toggleSidenav() {
        this.showSidenav = !this.showSidenav;
      },
      hideSidenav() {
        this.showSidenav = false;
      }
    }
  };
</script>
