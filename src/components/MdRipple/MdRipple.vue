<template>
  <div
    :class="['md-ripple', rippleClasses]"
    @touchstart.passive="event => mdEventTrigger && touchStartCheck(event)"
    @touchmove.passive="event => mdEventTrigger && touchMoveCheck(event)"
    @mousedown.passive="event => mdEventTrigger && startRipple(event)">
    <slot />
    <md-wave v-for="ripple in ripples" :key="ripple.uuid" :class="['md-ripple-wave', waveClasses]" :style="ripple.waveStyles" @md-end="clearWave(ripple.uuid)" v-if="!isDisabled" />
  </div>
</template>

<script>
  import raf from 'raf'
  import MdComponent from 'core/MdComponent'
  import uuid from 'core/utils/MdUuid'
  import MdWave from './MdWave'

  export default new MdComponent({
    name: 'MdRipple',
    components: {
      MdWave
    },
    props: {
      mdActive: null,
      mdDisabled: Boolean,
      mdCentered: Boolean,
      mdEventTrigger: {
        type: Boolean,
        default: true
      }
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
        const isBooleanOrObject = typeof active === 'boolean' || typeof active === 'object';
        const isEvent = active.constructor.toString().match(/(function|object) (\w*)/)[2].toLowerCase() === 'mouseevent';

        if (isBooleanOrObject && this.mdCentered && active) {
          this.startRipple({
            type: 'mousedown'
          })
        } else if (isEvent) {
          this.startRipple(active)
        }

        this.$emit('update:mdActive', false)
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
        raf(() => {
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
              waveStyles: this.applyStyles(position, size),
              uuid: uuid()
            })
          }
        })
      },
      applyStyles (position, size) {
        size += 'px'

        return {
          ...position,
          width: size,
          height: size
        }
      },
      clearWave (uuid) {
        uuid ? this.ripples = this.ripples.filter(ripple => ripple.uuid !== uuid) : this.ripples = []
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
    transform: scale(2) translateZ(0);

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
</style>
