<template>
  <div>
    <md-avatar>
      <img src="/assets/examples/avatar.png" alt="Avatar">
      <md-tooltip :md-active.sync="tooltipActive">Top</md-tooltip>
    </md-avatar>

    <md-button class="md-raised md-primary" @click="tooltipActive = !tooltipActive">Toggle Tooltip</md-button>
  </div>
</template>

<script>
  export default {
    name: 'Dynamically',
    data: () => ({
      tooltipActive: false
    })
  }
</script>

<style lang="scss" scoped>
  .md-avatar,
  .md-button {
    margin: 36px;
  }
</style>
