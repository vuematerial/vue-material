<template>
  <transition name="md-progress-spinner" appear>
    <div class="md-progress-spinner" :class="[progressClasses, $mdActiveTheme]">
      <svg
        class="md-progress-spinner-draw"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        :viewBox="`0 0 ${mdDiameter} ${mdDiameter}`"
        :style="svgStyles">
        <circle class="md-progress-spinner-circle" cx="50%" cy="50%" :r="circleRadius" :style="circleStyles"></circle>
      </svg>
    </div>
  </transition>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPropValidator from 'core/utils/MdPropValidator'
  import INDETERMINATE_ANIMATION_TEMPLATE from './MdProgressSpinnerAnimation'

  const MdProgressSpinner = {
    styleTag: null,
    diameters: new Set()
  }

  export default new MdComponent({
    name: 'MdProgressSpinner',
    props: {
      mdValue: {
        type: Number,
        default: 0
      },
      mdDiameter: {
        type: Number,
        default: 60
      },
      mdStroke: {
        type: Number,
        default: 6
      },
      mdMode: {
        type: String,
        default: 'determinate',
        ...MdPropValidator('md-mode', [
          'determinate',
          'indeterminate'
        ])
      }
    },
    computed: {
      isDeterminate () {
        return this.mdMode === 'determinate'
      },
      isIndeterminate () {
        return this.mdMode === 'indeterminate'
      },
      isIE () {
        if (!this.$isServer) {
          return navigator.userAgent.toLowerCase().includes('trident')
        }
        return false
      },
      progressClasses () {
        let animationClass = 'md-progress-spinner-indeterminate'

        if (this.isIE) {
          animationClass += '-fallback'
        }

        return {
          [animationClass]: true,
          ['md-' + this.mdMode]: true
        }
      },
      svgStyles () {
        const size = `${this.mdDiameter}px`

        return {
          width: size,
          height: size
        }
      },
      circleStyles () {
        return {
          'stroke-dashoffset': this.circleStrokeDashOffset,
          'stroke-dasharray': this.circleStrokeDashArray,
          'stroke-width': this.circleStrokeWidth,
          'animation-name': 'md-progress-spinner-stroke-rotate-' + this.mdDiameter
        }
      },
      circleRadius () {
        return (this.mdDiameter - this.mdStroke) / 2
      },
      circleStrokeWidth () {
        return this.mdStroke + 'px'
      },
      circleCircumference () {
        return 2 * Math.PI * this.circleRadius
      },
      circleStrokeDashArray () {
        return this.circleCircumference + 'px'
      },
      circleStrokeDashOffset () {
        if (this.isDeterminate) {
          return this.circleCircumference * (100 - this.mdValue) / 100 + 'px'
        }

        if (this.isIndeterminate && this.isIE) {
          return this.circleCircumference * 0.2 + 'px'
        }

        return null
      }
    },
    watch: {
      mdDiameter () {
        this.attachStyleTag()
      }
    },
    methods: {
      getAnimationCSS () {
        return INDETERMINATE_ANIMATION_TEMPLATE
            .replace(/START_VALUE/g, `${0.95 * this.circleCircumference}`)
            .replace(/END_VALUE/g, `${0.2 * this.circleCircumference}`)
            .replace(/DIAMETER/g, `${this.mdDiameter}`);
      },
      attachStyleTag () {
        let styleTag = MdProgressSpinner.styleTag

        if (!styleTag) {
          styleTag = document.getElementById('md-progress-spinner-styles')
        }

        if (!styleTag) {
          styleTag = document.createElement('style')

          styleTag.id = 'md-progress-spinner-styles'
          document.head.appendChild(styleTag)
          MdProgressSpinner.styleTag = styleTag
        }

        if (styleTag && styleTag.sheet) {
          styleTag.sheet.insertRule(this.getAnimationCSS(), 0)
        }

        MdProgressSpinner.diameters.add(this.mdDiameter)
      }
    },
    mounted () {
      this.attachStyleTag()
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  @keyframes md-progress-spinner-rotate {
    0% {
      transform: rotate(0)
    }

    100% {
      transform: rotate(360deg)
    }
  }

  @keyframes md-progress-spinner-initial-rotate {
    0% {
      opacity: 0;
      transform: rotate(-90deg) translateZ(0);
    }

    20% {
      opacity: 1;
    }

    100% {
      transform: rotate(270deg) translateZ(0);
    }
  }

  @keyframes md-progress-spinner-stroke-rotate-fallback {
    0% {
      transform: rotate(0)
    }
    25% {
      transform: rotate(1170deg)
    }
    50% {
      transform: rotate(2340deg)
    }
    75% {
      transform: rotate(3510deg)
    }
    100% {
      transform: rotate(4680deg)
    }
  }

  .md-progress-spinner {
    display: inline-flex;
    position: relative;

    &.md-indeterminate {
      animation: md-progress-spinner-rotate 2s linear infinite;

      &.md-progress-spinner-enter,
      &.md-progress-spinner-leave-active {
        transition-duration: .4s;

        .md-progress-spinner-draw {
          opacity: 0;
          transform: scale(.1);
        }
      }

      .md-progress-spinner-circle {
        animation: 4s infinite $md-transition-stand-timing;
      }
    }

    &.md-determinate {
      &.md-progress-spinner-enter-active,
      &.md-progress-spinner-leave-active {
        transition-duration: 2s;

        .md-progress-spinner-draw {
          animation: md-progress-spinner-initial-rotate 1.98s $md-transition-stand-timing forwards;
        }
      }

      .md-progress-spinner-draw {
        transition: none;
      }
    }
  }

  .md-progress-spinner-draw {
    overflow: visible;
    transform: scale(1) rotate(-90deg);
    transform-origin: center;
    transition: .4s $md-transition-stand-timing;
    will-change: opacity, transform;
  }

  .md-progress-spinner-circle {
    fill: none;
    transform-origin: center;
    transition: stroke-dashoffset .25s $md-transition-stand-timing;
    will-change: stroke-dashoffset, stroke-dasharray, stroke-width, animation-name, r;
  }
</style>
