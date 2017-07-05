<template>
  <div>
    <md-subheader>Subheader Default</md-subheader>
    <md-subheader class="md-primary">Subheader Primary</md-subheader>
  </div>
</template>

<style lang="scss" scoped>
  .md-subheader + .md-subheader {
    margin-top: 16px;
  }
</style>

<script>
  export default {
    name: 'Subheader'
  }
</script>
