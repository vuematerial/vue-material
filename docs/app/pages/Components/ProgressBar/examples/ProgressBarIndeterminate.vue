<template>
  <div>
    <md-progress-bar md-mode="indeterminate"></md-progress-bar>
    <md-progress-bar class="md-accent" md-mode="indeterminate"></md-progress-bar>
  </div>
</template>

<script>
  export default {
    name: 'ProgressBarIndeterminate'
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    margin: 24px;
  }
</style>
