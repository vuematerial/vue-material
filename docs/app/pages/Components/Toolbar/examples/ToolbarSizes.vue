<template>
  <div>
    <md-toolbar class="md-dense">
      <h3 class="md-title">Dense</h3>
    </md-toolbar>

    <md-toolbar class="md-medium">
      <div class="md-toolbar-row">
        <h3 class="md-title">Medium</h3>
      </div>
    </md-toolbar>

    <md-toolbar class="md-large">
      <div class="md-toolbar-row">
        <h3 class="md-title">Large</h3>
      </div>
    </md-toolbar>

    <md-toolbar class="md-large md-dense">
      <div class="md-toolbar-row">
        <h3 class="md-title">Large Dense</h3>
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
  name: 'ToolbarSizes'
}
</script>
