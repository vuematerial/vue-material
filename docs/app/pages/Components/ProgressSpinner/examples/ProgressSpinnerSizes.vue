<template>
  <div>
    <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
    <md-progress-spinner :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
    <md-progress-spinner class="md-accent" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
    <md-progress-spinner class="md-accent" :md-diameter="30" md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>

<script>
  export default {
    name: 'ProgressSpinnerSizes'
  }
</script>

<style lang="scss" scoped>
  .md-progress-spinner {
    margin: 24px;
  }
</style>
