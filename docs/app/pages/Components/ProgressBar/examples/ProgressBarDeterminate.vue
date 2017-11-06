<template>
  <div>
    <md-progress-bar md-mode="determinate" :md-value="amount"></md-progress-bar>
    <md-progress-bar class="md-accent" md-mode="determinate" :md-value="amount"></md-progress-bar>
    <input type="range" v-model.number="amount"> {{ amount }}%
  </div>
</template>

<script>
  export default {
    name: 'ProgressBarDeterminate',
    data: () => ({
      amount: 0
    })
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    margin: 24px;
  }
</style>
