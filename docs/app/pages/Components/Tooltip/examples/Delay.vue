<template>
  <div>
    <span>
      No delay

      <md-tooltip>Bottom</md-tooltip>
    </span>

    <span>
      300ms

      <md-tooltip md-delay="300">Bottom</md-tooltip>
    </span>

    <span>
      1s

      <md-tooltip md-delay="1000">Bottom</md-tooltip>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'Delay'
  }
</script>

<style lang="scss" scoped>
  span {
    min-width: 60px;
    margin: 36px;
    display: inline-block;
    text-align: center;
  }
</style>
