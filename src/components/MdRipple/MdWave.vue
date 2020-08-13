<template>
  <transition name="md-ripple" @after-enter="end" appear>
    <span v-if="animating" />
  </transition>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  export default new MdComponent({
    name: 'MdWave',
    data () {
      return {
        animating: false
      }
    },
    props: {
      waveClasses: null,
      waveStyles: null
    },
    mounted: function () {
      this.animating = true
    },
    methods: {
      end () {
        this.animating = false
        this.$emit('md-end')
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-ripple-enter-active {
    transition: .8s $md-transition-stand-timing;
    transition-property: opacity, transform;
    will-change: opacity, transform;
    &.md-centered {
      transition-duration: 1.2s;
    }
  }

  .md-ripple-enter {
    opacity: .26;
    transform: scale(.26) translateZ(0);
  }
</style>
