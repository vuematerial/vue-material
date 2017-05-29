<template>
  <md-svg-loader class="logo-vue-material" md-src="assets/logo.svg" @md-loaded="svgLoaded" />
</template>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/factory";

  .logo-vue-material {
    $colors: green, lightblue, lightgreen, blue, purple, cyan, red, bluegrey;
    $length: length($colors);
    $factor: 100 / $length;
    $counter: $factor;

    @keyframes cycle-big {
      @each $color, $item in $colors {
        #{$counter}% {
          fill: md-get-palette-color($color, 800);
        }

        $counter: $counter + $factor;
      }

      $counter: $factor;
    }

    @keyframes cycle-small {
      @each $color, $item in $colors {
        #{$counter}% {
          fill: md-get-palette-color($color, A200);
        }

        $counter: $counter + $factor;
      }
    }

    &:hover {
      use {
        animation-play-state: running !important;
      }
    }

    $timer: $length * 1s;

    use {
      &:first-of-type {
        animation: $timer cycle-big linear infinite paused;
        transition: $md-transition-stand;
      }

      &:last-of-type {
        animation: $timer cycle-small linear infinite paused;
        transition: $md-transition-default;
      }
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
    methods: {
      svgLoaded () {
        const small = this.$el.querySelector('#small-m')
        const big = this.$el.querySelector('#big-m')

        if (small) {
          small.setAttribute('transform', 'translate(80.5 344)')
          big.setAttribute('transform', 'translate(0 -346)')

          window.setTimeout(() => {
            small.setAttribute('transform', 'translate(80.5 138)')
            big.setAttribute('transform', 'translate(0 0)')
          }, 500)
        }
      }
    }
  }
</script>
