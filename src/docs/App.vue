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
      <partial name="navigation"></partial>
    </md-sidenav>

    <div class="main-content">
      <div class="main-sidebar-docked">
        <partial name="navigation"></partial>
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
  }

  .main-header {
    position: relative;
    z-index: 2;
  }

  .main-content {
    padding-left: 280px;
    display: flex;
    flex-flow: column;
    flex: 1;
    overflow: auto;
    position: relative;
  }

  .main-sidebar .md-sidenav-content {
    overflow: auto;
  }

  .main-sidebar-docked {
    width: 280px;
    position: fixed;
    top: 64px;
    bottom: 0;
    left: 0;
    overflow: auto;
  }
</style>

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
