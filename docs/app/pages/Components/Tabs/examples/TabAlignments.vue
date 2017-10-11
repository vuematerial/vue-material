<template>
  <div>
    Left aligned (default)
    <md-tabs>
      <md-tab id="tab-home" md-label="Home"></md-tab>
      <md-tab id="tab-pages" md-label="Pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
    </md-tabs>

    Centered
    <md-tabs class="md-primary" md-alignment="centered">
      <md-tab id="tab-home" md-label="Home"></md-tab>
      <md-tab id="tab-pages" md-label="Pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
    </md-tabs>

    Right aligned
    <md-tabs class="md-accent" md-alignment="right">
      <md-tab id="tab-home" md-label="Home"></md-tab>
      <md-tab id="tab-pages" md-label="Pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
    </md-tabs>

    Fixed
    <md-tabs class="md-transparent" md-alignment="fixed">
      <md-tab id="tab-home" md-label="Home"></md-tab>
      <md-tab id="tab-pages" md-label="Pages"></md-tab>
      <md-tab id="tab-posts" md-label="Posts"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
    </md-tabs>
  </div>
</template>

<script>
  export default {
    name: 'TabAlignments'
  }
</script>

<style lang="scss" scoped>
  .md-tabs {
    margin-bottom: 24px;
  }
</style>
