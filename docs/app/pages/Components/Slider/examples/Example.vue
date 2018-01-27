<template>
  <div>
    <md-slider v-model="test" :max="20">
      Size
    </md-slider>

    <md-slider v-model="test2">
      <md-icon>volume_up</md-icon>
    </md-slider>

    <md-slider v-model="test2"></md-slider>

    <md-slider v-model="test2" disabled>
      Disabled
    </md-slider>
  </div>
</template>

<script>
  export default {
    name: 'Example',
    data () {
      return {
        test: 5,
        test2: 0
      }
    }
  }
</script>
