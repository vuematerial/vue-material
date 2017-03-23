<template>
  <div class="md-rating-bar" :class="[themeClass]" :disabled="disabled">
    <div class="md-back-stars" v-if="srcBackIcon">
      <md-icon v-for="i in mdNumStars"
               @mouseover.native="hoverStars"
               @click.native="clickStars"
               @mouseout.native="onMouseOut"
               :md-src="srcBackIcon"
               v-if="srcBackIcon"></md-icon>
    </div>
    <div class="md-back-stars" v-else>
      <md-icon v-for="i in mdNumStars"
               :md-iconset="mdBackIconset"
               @mouseover.native="hoverStars"
               @click.native="clickStars"
               @mouseout.native="onMouseOut"
               v-html="backIcon"></md-icon>
    </div>

    <div class="md-front-stars" :style="frontStarsStyle" v-if="srcFrontIcon">
      <md-icon v-for="i in mdNumStars"
               @mouseover.native="hoverStars"
               @click.native="clickStars"
               @mouseout.native="onMouseOut"
               :md-src="srcFrontIcon"
               v-if="srcFrontIcon"></md-icon>
    </div>
    <div class="md-front-stars" :style="frontStarsStyle" v-else>
      <md-icon v-for="i in mdNumStars"
               :md-iconset="mdFrontIconset"
               @mouseover.native="hoverStars"
               @click.native="clickStars"
               @mouseout.native="onMouseOut"
               v-html="frontIcon"></md-icon>
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
      mdFrontIconset: String,
      mdBackIconset: String,
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
    data() {
      return {
        srcFrontIcon: null,
        srcBackIcon: null,
        rating: this.value
      };
    },
    mounted: function() {
      this.srcFrontIcon = this.checkSrc(this.mdFrontIcon);
      this.srcBackIcon = this.checkSrc(this.mdBackIcon);
    },
    computed: {
      backIcon() {
        if (this.mdBackIconset) {
          return '';
        }

        return this.mdBackIcon;
      },
      frontIcon() {
        if (this.mdFrontIconset) {
          return '';
        }

        return this.mdFrontIcon;
      },
      frontStarsStyle() {
        return {
          width: 100 * this.rating + '%',
          'margin-left': -iconSize * this.mdNumStars + 'px'
        };
      }
    },
    watch: {
      mdFrontIcon() {
        this.srcFrontIcon = this.checkSrc(this.mdFrontIcon);
      },
      mdBackIcon() {
        this.srcBackIcon = this.checkSrc(this.mdBackIcon);
      },
      value() {
        this.rating = this.value;
      }
    },
    methods: {
      hoverStars(evt) {
        if (!this.disabled) {
          this.rating = this.getIconIndex(evt.currentTarget) / this.mdNumStars;
        }
      },
      clickStars(evt) {
        if (!this.disabled) {
          var selected = this.getIconIndex(evt.currentTarget);

          this.$emit('input', selected / this.mdNumStars);
          this.$emit('change', selected / this.mdNumStars);
        }
      },
      getIconIndex(iconSelected) {//iconSelected is a dom element
        let ratingIcons = this.$el.querySelectorAll('.md-back-stars > .md-icon, .md-front-stars > .md-icon');
        let selected = -1;

        ratingIcons = Array.prototype.slice.call(ratingIcons);
        //find index from iconSelected
        ratingIcons.some((icon, i) => {
          if (icon === iconSelected) {
            selected = (i + 1) % this.mdNumStars;
            selected = !selected ? this.mdNumStars : selected;
            return true;
          }
        });

        return selected;
      },
      checkSrc(src) {
        if (src && (/.+\.(svg|png)/).test(src)) {//check if src is a image source
          return src;
        }

        return null;
      },
      onMouseOut() {
        this.rating = this.value;
      }
    }
  };
</script>
