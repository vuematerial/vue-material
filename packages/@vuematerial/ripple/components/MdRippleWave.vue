<template>
  <transition name="md-ripple" appear>
    <span class="md-ripple-wave" :style="componentStyle" />
  </transition>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component
  class MdRippleWave extends Vue {

    @Prop({ type: Object, default: () => ({}) })
    mdStyle!: object

    componentStyle: object = {}

    mounted () {
      this.$nextTick(() => {
        this.componentStyle = this.mdStyle
      })
    }

  }

  export default MdRippleWave
</script>
