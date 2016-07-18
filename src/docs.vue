<template>
  <div class="container docs">
    <section>
      <h2 class="title">Buttons</h2>

      <md-button @click="clickAction">Button</md-button>
      <md-link-button class="md-primary" :disabled="disabled">Primary</md-link-button>
      <md-link-button class="md-primary md-raised">Raised</md-link-button>
      <md-button class="md-accent md-raised">Accent</md-button>
      <md-link-button class="md-warn">Warn</md-link-button>
      <md-link-button class="md-raised md-primary" :disabled="!disabled">Disabled</md-link-button>
      <md-button class="md-raised md-dense md-accent">Dense</md-button>
    </section>

    <section>
      <h2 class="title">Floating action button</h2>

      <md-button class="md-fab md-fab-clean">
        <md-icon>my_location</md-icon>
      </md-button>

      <md-button class="md-fab">
        <md-icon>add</md-icon>
      </md-button>

      <md-button class="md-fab md-primary">
        <md-icon>edit</md-icon>
      </md-button>

      <md-button class="md-fab md-warn">
        <md-icon>save</md-icon>
      </md-button>

      <md-button class="md-fab md-mini">
        <md-icon>content_copy</md-icon>
      </md-button>

      <md-button class="md-fab md-mini md-primary">
        <md-icon>content_paste</md-icon>
      </md-button>

      <md-button class="md-fab md-mini md-warn">
        <md-icon>content_cut</md-icon>
      </md-button>
    </section>

    <section>
      <h2 class="title">Icon Button</h2>

      <md-link-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-link-button>

      <md-link-button class="md-icon-button md-primary">
        <md-icon>favorite</md-icon>
      </md-link-button>

      <md-link-button class="md-icon-button md-accent">
        <md-icon>refresh</md-icon>
      </md-link-button>

      <md-link-button class="md-icon-button md-warn">
        <md-icon>star</md-icon>
      </md-link-button>

      <md-link-button class="md-icon-button md-primary md-raised">
        <md-icon>list</md-icon>
      </md-link-button>

      <md-link-button class="md-icon-button md-warn md-raised">
        <md-icon>filter</md-icon>
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
      <h2 class="title">Button Toggle</h2>

      <md-button-toggle class="md-button-group">
        <md-link-button class="md-icon-button md-toggle">
          <md-icon>format_bold</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button">
          <md-icon>format_italic</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button">
          <md-icon>strikethrough_s</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button md-toggle">
          <md-icon>title</md-icon>
        </md-link-button>
      </md-button-toggle>

      <md-button-toggle class="md-button-group md-primary" style="margin-top: 24px">
        <md-link-button class="md-icon-button md-toggle">
          <md-icon>format_bold</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button md-toggle">
          <md-icon>format_italic</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button">
          <md-icon>strikethrough_s</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button">
          <md-icon>title</md-icon>
        </md-link-button>
      </md-button-toggle>

      <md-button-toggle class="md-button-group md-warn" style="margin-top: 24px">
        <md-link-button class="md-icon-button md-toggle">
          <md-icon>format_bold</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button md-toggle">
          <md-icon>format_italic</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button">
          <md-icon>strikethrough_s</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button">
          <md-icon>title</md-icon>
        </md-link-button>
      </md-button-toggle>

      <md-button-toggle class="md-button-group md-accent" style="margin-top: 24px">
        <md-link-button class="md-icon-button md-toggle">
          <md-icon>format_bold</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button md-toggle">
          <md-icon>format_italic</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button">
          <md-icon>strikethrough_s</md-icon>
        </md-link-button>

        <md-link-button class="md-icon-button">
          <md-icon>title</md-icon>
        </md-link-button>
      </md-button-toggle>
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
        <md-bottom-bar md-shift>
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
