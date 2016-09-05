<template>
  <section>
    <h2 class="title">Sidenav</h2>

    <div class="cell-phone">
      <md-toolbar>
        <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title">Left Sidenav</h2>
      </md-toolbar>

      <md-sidenav class="md-left" ref="leftSidenav" @open="open" @close="close">
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
        <md-button class="md-icon-button" @click.native="toggleRightSidenav">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title">Right Sidenav</h2>
      </md-toolbar>

      <md-sidenav class="md-right md-fixed" ref="rightSidenav" @open="open" @close="close">
        <md-toolbar class="md-extended">
          <div class="md-toolbar-container">
            <h3 class="md-title">Sidenav content</h3>
          </div>
        </md-toolbar>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
      </md-sidenav>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        sidenavLeftVisible: false,
        sidenavRightVisible: false
      };
    },
    methods: {
      toggleLeftSidenav() {
        this.$refs.leftSidenav.toggle();
      },
      toggleRightSidenav() {
        this.$refs.rightSidenav.toggle();
      },
      open() {
        console.log('Open');
      },
      close() {
        console.log('Close');
      }
    }
  };
</script>
