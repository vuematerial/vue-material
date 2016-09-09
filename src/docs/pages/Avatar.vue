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
      <md-whiteframe>
        <md-toolbar v-md-theme="'grey'">
          <h2 class="md-title">Default</h2>
        </md-toolbar>

        <section>
          <md-avatar>
            <img src="//placeimg.com/40/40/people/1" alt="People">
          </md-avatar>

          <md-avatar class="md-avatar-icon">
            <md-icon>home</md-icon>
          </md-avatar>

          <md-avatar class="md-avatar-icon md-primary">
            <md-icon>folder</md-icon>
          </md-avatar>

          <md-avatar class="md-avatar-icon md-accent">
            <md-icon>favorite</md-icon>
          </md-avatar>

          <md-avatar class="md-avatar-icon md-warn">
            <md-icon>notes</md-icon>
          </md-avatar>
        </section>
      </md-whiteframe>

      <md-whiteframe>
        <md-toolbar v-md-theme="'grey'">
          <h2 class="md-title">Large</h2>
        </md-toolbar>

        <section>
          <md-avatar class="md-large">
            <img src="//placeimg.com/64/64/people/2" alt="People">
          </md-avatar>

          <md-avatar class="md-avatar-icon md-large">
            <md-icon>home</md-icon>
          </md-avatar>

          <md-avatar class="md-avatar-icon md-large md-primary">
            <md-icon>folder</md-icon>
          </md-avatar>

          <md-avatar class="md-avatar-icon md-large md-accent">
            <md-icon>favorite</md-icon>
          </md-avatar>

          <md-avatar class="md-avatar-icon md-large md-warn">
            <md-icon>notes</md-icon>
          </md-avatar>
        </section>
      </md-whiteframe>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$root.pageTitle = 'Avatar';
    }
  };
</script>
