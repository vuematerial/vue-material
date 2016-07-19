<template>
  <div class="container docs">
    <section>
      <h2 class="title">Buttons</h2>

      <md-button @click="disableButton">Button</md-button>
      <md-link-button class="md-primary" :disabled="buttonDisabled">Primary</md-link-button>
      <md-link-button class="md-primary md-raised">Raised</md-link-button>
      <md-button class="md-accent md-raised">Accent</md-button>
      <md-link-button class="md-warn">Warn</md-link-button>
      <md-link-button class="md-raised md-primary" :disabled="!buttonDisabled">Disabled</md-link-button>
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
        <md-button class="md-icon-button md-toggle">
          <md-icon>format_bold</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>format_italic</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>strikethrough_s</md-icon>
        </md-button>

        <md-button class="md-icon-button md-toggle">
          <md-icon>title</md-icon>
        </md-button>
      </md-button-toggle>

      <md-button-toggle type="radio" class="md-button-group md-primary" style="margin-top: 24px">
        <md-button class="md-icon-button">
          <md-icon>format_align_left</md-icon>
        </md-button>

        <md-button class="md-icon-button md-toggle">
          <md-icon>format_align_center</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>format_align_right</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>format_align_justify</md-icon>
        </md-button>
      </md-button-toggle>

      <md-button-toggle class="md-button-group md-warn" style="margin-top: 24px">
        <md-button class="md-icon-button md-toggle">
          <md-icon>format_bold</md-icon>
        </md-button>

        <md-button class="md-icon-button md-toggle">
          <md-icon>format_italic</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>format_underline</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>title</md-icon>
        </md-button>
      </md-button-toggle>

      <md-button-toggle class="md-button-group md-accent" style="margin-top: 24px">
        <md-button class="md-icon-button md-toggle">
          <md-icon>format_bold</md-icon>
        </md-button>

        <md-button class="md-icon-button md-toggle">
          <md-icon>format_italic</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>strikethrough_s</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>title</md-icon>
        </md-button>
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

    <section>
      <h2 class="title">Toolbar</h2>

      <md-toolbar class="md-extended">
        <div class="md-toolbar-container">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>

          <span style="flex: 1;"></span>

          <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>filter_list</md-icon>
          </md-button>
        </div>

        <div class="md-toolbar-container">
          <h2 class="md-title">Vue Material</h2>
        </div>
      </md-toolbar>
    </section>

    <section>
      <h2 class="title">Sidenav</h2>

      <div class="cell-phone">
        <md-toolbar>
          <md-button class="md-icon-button" @click="toggleLeftSidenav">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title">Left Sidenav</h2>
        </md-toolbar>

        <md-sidenav class="md-left md-fixed" :md-visible.sync="sidenavLeftVisible">
          <md-toolbar class="md-extended">
            <div class="md-toolbar-container">
              <h3 class="md-title">Sidenav content</h3>
            </div>
          </md-toolbar>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
        </md-sidenav>
      </div>

      <div class="cell-phone">
        <md-toolbar>
          <md-button class="md-icon-button" @click="toggleRightSidenav">
            <md-icon>menu</md-icon>
          </md-button>

          <h2 class="md-title">Right Sidenav</h2>
        </md-toolbar>

        <md-sidenav class="md-right md-fixed" :md-visible.sync="sidenavRightVisible">
          <md-toolbar class="md-extended">
            <div class="md-toolbar-container">
              <h3 class="md-title">Sidenav content</h3>
            </div>
          </md-toolbar>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
        </md-sidenav>
      </div>
    </section>

    <section>
      <h2 class="title">Lists</h2>

      <div class="cell-phone">
        <md-list>
          <md-list-item>
            <md-icon>home</md-icon> <span>Home</span>
          </md-list-item>

          <md-list-item>
            <md-icon>favorite</md-icon> <span>Favorites</span>
          </md-list-item>

          <md-list-item>
            <md-icon>store</md-icon> <span>Store</span>
          </md-list-item>
        </md-list>
      </div>

      <div class="cell-phone">
        <md-list>
          <md-list-item href="http://google.com">
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/1" alt="People">
            </md-avatar>

            <span>Home</span>
          </md-list-item>

          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/5" alt="People">
            </md-avatar>

            <span>Favorites</span>

            <md-button class="md-icon-button md-list-action">
              <md-icon>file_download</md-icon>
            </md-button>
          </md-list-item>

          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/3" alt="People">
            </md-avatar>

            <span>Store</span>
          </md-list-item>
        </md-list>
      </div>
    </section>
  </div>
</template>

<style lang="scss" src="./docs.scss"></style>

<script>
  export default {
    data() {
      return {
        buttonDisabled: false,
        sidenavLeftVisible: false,
        sidenavRightVisible: false
      };
    },
    methods: {
      disableButton() {
        this.buttonDisabled = !this.buttonDisabled;
      },
      toggleLeftSidenav() {
        this.sidenavLeftVisible = !this.sidenavLeftVisible;
      },
      toggleRightSidenav() {
        this.sidenavRightVisible = !this.sidenavRightVisible;
      }
    }
  };
</script>
