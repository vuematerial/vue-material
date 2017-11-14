<template>
  <md-svg-loader class="logo-vue-material" :class="{ blending }" md-src="/assets/logo.svg" @md-loaded="svgLoaded" />
</template>

<style lang="scss">
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/engine";

  .logo-vue-material {
    $hue1: blue, red, pink, green, indigo, amber;
    $hue2: lightgreen, yellow, cyan, lightblue, purple, teal;
    $length: length($hue1);
    $factor: 100 / $length;
    $counter: 0;

    @keyframes first-cycle {
      @each $color, $item in $hue1 {
        #{$counter}% {
          fill: md-get-palette-color($color, A200);
        }

        $counter: $counter + $factor;
      }

      100% {
        fill: md-get-palette-color(orange, A200);
      }

      $counter: 0;
    }

    @keyframes last-cycle {
      @each $color, $item in $hue2 {
        #{$counter}% {
          fill: md-get-palette-color($color, A200);
        }

        $counter: $counter + $factor;
      }

      100% {
        fill: md-get-palette-color(lime, A200);
      }
    }

    &:hover {
      path {
        animation-play-state: running !important;
      }
    }

    $timer: $length * 1s;

    &.blending {
      svg {
        mix-blend-mode: overlay;
      }

      .last-square {
        mix-blend-mode: overlay;
      }

      .middle-square {
        display: none;
      }
    }

    $transition-square: .6s .5s $md-transition-stand-timing;

    .first-square {
      animation: $timer first-cycle linear infinite paused;
      transition: $transition-square;
    }

    .last-square {
      animation: $timer last-cycle linear infinite paused;
      transition: $transition-square;
    }
  }
</style>

<script>
import MdSvgLoader from 'vue-material/components/MdSvgLoader/MdSvgLoader'

export default {
  name: 'LogoVueMaterial',
  components: {
    MdSvgLoader
  },
  props: {
    animated: Boolean,
    blending: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    svgLoaded () {
      if (this.animated) {
        const firstSquare = this.$el.querySelector('.first-square')
        const lastSquare = this.$el.querySelector('.last-square')

        firstSquare.setAttribute('transform', 'translate(48 0)')
        lastSquare.setAttribute('transform', 'translate(-48 0)')

        window.setTimeout(() => {
          firstSquare.setAttribute('transform', 'translate(0 0)')
          lastSquare.setAttribute('transform', 'translate(0 0)')
        }, 10)
      }
    }
  }
}
</script>
