<template>
  <div>
    <md-radio v-model="radio" :value="false">Boolean Radio</md-radio>
    <md-radio v-model="radio" value="my-Radio">String Radio</md-radio>
    <md-radio v-model="radio">No Value Radio</md-radio>

    Radio value: {{ radio }}
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
  .md-radio {
    display: flex;
  }
</style>

