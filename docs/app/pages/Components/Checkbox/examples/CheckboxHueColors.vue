<template>
  <div>
    <md-checkbox v-model="boolean">Accent <small>(Default)</small></md-checkbox>
    <md-checkbox v-model="boolean" class="md-primary">Primary</md-checkbox>
  </div>
</template>

<script>
  export default {
    name: 'CheckboxHueColors',
    data: () => ({
      boolean: true
    })
  }
</script>

<style lang="scss" scoped>
  .md-checkbox {
    display: flex;
  }
</style>
