<template>
  <div>
    <div class="phone-viewport">
      <md-bottom-bar md-type="shift">
        <md-bottom-bar-item id="bottom-bar-item-home" md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item id="bottom-bar-item-pages" md-label="Pages" md-icon="pages"></md-bottom-bar-item>
        <md-bottom-bar-item id="bottom-bar-item-posts" md-label="Posts" md-icon="/assets/icon-whatshot.svg"></md-bottom-bar-item>
        <md-bottom-bar-item id="bottom-bar-item-favorites" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>

    <div class="phone-viewport">
      <md-bottom-bar class="md-accent" md-type="shift">
        <md-bottom-bar-item id="bottom-bar-item-home" md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item id="bottom-bar-item-pages" md-label="Pages" md-icon="pages"></md-bottom-bar-item>
        <md-bottom-bar-item id="bottom-bar-item-posts" md-label="Posts" md-icon="/assets/icon-whatshot.svg"></md-bottom-bar-item>
        <md-bottom-bar-item id="bottom-bar-item-favorites" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shift'
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
