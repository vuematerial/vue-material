<template>
  <div>
    <md-toolbar>
      <h3 class="md-title" style="flex: 1">Title</h3>
      <md-button class="md-icon-button">
        <md-icon>more_vert</md-icon>
      </md-button>
    </md-toolbar>

    <md-toolbar class="md-accent" md-elevation="1">
      <h3 class="md-title" style="flex: 1">Title</h3>
      <md-button>Refresh</md-button>
      <md-button class="md-primary">Create</md-button>
    </md-toolbar>

    <md-toolbar class="md-large md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
        </div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>refresh</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </div>

      <div class="md-toolbar-row md-toolbar-offset">
        <h3 class="md-title">Title on a second row</h3>
      </div>
    </md-toolbar>
  </div>
</template>

<style lang="scss" scoped>
  .md-toolbar + .md-toolbar {
    margin-top: 16px;
  }
</style>

<script>
export default {
  name: 'ContentActions'
}
</script>
