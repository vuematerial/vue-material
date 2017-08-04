<template>
  <div>
    <md-card md-with-hover>Regular card</md-card>
    <md-card md-with-hover class="md-primary">Primary card</md-card>
    <md-card md-with-hover class="md-accent">Accent card</md-card>
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
