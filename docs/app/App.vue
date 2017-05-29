<template>
  <div id="app" class="container">
    <md-toolbar class="main-header" :class="mainHeaderClasses">
      <div class="logo">
        <logo-vue-material @click.native="$router.push('/')" />
      </div>

      <span class="md-title">Vue Material</span>

      <md-icon md-src="assets/icon-github.svg" class="icon-github" />
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
  @import "~vue-material/components/MdAnimation/variables";

  .container {
    font-family: 'Roboto Mono', monospace;
  }

  .main-header {
    transition: background-color .3s $md-transition-stand-timing;

    &.fixed {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;

      .logo {
        background: md-get-palette-color(grey, 200);
      }
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
    background: md-get-palette-color(grey, 300);
    border-radius: 50%;

    .logo-vue-material {
      max-width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
</style>

<script lang="babel">
  export default {
    name: 'app',
    computed: {
      splash () {
        return this.$route.name === 'splash'
      },
      mainHeaderClasses () {
        const { splash } = this

        return {
          'fixed md-transparent': splash,
          'md-elevation-2': !splash
        }
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
