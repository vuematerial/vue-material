<template>
  <div class="md-speed-dial" :class="[$mdActiveTheme, speedDialClasses]">
    <slot />
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPropValidator from 'core/utils/MdPropValidator'

  export default new MdComponent({
    name: 'MdSpeedDial',
    props: {
      mdEvent: {
        type: String,
        default: 'hover',
        ...MdPropValidator('md-event', ['click', 'hover'])
      },
      mdDirection: {
        type: String,
        default: 'top',
        ...MdPropValidator('md-direction', ['top', 'bottom'])
      },
      mdEffect: {
        type: String,
        default: 'fling',
        ...MdPropValidator('md-effect', ['fling', 'scale', 'opacity'])
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
    provide () {
      return {
        MdSpeedDial: this.MdSpeedDial
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

    &.md-top-center,
    &.md-bottom-center {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &.md-top-center {
      top: 24px;
    }

    &.md-bottom-center {
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
      .md-morph-initial {
        opacity: 0;
        transform: translate3D(-50%, -50%, 0) rotate(90deg) scale(.7);
      }

      .md-morph-final {
        opacity: 1;
        transform: translate3D(-50%, -50%, 0) rotate(0deg) scale(1);
      }

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

    .md-morph-initial,
    .md-morph-final {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3D(-50%, -50%, 0);
      transition: .3s $md-transition-stand-timing;
      transition-property: opacity, transform;
      will-change: opacity, transform;
    }

    .md-morph-final {
      opacity: 0;
      transform: translate3D(-50%, -50%, 0) scale(.7) rotate(-90deg);
    }
  }
</style>
