<template>
  <div>
    <md-radio v-for="value in values" :key="value" @change="changeRadio" :model="controlledRadio" :value="value">{{value}}</md-radio>
    <small>Model value: {{ controlledRadio }}</small>
  </div>
</template>

<script>
  export default {
    name: 'ControlledRadio',
    data () {
      return {
        controlledRadio: "One",
        values: ["One", "Two", "Three", "Four"]
      }
    },
    methods: {
      changeRadio(value){
        this.controlledRadio = value
      }
    }
  }
</script>

<style lang="scss" scoped>
  small {
    display: block;
  }
</style>
