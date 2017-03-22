<template>
  <div class="md-rating-bar" :class="[themeClass]" :disabled="disabled">
    <div class="md-back-stars" :disabled="disabled">
      <md-icon v-for="i in mdNumStars"
               @mouseover.native="hoverStars"
               @click.native="clickStars"
               @mouseout.native="onMouseOut">{{ mdBackIcon }}</md-icon>
    </div>
    <div class="md-front-stars" :style="frontStarsStyle">
      <md-icon v-for="i in mdNumStars"
               @mouseover.native="hoverStars"
               @click.native="clickStars"
               @mouseout.native="onMouseOut">{{ mdFrontIcon }}</md-icon>
    </div>
  </div>
</template>

<style lang="scss" src="./mdRatingBar.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  let iconSize = 24;//size of each icon from rating bar in pixels

  export default {
    props: {
      mdNumStars: {
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
      },
      mdFrontIcon: {
        type: String,
        default: 'star'
      },
      mdBackIcon: {
        type: String,
        default: 'star'
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
          'margin-left': -iconSize * this.mdNumStars + 'px'
        };
      }
    },
    watch: {
      value() {
        this.rating = this.value;
      }
    },
    methods: {
      hoverStars(evt) {
        if (!this.disabled) {
          this.rating = this.getIconIndex(evt.target) / this.mdNumStars;
        }
      },
      clickStars(evt) {
        if (!this.disabled) {
          var selected = this.getIconIndex(evt.target);

          this.$emit('input', selected / this.mdNumStars);
          this.$emit('change', selected / this.mdNumStars);
        }
      },
      getIconIndex(iconSelected) {//icon is a dom element
        let ratingIcons = this.$el.querySelectorAll('.md-back-stars > .md-icon, .md-front-stars > .md-icon');
        let selected = -1;

        ratingIcons = Array.prototype.slice.call(ratingIcons);
        ratingIcons.some((icon, i) => {//find index
          if (icon === iconSelected) {
            selected = (i + 1) % this.mdNumStars;
            selected = !selected ? this.mdNumStars : selected;
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
