<template>
  <div id="app" class="container">
    <nav v-if="!isSplash">
      <router-link exact to="/">{{ $t('nav.home') }}</router-link>
      <router-link exact to="/about">{{ $t('nav.about') }}</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style lang="scss">
  @import './themes/default';
  @import './themes/splash';

  .container {
    font-family: 'Roboto Mono', monospace;
  }
</style>

<script lang="babel">
  export default {
    name: 'app',
    computed: {
      isSplash () {
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
