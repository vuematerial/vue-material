<template>
  <div>
    <md-tabs>
      <md-tab id="tab-home" md-label="Home" md-icon="home"></md-tab>
      <md-tab id="tab-pages" md-label="Pages" md-icon="pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts" md-icon="/assets/icon-whatshot.svg"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites" md-icon="favorite"></md-tab>
    </md-tabs>

    <md-tabs class="md-primary" md-alignment="centered">
      <md-tab id="tab-home" md-icon="home"></md-tab>
      <md-tab id="tab-pages" md-icon="pages"></md-tab>
      <md-tab id="tab-posts" md-icon="/assets/icon-whatshot.svg"></md-tab>
      <md-tab id="tab-favorites" md-icon="favorite"></md-tab>
    </md-tabs>
  </div>
</template>

<script>
  export default {
    name: 'TabIcons'
  }
</script>

<style lang="scss" scoped>
  .md-tabs + .md-tabs {
    margin-top: 24px;
  }
</style>
