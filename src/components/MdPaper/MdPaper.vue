<template>
  <div class="md-paper" :class="[$mdActiveTheme, elevationClass]">

  </div>
</template>

<style lang="scss">
  @import '~components/MdAnimation/variables';
  @import '~components/MdElevation/mixins';


</style>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdPaper',
    props: {
      mdElevation: Number
    },
    computed: {
      elevationClass () {
        if (this.mdElevation) {
          return 'md-elevation-' + this.mdElevation
        }

        return ''
      }
    }
  })
</script>
