<template>
  <demo-page label="Components - Bottom Bar">
    <div slot="examples">
      <demo-example label="Default">
        <div class="phone-viewport">
          <md-bottom-bar>
            <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
          </md-bottom-bar>
        </div>
      </demo-example>

      <demo-example label="Shifting">
        <div class="phone-viewport">
          <md-bottom-bar md-shift>
            <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>

        <div class="phone-viewport">
          <md-bottom-bar class="md-accent" md-shift>
            <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>

        <div class="phone-viewport">
          <md-bottom-bar class="md-warn" md-shift>
            <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>

        <div class="phone-viewport">
          <md-bottom-bar class="md-transparent" md-shift>
            <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>
      </demo-example>

      <demo-example label="Themed">
        <div class="phone-viewport" v-md-theme="'indigo'">
          <md-bottom-bar>
            <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
          </md-bottom-bar>
        </div>

        <div class="phone-viewport" v-md-theme="'orange'">
          <md-bottom-bar>
            <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
          </md-bottom-bar>
        </div>

        <div class="phone-viewport" v-md-theme="'green'">
          <md-bottom-bar md-shift>
            <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>

        <div class="phone-viewport" v-md-theme="'brown'">
          <md-bottom-bar md-shift>
            <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>
      </demo-example>

      <demo-example label="Dynamic Theme">
        <div class="phone-viewport">
          <md-bottom-bar md-shift v-md-theme="playground.theme">
            <md-bottom-bar-item @click="setTheme('blue')" md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item @click="setTheme('teal')" md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item @click="setTheme('brown')" md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item @click="setTheme('indigo')" md-icon="photo">Pictures</md-bottom-bar-item>
          </md-bottom-bar>
        </div>
      </demo-example>
    </div>

    <div slot="code">
      <h2>Code</h2>
    </div>

    <div slot="api">

    </div>
  </demo-page>
</template>

<style lang="scss" scoped>
  .md-bottom-bar {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .phone-viewport {
    width: 320px;
    height: 480px;
    margin-right: 16px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    background-color: darken(#fafafa, 5%);
  }
</style>

<script>
  export default {
    data() {
      return {
        playground: {
          theme: 'brown'
        }
      };
    },
    methods: {
      setTheme(theme) {
        this.playground.theme = theme;
      }
    }
  };
</script>
