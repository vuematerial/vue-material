<template>
  <div class="md-ripple" @touchstart.passive.stop="startRipple" @mousedown.passive.stop="startRipple">
    <transition name="md-ripple" appear @after-enter="clearWave" v-if="!mdDisabled">
      <span class="md-ripple-wave" ref="rippleWave" :style="waveStyles" v-if="animating" />
    </transition>

    <slot />
  </div>
</template>

<style lang="scss">
  @import '~components/MdAnimation/variables';

  .md-ripple {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    overflow: hidden;
    -webkit-mask-image: radial-gradient(circle, #fff 100%, #000 100%);
    transition: background-color $md-transition-default;
  }

  .md-ripple-wave {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    background: currentColor;
    border-radius: 50%;
    opacity: 0;
    transform: scale(2) translateZ(0);

    ~ * {
      position: relative;
      z-index: 2;
    }
  }

  .md-ripple-enter-active {
    transition: 1s $md-transition-stand-timing;
    transition-property: opacity, transform;
    will-change: opacity, transform;
  }

  .md-ripple-enter {
    opacity: .38;
    transform: scale(0) translateZ(0);
  }
</style>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdRipple',
    props: {
      mdDisabled: Boolean
    },
    data: () => ({
      eventType: null,
      waveStyles: null,
      animating: false
    }),
    methods: {
      async startRipple ($event) {
        const { eventType, mdDisabled } = this

        if (!mdDisabled && (!eventType || eventType === $event.type)) {
          let rippleSize = this.getSize()
          const touchPosition = this.getTouchPosition($event, rippleSize)

          await this.clearWave()

          rippleSize += 'px'

          this.eventType = $event.type
          this.animating = true
          this.waveStyles = {
            ...touchPosition,
            width: rippleSize,
            height: rippleSize
          }
        }
      },
      clearWave () {
        this.waveStyles = null
        this.animating = false

        return this.$nextTick()
      },
      getSize () {
        const { offsetWidth, offsetHeight } = this.$el

        return Math.round(Math.max(offsetWidth, offsetHeight))
      },
      getTouchPosition ($event, elementSize) {
        const rect = this.$el.getBoundingClientRect()
        let top = $event.pageY
        let left = $event.pageX

        if ($event.type === 'touchstart') {
          top = $event.changedTouches[0].pageY
          left = $event.changedTouches[0].pageX
        }

        return {
          top: top - rect.top - elementSize / 2 - document.body.scrollTop + 'px',
          left: left - rect.left - elementSize / 2 - document.body.scrollLeft + 'px'
        }
      }
    }
  })
</script>
