<template>
  <div>
    <p>Suscipit beatae, fugiat sequi ducimus error optio dignissimos ea rem eum possimus at neque et quasi veniam. Fuga, quam repellat id laboriosam.</p>
    <md-divider></md-divider>

    <h2>Inset Divider</h2>
    <md-divider class="md-inset"></md-divider>
  </div>
</template>

<style lang="scss" scoped>
  .md-divider + .md-divider {
    margin-top: 16px;
  }
</style>

<script>
  export default {
    name: 'Divider'
  }
</script>
