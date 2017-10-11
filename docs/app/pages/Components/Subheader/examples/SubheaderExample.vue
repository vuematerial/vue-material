<template>
  <div>
    <md-subheader>Subheader Default</md-subheader>
    <md-subheader class="md-primary">Subheader Primary</md-subheader>
  </div>
</template>

<script>
  export default {
    name: 'SubheaderExample'
  }
</script>

<style lang="scss" scoped>
  .md-subheader + .md-subheader {
    margin-top: 16px;
  }
</style>
