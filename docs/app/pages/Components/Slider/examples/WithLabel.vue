<template>
  <div>
    <md-slider v-model="slider1">
      Size
    </md-slider>

    <md-slider v-model="slider2">
      <md-icon>volume_up</md-icon>
    </md-slider>
  </div>
</template>

<script>
  export default {
    name: 'Example',
    data () {
      return {
        slider1: 10,
        slider2: 50
      }
    }
  }
</script>
