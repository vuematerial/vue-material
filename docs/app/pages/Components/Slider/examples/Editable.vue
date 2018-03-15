<template>
  <div class="slider-example">
    <div class="slider-demo-box" :style="{ background: getRGB }"></div>
    <div class="sliders-demo">
      <md-slider v-model="r" :max="255" md-editable>
        R
      </md-slider>
      <md-slider v-model="g" :max="255" md-editable>
        G
      </md-slider>
      <md-slider v-model="b" :max="255" md-editable>
        B
      </md-slider>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Example',
    data: () => ({
      r: 178,
      g: 255,
      b: 89
    }),
    computed: {
      getRGB () {
        return `rgb(${this.r},${this.g},${this.b})`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slider-example {
    max-width: 240px;
    border: 1px solid rgba(0,0,0,0.12);
    .slider-demo-box {
      height: 160px;
      padding: 16px;
    }
    .sliders-demo {
      padding: 16px 16px 0;
    }
  }
</style>

