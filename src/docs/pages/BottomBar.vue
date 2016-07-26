<template>
  <section v-md-theme="'bottom-bar'">
    <h2 class="title">Bottom Bar</h2>

    <div class="cell-phone">
      <md-bottom-bar>
        <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="favorite" class="md-active">Favorites</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
      </md-bottom-bar>
    </div>

    <div class="cell-phone">
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
    background-color: #eee;
  }
</style>
