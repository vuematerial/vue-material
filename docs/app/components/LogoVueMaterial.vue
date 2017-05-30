<template>
  <md-svg-loader class="logo-vue-material" :class="{ blending }" md-src="assets/logo.svg" />
</template>

<style lang="scss">
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/factory";

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

    .first-square {
      animation: $timer first-cycle linear infinite paused;
      transition: $md-transition-stand;
    }

    .last-square {
      animation: $timer last-cycle linear infinite paused;
      transition: $md-transition-default;
    }
  }
</style>

<script>
  import MdSvgLoader from 'vue-material/core/MdSvgLoader'

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

          if (firstSquare) {
            firstSquare.setAttribute('transform', 'translate(80.5 344)')
            lastSquare.setAttribute('transform', 'translate(0 -346)')

            window.setTimeout(() => {
              firstSquare.setAttribute('transform', 'translate(80.5 138)')
              lastSquare.setAttribute('transform', 'translate(0 0)')
            }, 500)
          }
        }
      }
    }
  }
</script>
