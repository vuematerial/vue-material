<template>
  <div>
    <div class="phone-viewport">
      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item to="/components/bottom-bar/home" md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item to="/components/bottom-bar/posts" md-label="Posts" md-icon="/assets/icon-whatshot.svg"></md-bottom-bar-item>
        <md-bottom-bar-item to="/components/bottom-bar/favorites" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>

    <div class="phone-viewport">
      <md-bottom-bar class="md-accent" md-sync-route>
        <md-bottom-bar-item to="/components/bottom-bar/home" md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item to="/components/bottom-bar/posts" md-label="Posts" md-icon="/assets/icon-whatshot.svg"></md-bottom-bar-item>
        <md-bottom-bar-item to="/components/bottom-bar/favorites" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BarRouter'
  }
</script>

<style lang="scss" scoped>
  .phone-viewport {
    width: 322px;
    height: 200px;
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
    border: 1px solid rgba(#000, .26);
    background: rgba(#000, .06);
  }
</style>
