<template>
  <div>
    <md-progress-spinner md-mode="determinate" :md-value="amount"></md-progress-spinner>
    <md-progress-spinner class="md-accent" md-mode="determinate" :md-value="amount"></md-progress-spinner>
    <div>
      <input type="range" v-model.number="amount"> {{ amount }}%
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProgressSpinnerDeterminate',
    data: () => ({
      amount: 20
    })
  }
</script>

<style lang="scss" scoped>
  .md-progress-spinner {
    margin: 24px;
  }
</style>
