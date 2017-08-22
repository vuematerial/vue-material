<template>
  <div>
    <md-toolbar>
      <h3 class="md-title">Default</h3>
    </md-toolbar>

    <md-toolbar md-elevation="0">
      <h3 class="md-title">No Elevation</h3>
    </md-toolbar>

    <md-toolbar class="md-transparent">
      <h3 class="md-title">Transparent</h3>
    </md-toolbar>

    <md-toolbar class="md-primary">
      <h3 class="md-title">Primary</h3>
    </md-toolbar>

    <md-toolbar class="md-accent">
      <h3 class="md-title">Accent</h3>
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
  name: 'RegularToolbar'
}
</script>
