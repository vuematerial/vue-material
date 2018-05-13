<template>
  <transition name="md-progress-bar" appear>
    <div class="md-progress-bar" :class="[progressClasses, $mdActiveTheme]">
      <div class="md-progress-bar-track" :style="progressTrackStyle"></div>
      <div class="md-progress-bar-fill" :style="progressValueStyle"></div>
      <div class="md-progress-bar-buffer" :Style="progressBufferStyle"></div>
    </div>
  </transition>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPropValidator from 'core/utils/MdPropValidator'

  export default new MdComponent({
    name: 'MdProgressBar',
    props: {
      mdValue: {
        type: Number,
        default: 0
      },
      mdBuffer: {
        type: Number,
        default: 0
      },
      mdMode: {
        type: String,
        default: 'determinate',
        ...MdPropValidator('md-mode', [
          'determinate',
          'indeterminate',
          'query',
          'buffer'
        ])
      }
    },
    computed: {
      isDeterminate () {
        return this.mdMode === 'determinate'
      },
      isBuffer () {
        return this.mdMode === 'buffer'
      },
      hasAmountFill () {
        return this.isBuffer || this.isDeterminate
      },
      progressClasses () {
        return 'md-' + this.mdMode
      },
      progressValueStyle () {
        if (this.hasAmountFill) {
          return `width: ${this.mdValue}%`
        }
      },
      progressTrackStyle () {
        if (this.hasAmountFill) {
          return `width: ${this.mdBuffer}%`
        }
      },
      progressBufferStyle () {
        if (this.hasAmountFill) {
          return `left: calc(${this.mdBuffer}% + 8px)`
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  @keyframes md-progress-bar-indeterminate-track {
    0% {
      transform: translateX(0)
    }

    20% {
      animation-timing-function: cubic-bezier(.5, 0, .70, .5);
      transform: translateX(0)
    }

    60% {
      animation-timing-function: cubic-bezier(.30, .38, .55, .96);
      transform: translateX(83.67%)
    }

    100% {
      transform: translateX(200.61%)
    }
  }

  @keyframes md-progress-bar-indeterminate-track-alternate {
    0% {
      transform: scaleX(.08)
    }

    35% {
      animation-timing-function: cubic-bezier(.33, .12, .79, 1);
      transform: scaleX(.08)
    }

    70% {
      animation-timing-function: cubic-bezier(.06, .11, .6, 1);
      transform: scaleX(.66)
    }

    100% {
      transform: scaleX(.08)
    }
  }

  @keyframes md-progress-bar-indeterminate-fill {
    0% {
      animation-timing-function: cubic-bezier(.15, 0, .52, .41);
      transform: translateX(0)
    }

    25% {
      animation-timing-function: cubic-bezier(.31, .28, .8, .73);
      transform: translateX(37.65%)
    }

    50% {
      animation-timing-function: cubic-bezier(.4, .63, .6, .90);
      transform: translateX(84.39%)
    }

    100% {
      transform: translateX(160.28%)
    }
  }

  @keyframes md-progress-bar-indeterminate-fill-alternate {
    0% {
      animation-timing-function: cubic-bezier(.15, 0, .52, .41);
      transform: scaleX(.08)
    }

    20% {
      animation-timing-function: cubic-bezier(.31, .28, .8, .73);
      transform: scaleX(.46)
    }

    45% {
      animation-timing-function: cubic-bezier(.4, .63, .6, .90);
      transform: scaleX(.73)
    }

    100% {
      transform: scaleX(.08)
    }
  }

  @keyframes md-progress-bar-buffer {
    to {
      transform: translate3D(-8px, 0, 0);
    }
  }

  .md-progress-bar {
    height: 5px;
    overflow: hidden;
    position: relative;
    transform: translateZ(0) scaleY(1);
    transform-origin: center center;
    transition: opacity .3s $md-transition-default-timing,
                transform .4s $md-transition-default-timing;
    will-change: opacity, transform;

    &.md-indeterminate,
    &.md-query {
      .md-progress-bar-track {
        left: -150%;
        animation: md-progress-bar-indeterminate-track 2s infinite linear;

        &:after {
          animation: md-progress-bar-indeterminate-track-alternate 2s infinite linear;
        }
      }

      .md-progress-bar-fill {
        left: -55%;
        animation: md-progress-bar-indeterminate-fill 2s infinite linear;

        &:after {
          animation: md-progress-bar-indeterminate-fill-alternate 2s infinite linear;
        }
      }
    }

    &.md-determinate,
    &.md-buffer {
      .md-progress-bar-fill,
      .md-progress-bar-track,
      .md-progress-bar-buffer {
        transition: .25s $md-transition-stand-timing;
      }
    }

    &.md-determinate {
      .md-progress-bar-track {
        display: none;
      }
    }

    &.md-buffer {
      .md-progress-bar-buffer {
        border-top: 4px dotted;
        animation: md-progress-bar-buffer .25s infinite linear;
      }
    }

    &.md-query {
      transform: rotateZ(180deg);
    }
  }

  .md-progress-bar-enter,
  .md-progress-bar-leave-active {
    opacity: .5;
    transform: translateZ(0) scaleY(0);
  }

  .md-progress-bar-buffer,
  .md-progress-bar-track,
  .md-progress-bar-fill {
    transform-origin: top left;

    &,
    &:after {
      width: 100%;
      height: 100%;
      position: absolute;
      will-change: transform;
    }

    &:after {
      display: inline-block;
      left: 0;
      content: " "
    }
  }
</style>
