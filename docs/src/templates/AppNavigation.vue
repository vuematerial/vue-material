<template>
  <nav class="app-navigation">
    <router-link to="/">{{ $t('navigation.home') }}</router-link>
    <router-link to="/button">{{ $t('navigation.button') }}</router-link>
  </nav>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  class AppNavigation extends Vue {

  }

  export default AppNavigation
</script>
