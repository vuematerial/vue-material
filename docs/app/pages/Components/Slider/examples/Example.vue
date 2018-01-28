<template>
  <div>
    <md-slider v-model="slider"></md-slider>
    Disabled
    <md-slider disabled></md-slider>
  </div>
</template>

<script>
  export default {
    name: 'Example',
    data () {
      return {
        sliderMax: 0,
        slider: 0
      }
    }
  }
</script>
