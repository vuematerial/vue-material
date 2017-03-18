<template>
  <div class="md-rating-bar" :class="[themeClass]" :disabled="disabled">
    <div class="back-stars" :disabled="disabled">
      <md-icon v-for="i in numStars" :key="i"
               @mouseover.native="hoverStars"
               @click.native="clickStars"
               @mouseout.native="onMouseOut">star</md-icon>
    </div>
    <div class="front-stars" :style="frontStarsStyle">
      <md-icon v-for="i in numStars"
               @mouseover.native="hoverStars"
               @click.native="clickStars"
               @mouseout.native="onMouseOut">star</md-icon>
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
      disabled: Boolean,
      value: {
        type: Number,
        validator: (value) => {
          return value >= 0 && value <= 1;
        },
        default: 0
      }
    },
    mixins: [theme],
    data: () => ({
      rating: NaN
    }),
    mounted: function() {
      this.rating = this.value;
    },
    computed: {
      frontStarsStyle() {
        return {
          width: 100 * this.rating + '%',
          'margin-left': -iconSize * this.numStars + 'px'
        };
      }
    },
    watch: {
      value(val) {
        this.rating = this.value;
      }
    },
    methods: {
      hoverStars(evt) {
        if (!this.disabled) {
          var selected = this.getIconIndex(evt.target);

          this.rating = selected / this.numStars;
        }
      },
      clickStars(evt) {
        if (!this.disabled) {
          var selected = this.getIconIndex(evt.target);

          this.$emit('input', selected / this.numStars);
        }
      },
      getIconIndex(iconSelected) {//icon is a dom element
        let ratingIcons = this.$el.querySelectorAll('.back-stars > .md-icon, .front-stars > .md-icon');
        let selected = -1;

        ratingIcons = Array.prototype.slice.call(ratingIcons);
        ratingIcons.some((icon, i) => {//find index
          if (icon === iconSelected) {
            selected = (i + 1) % this.numStars;
            selected = !selected ? this.numStars : selected;
            return true;
          }
        });

        return selected;
      },
      onMouseOut() {
        this.rating = this.value;
      }
    }
  };
</script>
