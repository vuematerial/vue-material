<template>
  <section>
    <div class="cell-phone" v-md-theme="'teal'">
      <md-bottom-bar>
        <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
      </md-bottom-bar>
    </div>

    <div class="cell-phone" v-md-theme="'teal'">
      <md-bottom-bar md-shift>
        <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .cell-phone {
    width: 360px;
    height: 480px;
    position: relative;
    overflow: hidden;
    background-color: #eee;
    border: 1px solid #ccc;
  }

  .md-bottom-bar {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>

<script>
  export default {
    ready() {

    }
  };
</script>
