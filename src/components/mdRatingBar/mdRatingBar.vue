<template>
  <div class="md-rating-bar" :class="[themeClass]" :disabled="disabled">
    <div class="back-stars" :disabled="disabled">
      <md-icon v-for="i in numStars">star</md-icon>
    </div>
    <div class="front-stars" :style="frontStarsStyle">
      <md-icon v-for="i in numStars" class="md-accent">star</md-icon>
    </div>
  </div>
</template>

<style lang="scss" src="./mdRatingBar.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  let iconSize = 24;//size of each icon from rating bar in pixels

  export default {
    props: {
      numStars: {
        type: Number,
        default: 5
      },
      rating: {
        type: Number,
        default: 0
      },
      disabled: Boolean
    },
    mixins: [theme],
    computed: {
      frontStarsStyle() {
        return {
          width: 100 * this.rating + '%',
          'margin-left': -iconSize * this.numStars + 'px'
        };
      }
    }
  };
</script>
