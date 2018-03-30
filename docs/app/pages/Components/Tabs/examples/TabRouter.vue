<template>
  <div>
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/components/tabs" exact></md-tab>
      <md-tab id="tab-pages" md-label="Pages" to="/components/tabs/pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts" to="/components/tabs/posts"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites" to="/components/tabs/favorites"></md-tab>
      <md-tab id="tab-disabled" md-label="Disabled" md-disabled></md-tab>
    </md-tabs>
    <md-tabs md-sync-route>
      <md-tab id="tab-pages-1" md-label="Pages 1" to="/components/tabs/pages/1"></md-tab>
      <md-tab id="tab-pages-2" md-label="Pages 2" to="/components/tabs/pages/2"></md-tab>
    </md-tabs>
  </div>
</template>

<script>
  export default {
    name: 'TabRouter'
  }
</script>

<style lang="scss" scoped>
  .md-tabs /deep/ .md-tabs-navigation .md-button.router-link-active {
    text-shadow: 0 0 5px;
  }
</style>
