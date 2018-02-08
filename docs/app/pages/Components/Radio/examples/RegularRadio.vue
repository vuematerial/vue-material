<template>
  <div>
    <md-radio v-model="vModelRadio" :value="true">Boolean (true)</md-radio>
    <md-radio v-model="vModelRadio" :value="false">Boolean (false)</md-radio>
    <md-radio v-model="vModelRadio" value="test A">String: "test A"</md-radio>
    <md-radio v-model="vModelRadio" value="test B">String: "test B"</md-radio>
    <md-radio v-model="vModelRadio">No Value</md-radio>
    <md-radio v-model="vModelRadio" disabled>Disabled</md-radio>
    <small>Model value: {{ vModelRadio }}</small>
  </div>
</template>

<script>
  export default {
    name: 'RegularRadio',
    data: () => ({
      vModelRadio: false
    }),
  }
</script>

<style lang="scss" scoped>
  small {
    display: block;
  }
</style>
