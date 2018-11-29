<template>
  <nav class="app-navigation">
    <router-link to="/">{{ i18n('home') }}</router-link>
    <router-link to="/button">{{ i18n('button') }}</router-link>
  </nav>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  class AppNavigation extends Vue {

    i18n (path: string) {
      return this.$t(`navigation.${path}`)
    }

  }

  export default AppNavigation
</script>
