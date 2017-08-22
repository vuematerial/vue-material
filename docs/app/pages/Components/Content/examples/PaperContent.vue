<template>
  <div>
    <md-content>Background</md-content>
    <md-content class="md-primary">Primary</md-content>
    <md-content class="md-accent">Accent</md-content>
  </div>
</template>

<style lang="scss" scoped>
  .md-content {
    width: 200px;
    height: 200px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
export default {
  name: 'PaperContent'
}
</script>
