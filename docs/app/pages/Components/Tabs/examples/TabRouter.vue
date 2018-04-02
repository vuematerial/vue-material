<template>
  <div>
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/components/tabs" exact></md-tab>
      <md-tab id="tab-pages" md-label="Pages" to="/components/tabs/pages">
        <md-list>
          <md-list-item to="/components/tabs/pages/1">Go to Subpage 1</md-list-item>
          <md-list-item to="/components/tabs/pages/2">Go to Subpage 2</md-list-item>
        </md-list>
      </md-tab>
      <md-tab id="tab-posts" md-label="Posts" to="/components/tabs/posts"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites" to="/components/tabs/favorites"></md-tab>
      <md-tab id="tab-disabled" md-label="Disabled" md-disabled></md-tab>
    </md-tabs>
    <h2>Mirror Subpage</h2>
    <md-tabs md-sync-route>
      <md-tab id="tab-pages-1" md-label="Pages 1" to="/components/tabs/pages/1">Subpage 1</md-tab>
      <md-tab id="tab-pages-2" md-label="Pages 2" to="/components/tabs/pages/2">Subpage 2</md-tab>
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
