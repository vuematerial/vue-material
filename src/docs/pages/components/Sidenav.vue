<template>
  <demo-page>
    <div slot="examples">
      <demo-example label="Default" size="2">
        <div class="phone-viewport">
          <md-toolbar>
            <md-button class="md-icon-button" @click="toggleLeftSidenav">
              <md-icon>menu</md-icon>
            </md-button>

            <h2 class="md-title">My App</h2>
          </md-toolbar>

          <div>
            <md-button class="md-raised md-accent" @click="toggleRightSidenav">Toggle right</md-button>
            <p>Open console to see the events</p>
          </div>

          <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
            <md-toolbar class="md-large">
              <div class="md-toolbar-container">
                <h3 class="md-title">Sidenav content</h3>
              </div>
            </md-toolbar>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
          </md-sidenav>

          <md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
            <md-toolbar>
              <div class="md-toolbar-container">
                <h3 class="md-title">Sidenav content</h3>
              </div>
            </md-toolbar>

            <md-button class="md-raised md-accent" @click="closeRightSidenav">Close</md-button>
          </md-sidenav>
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
  p {
    padding: 8px 16px;
  }
</style>

<script>
  export default {
    methods: {
      toggleLeftSidenav() {
        this.$refs.leftSidenav.toggle();
      },
      toggleRightSidenav() {
        this.$refs.rightSidenav.toggle();
      },
      closeRightSidenav() {
        this.$refs.rightSidenav.close();
      },
      open(ref) {
        console.log('Opened: ' + ref);
      },
      close(ref) {
        console.log('Closed: ' + ref);
      }
    },
    mounted() {
      this.$root.pageTitle = 'Components - Sidenav';
    }
  };
</script>
