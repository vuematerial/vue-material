<template>
  <div class="container docs">
    <section>
      <h2 class="title">Buttons</h2>

      <md-button @click="clickAction">Button</md-button>
      <md-link-button class="md-primary" :disabled="disabled">Primary</md-link-button>
      <md-link-button class="md-primary md-raised">Raised</md-link-button>
      <md-link-button class="md-accent md-raised">Accent</md-link-button>
      <md-link-button class="md-warn">Warn</md-link-button>
      <md-link-button class="md-raised md-primary" :disabled="!disabled">Disabled</md-link-button>
      <md-link-button class="md-raised md-dense md-accent">Dense</md-link-button>
      <md-link-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-link-button>
    </section>

    <section>
      <h2 class="title">Button Group</h2>

      <div class="md-button-group">
        <md-link-button class="md-icon-button">
          <md-icon>format_align_left</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button">
          <md-icon>format_align_center</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button">
          <md-icon>format_align_right</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button">
          <md-icon>format_align_justify</md-icon>
        </md-link-button>
      </div>
    </section>

    <section>
      <h2 class="title">Ripple</h2>

      <div style="padding: 16px; position: relative" v-md-ink-ripple>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>

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
        <md-bottom-bar md-shift style="margin-top: 24px">
          <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
          <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
          <md-bottom-bar-item class="md-active" md-icon="books">Books</md-bottom-bar-item>
          <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
        </md-bottom-bar>
      </div>
    </section>
  </div>
</template>

<style lang="scss" src="./docs.scss"></style>

<script>
  export default {
    data() {
      return {
        disabled: false
      };
    },
    methods: {
      clickAction() {
        this.disabled = !this.disabled;
      }
    }
  };
</script>
