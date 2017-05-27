<template>
  <div id="app" class="container">
    <md-toolbar class="main-header" :class="{ fixed: splash }">
      <div class="logo">
        <img src="https://vuematerial.github.io/assets/logo-vue-material-default.png" alt="Vue Material">
      </div>

      <span class="md-title">Vue Material</span>

      <md-icon md-src="assets/icon-github.svg" />
    </md-toolbar>

    <router-view />
  </div>
</template>

<style lang="scss">
  @import './themes/default';
  @import './themes/splash';
</style>

<style lang="scss" scoped>
  @import "~vue-material/theme/factory";

  .container {
    font-family: 'Roboto Mono', monospace;
  }

  .main-header {
    &.fixed {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
    }

    .md-title {
      flex: 1;
    }
  }

  .logo {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: md-get-palette-color(grey, 200);
    border-radius: 50%;

    img {
      max-width: 80%;
    }
  }
</style>

<script lang="babel">
  export default {
    name: 'app',
    computed: {
      splash () {
        return this.$route.name === 'splash'
      }
    },
    watch: {
      $route: {
        immediate: true,
        handler ($route) {
          const { name } = $route

          if (name === 'splash') {
            this.$material.theming.theme = 'splash'
          } else {
            this.$material.theming.theme = 'default'
          }
        }
      }
    }
  }
</script>
