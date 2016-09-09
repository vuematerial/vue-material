<template>
  <div class="page-content">
    <md-whiteframe md-elevation="2">
      <md-toolbar class="md-dense">
        <md-button>Examples</md-button>
        <md-button>Code</md-button>
        <md-button>API</md-button>
      </md-toolbar>
    </md-whiteframe>

    <div class="main-content">
      <md-whiteframe class="cell-phone">
        <md-toolbar v-md-theme="'grey'">
          <h2 class="md-title">Default</h2>
        </md-toolbar>

        <md-bottom-bar>
          <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
          <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
          <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
        </md-bottom-bar>
      </md-whiteframe>

      <md-whiteframe class="cell-phone">
        <md-toolbar v-md-theme="'grey'">
          <h2 class="md-title">Shifting</h2>
        </md-toolbar>

        <md-bottom-bar md-shift v-md-theme="'teal'">
          <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
          <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
          <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
          <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
        </md-bottom-bar>
      </md-whiteframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .cell-phone {
    width: 360px;
    height: 480px;
    margin-right: 16px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    border: none;
    background-color: #fafafa;
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
    mounted() {
      this.$root.pageTitle = 'Bottom Bar';
    }
  };
</script>
