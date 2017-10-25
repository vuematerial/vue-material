<template>
  <div>
    <md-avatar>
      <img src="/assets/examples/avatar.png" alt="Avatar">
      <md-tooltip md-direction="top">Top</md-tooltip>
    </md-avatar>

    <md-avatar>
      <img src="/assets/examples/avatar.png" alt="Avatar">
      <md-tooltip md-direction="right">Right</md-tooltip>
    </md-avatar>

    <md-avatar>
      <img src="/assets/examples/avatar.png" alt="Avatar">
      <md-tooltip md-direction="bottom">Bottom</md-tooltip>
    </md-avatar>

    <md-avatar>
      <img src="/assets/examples/avatar.png" alt="Avatar">
      <md-tooltip md-direction="left">Left</md-tooltip>
    </md-avatar>
  </div>
</template>

<script>
  export default {
    name: 'Direction'
  }
</script>

<style lang="scss" scoped>
  .md-avatar {
    margin: 36px;
  }
</style>
