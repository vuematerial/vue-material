<template>
  <div>
    <md-switch v-model="boolean">Accent <small>(Default)</small></md-switch>
    <md-switch v-model="boolean" class="md-primary">Primary</md-switch>
  </div>
</template>

<script>
  export default {
    name: 'SwitchHueColors',
    data: () => ({
      boolean: true
    })
  }
</script>

<style lang="scss" scoped>
  .md-switch {
    display: flex;
  }
</style>
