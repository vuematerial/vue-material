<template>
  <div>
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/components/tabs/home"></md-tab>
      <md-tab id="tab-pages" md-label="Pages" to="/components/tabs/pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts" to="/components/tabs/posts"></md-tab>
      <md-tab id="tab-settings" md-label="Settings" to="/components/tabs/settings"></md-tab>
      <md-tab id="tab-disabled" md-label="Disabled" md-disabled></md-tab>
    </md-tabs>
  </div>
</template>

<script>
  export default {
    name: 'TabRouter'
  }
</script>
