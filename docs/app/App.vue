<template>
  <div id="app" class="container">
    <md-toolbar class="main-header">
      <img src="https://vuematerial.github.io/assets/logo-vue-material-default.png" alt="Vue Material">
      <span>Vue Material</span>
    </md-toolbar>

    <router-view />
  </div>
</template>

<style lang="scss">
  @import './themes/default';
  @import './themes/splash';

  .container {
    font-family: 'Roboto Mono', monospace;
  }

  .main-header {
    img {
      width: 48px;
    }
  }
</style>

<script lang="babel">
  export default {
    name: 'app',
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
