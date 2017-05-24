<template>
  <div class="md-ripple" @touchstart.stop="startRipple" @touchend.stop="endRipple" @mousedown.stop="startRipple" @mouseup.stop="endRipple" :class="{ pressed }">
    <transition name="md-ripple" appear @after-enter="clearWave">
      <span class="md-ripple-wave" ref="rippleWave" :style="waveStyles" v-if="animating"></span>
    </transition>
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
    z-index: 3;
    overflow: hidden;
    -webkit-mask-image: radial-gradient(circle, white 100%, black 100%);
    transition: background-color $md-transition-default;

    &.pressed {
      background-color: rgba(#000, .12);
    }
  }

  .md-ripple-wave {
    position: absolute;
    z-index: 4;
    pointer-events: none;
    background: #000;
    border-radius: 50%;
    opacity: 0;
    transform: scale(2) translateZ(0);
  }

  .md-ripple-enter-active {
    transition: .8s $md-transition-enter-timing;
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
    data: () => ({
      eventType: null,
      waveStyles: null,
      animating: false,
      pressed: false
    }),
    methods: {
      async startRipple ($event) {
        if (!this.eventType || this.eventType === $event.type) {
          let rippleSize = this.getSize()
          const touchPosition = this.getTouchPosition($event, rippleSize)

          await this.clearWave()

          rippleSize += 'px'

          this.eventType = $event.type
          this.animating = true
          this.pressed = true
          this.waveStyles = {
            ...touchPosition,
            width: rippleSize,
            height: rippleSize
          }
        }
      },
      endRipple () {
        this.pressed = false
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
