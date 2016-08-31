<template>
  <section>
    <div class="cell-phone" v-md-theme="'teal'">
      <md-bottom-bar>
        <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="favorite" class="md-active">Favorites</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
      </md-bottom-bar>
    </div>

    <div class="cell-phone" v-md-theme="'teal'">
      <md-bottom-bar md-shift>
        <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
        <md-bottom-bar-item class="md-active" md-icon="books">Books</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .cell-phone {
    width: 360px;
    height: 480px;
    background-color: #eee;
    border: 1px solid #ccc;
  }
</style>

<script>
  export default {
    ready() {

    }
  };
</script>
