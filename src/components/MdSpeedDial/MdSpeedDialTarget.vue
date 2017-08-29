<template>
  <md-button class="md-speed-dial-target md-fab" v-on="$listeners" v-bind="$attrs" @click="handleClick">
    <slot />
  </md-button>
</template>

<script>
export default {
  name: 'MdSpeedDialTarget',
  inject: ['MdSpeedDial'],
  methods: {
    handleClick () {
      if (this.MdSpeedDial.event === 'click') {
        this.MdSpeedDial.active = !this.MdSpeedDial.active
      }
    }
  }
}
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-speed-dial-target {
    z-index: 1;
  }
</style>
