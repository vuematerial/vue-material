<template>
  <div class="md-speed-dial" :class="[$mdActiveTheme, speedDialClasses]">
    <slot />
  </div>
</template>

<script>
import MdComponent from 'core/MdComponent'

const customValidator = (name, source, value) => {
  if (source.includes(value)) {
    return true
  }

  console.error(`The ${name} prop is invalid. Given value: ${value}. Available options: ${source.join(', ')}.`)

  return false
}

export default new MdComponent({
  name: 'MdSpeedDial',
  props: {
    mdEvent: {
      type: String,
      default: 'hover',
      validator: (value) => customValidator('md-event', ['click', 'hover'], value)
    },
    mdDirection: {
      type: String,
      default: 'top',
      validator: (value) => customValidator('md-direction', ['top', 'bottom'], value)
    },
    mdEffect: {
      type: String,
      default: 'fling',
      validator: (value) => customValidator('md-effect', ['fling', 'scale', 'opacity'], value)
    }
  },
  data () {
    return {
      MdSpeedDial: {
        active: false,
        event: this.mdEvent,
        direction: this.mdDirection
      }
    }
  },
  computed: {
    speedDialClasses () {
      return {
        'md-active': this.MdSpeedDial.active,
        'md-with-hover': this.mdEvent === 'hover',
        ['md-direction-' + this.mdDirection]: true,
        ['md-effect-' + this.mdEffect]: true
      }
    }
  },
  provide () {
    return {
      MdSpeedDial: this.MdSpeedDial
    }
  }
})
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-speed-dial {
    display: inline-flex;
    flex-direction: column;

    &.md-top-right,
    &.md-top-left {
      position: absolute;
      top: 24px;
    }

    &.md-bottom-right,
    &.md-bottom-left {
      position: absolute;
      bottom: 24px;
    }

    &.md-top-right,
    &.md-bottom-right {
      right: 24px;
    }

    &.md-top-left,
    &.md-bottom-left {
      left: 24px;
    }

    &.md-fixed {
      position: fixed;
    }

    &.md-direction-top {
      &.md-effect-fling {
        .md-speed-dial-content .md-button {
          transform: translate3d(0, 50%, 0) scale(.8);
        }
      }

      .md-speed-dial-target {
        order: 2;
        margin-bottom: 0 !important;
      }

      .md-speed-dial-content {
        order: 1;

        .md-button:first-child {
          margin-top: 0;
        }
      }
    }

    &.md-direction-bottom {
      &.md-effect-fling {
        .md-speed-dial-content .md-button {
          transform: translate3d(0, -50%, 0) scale(.8);
        }
      }

      .md-speed-dial-target {
        order: 1;
        margin-top: 0 !important;
      }

      .md-speed-dial-content {
        order: 2;

        .md-button:last-child {
          margin-bottom: 0;
        }
      }
    }

    &.md-effect-scale {
      .md-speed-dial-content .md-button {
        transform: scale(.3);
      }
    }

    &.md-active,
    &.md-with-hover:hover {
      .md-speed-dial-content .md-button {
        pointer-events: auto;
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1) !important;
        transition: opacity .2s $md-transition-default-timing,
                    transform .3s $md-transition-stand-timing;

        @for $index from 0 through 5 {
          &[md-button-index="#{$index}"] {
            transition-delay: .1s * $index
          }
        }
      }
    }

    .md-button {
      margin: 6px 0;
    }

    .md-speed-dial-content .md-button {
      pointer-events: none;
      opacity: 0;
      transition: opacity .3s $md-transition-default-timing,
                  transform 0s .3s $md-transition-default-timing;
      will-change: opacity, transform;
    }
  }
</style>
