<template>
  <div
    class="md-ripple"
    :class="rippleClasses"
    @touchstart.passive.stop="touchStartCheck"
    @touchmove.passive.stop="touchMoveCheck"
    @mousedown.passive.stop="startRipple">
    <slot />

    <template v-if="!isDisabled">
      <span v-for="(ripple, index) in ripples" :key="'ripple'+index" class="md-ripple-wave" :class="waveClasses" :style="ripple.waveStyles" />
    </template>
  </div>
</template>

<script>
  import raf from 'raf'
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdRipple',
    props: {
      mdActive: null,
      mdDisabled: Boolean,
      mdCentered: Boolean
    },
    data: () => ({
      ripples: [],
      touchTimeout: null,
      eventType: null
    }),
    computed: {
      isDisabled () {
        return !this.$material.ripple || this.mdDisabled
      },
      rippleClasses () {
        return {
          'md-disabled': this.isDisabled
        }
      },
      waveClasses () {
        return {
          'md-centered': this.mdCentered
        }
      }
    },
    watch: {
      mdActive (active) {
        const isBoolean = typeof active === 'boolean'
        const isEvent = active.constructor.name.toLowerCase() === 'mouseevent'

        if (isBoolean && this.mdCentered && active) {
          this.startRipple({
            type: 'mousedown'
          })
          this.$emit('update:mdActive', false)
        } else if (isEvent) {
          this.startRipple(active)
          this.$emit('update:mdActive', false)
        }
      }
    },
    methods: {
      touchMoveCheck () {
        window.clearTimeout(this.touchTimeout)
      },
      touchStartCheck ($event) {
        this.touchTimeout = window.setTimeout(() => {
          this.startRipple($event)
        }, 100)
      },
      startRipple ($event) {
        raf(async () => {
          const { eventType, isDisabled, mdCentered } = this

          if (!isDisabled && (!eventType || eventType === $event.type)) {
            let size = this.getSize()
            let position = null

            if (mdCentered) {
              position = this.getCenteredPosition(size)
            } else {
              position = this.getHitPosition($event, size)
            }

            this.eventType = $event.type
            this.ripples.push({
              animating: true,
              waveStyles: this.applyStyles(position, size)
            })
          }
        })
        this.clearWaves()
      },
      applyStyles (position, size) {
        size += 'px'

        return {
          ...position,
          width: size,
          height: size
        }
      },
      clearWaves () {
        let timeout
        window.clearTimeout(timeout)
        timeout = window.setTimeout(() => {
          this.ripples = []
        }, 1000)
      },
      getSize () {
        const { offsetWidth, offsetHeight } = this.$el

        return Math.round(Math.max(offsetWidth, offsetHeight))
      },
      getCenteredPosition (size) {
        const halfSize = -size / 2 + 'px'

        return {
          'margin-top': halfSize,
          'margin-left': halfSize
        }
      },
      getHitPosition ($event, elementSize) {
        const rect = this.$el.getBoundingClientRect()
        let top = $event.pageY
        let left = $event.pageX

        if ($event.type === 'touchstart') {
          top = $event.changedTouches[0].pageY
          left = $event.changedTouches[0].pageX
        }

        return {
          top: top - rect.top - elementSize / 2 - document.documentElement.scrollTop + 'px',
          left: left - rect.left - elementSize / 2 - document.documentElement.scrollLeft + 'px'
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-ripple {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 10;
    overflow: hidden;
    -webkit-mask-image: radial-gradient(circle, #fff 100%, #000 100%);
  }

  .md-ripple-wave {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    background: currentColor;
    border-radius: 50%;
    opacity: 0;
    animation: ripple .8s $md-transition-stand-timing;
    transition-property: opacity, transform;
    will-change: opacity, transform;

    &.md-centered {
      animation-duration: 1.2s;
      top: 50%;
      left: 50%;
    }
    ~ *:not(.md-ripple-wave) {
      position: relative;
      z-index: 2;
    }
  }

  @keyframes ripple {
    0% {
      opacity: 0;
      transform: scale(0) translateZ(0);
    }
    20% {
      opacity: .26;
      transform: scale(.26) translateZ(0);
    }
    100% {
      opacity: 0;
      transform: scale(2) translateZ(0);
    }
  }
</style>
