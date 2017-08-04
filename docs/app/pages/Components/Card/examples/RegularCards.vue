<template>
  <div>
    <md-card>Regular card</md-card>
    <md-card class="md-primary">Primary card</md-card>
    <md-card class="md-accent">Accent card</md-card>
  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    width: 200px;
    padding: 16px;
    display: inline-block;
  }
</style>

<script>
  export default {
    name: 'RegularCards'
  }
</script>
