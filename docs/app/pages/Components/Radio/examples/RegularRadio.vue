<template>
  <div>
    <md-radio v-model="radio" :value="false">Boolean</md-radio>
    <md-radio v-model="radio" value="my-radio">String</md-radio>
    <md-radio v-model="radio">No Value</md-radio>
    <md-radio v-model="radio" disabled>Disabled</md-radio>

    <small>Model value: {{ radio }}</small>
  </div>
</template>

<script>
  export default {
    name: 'RegularRadio',
    data: () => ({
      radio: false
    })
  }
</script>

<style lang="scss" scoped>
  small {
    display: block;
  }
</style>
