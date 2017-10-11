<template>
  <div>
    <md-radio v-model="radio" value="accent">Accent <small>(Default)</small></md-radio>
    <md-radio v-model="radio" value="Primary" class="md-primary">Primary</md-radio>
  </div>
</template>

<script>
  export default {
    name: 'RadioHueColors',
    data: () => ({
      radio: 'accent'
    })
  }
</script>

<style lang="scss" scoped>
  .md-radio {
    display: flex;
  }
</style>
