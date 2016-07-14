<template>
  <div class="container">
    <md-button class="md-primary" @click="clickAction">Button</md-button>
    <md-link-button class="md-primary" :disabled="disabled">Primary</md-link-button>
    <md-link-button class="md-raised">Raised</md-link-button>
    <md-link-button class="md-raised" :disabled="!disabled">Disabled</md-link-button>
    <md-link-button class="md-raised md-dense">Dense</md-link-button>
    <md-link-button class="md-icon-button">
      <md-icon>menu</md-icon>
    </md-link-button>

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

    <div style="padding: 16px; position: relative" v-md-ink-ripple>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <div style="width: 720px; max-width: 100%; height: 480px;" v-md-theme>
      <md-bottom-bar md-shift>
        <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
        <md-bottom-bar-item class="md-active" md-icon="books">Books</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="shop">Shop</md-bottom-bar-item>
      </md-bottom-bar>

      <md-bottom-bar style="margin-top: 24px">
        <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="music_note" class="md-active">Music</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="books">Books</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="shop">Shop</md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

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
