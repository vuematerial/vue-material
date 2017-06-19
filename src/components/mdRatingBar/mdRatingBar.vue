<template>
  <div class="md-rating-bar" :class="[themeClass]" :disabled="disabled">
    <div class="md-empty-icon" v-if="srcEmptyIcon">
      <md-icon
        v-if="srcEmptyIcon"
        v-for="i in mdMaxRating"
        :key="i"
        @mouseover.native="hoverStars"
        @click.native="clickStars"
        @mouseout.native="onMouseOut"
        :md-src="srcEmptyIcon"
        :class="[iconClasses]"/>
    </div>
    <div class="md-empty-icon" v-else>
      <md-icon
        v-for="i in mdMaxRating"
        :key="i"
        :md-iconset="mdEmptyIconset"
        @mouseover.native="hoverStars"
        @click.native="clickStars"
        @mouseout.native="onMouseOut"
        :class="[iconClasses]"
        v-html="emptyIcon"/>
    </div>

    <div class="md-full-icon" :style="fullIconStyle" v-if="srcFullIcon">
      <md-icon
        v-if="srcFullIcon"
        v-for="i in mdMaxRating"
        :key="i"
        @mouseover.native="hoverStars"
        @click.native="clickStars"
        @mouseout.native="onMouseOut"
        :md-src="srcFullIcon"
        :class="[iconClasses]"/>
    </div>
    <div class="md-full-icon" :style="fullIconStyle" v-else>
      <md-icon
        v-for="i in mdMaxRating"
        :key="i"
        :md-iconset="mdFullIconset"
        @mouseover.native="hoverStars"
        @click.native="clickStars"
        @mouseout.native="onMouseOut"
        :class="[iconClasses]"
        v-html="fullIcon"/>
    </div>
  </div>
</template>

<style lang="scss" src="./mdRatingBar.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  let iconSize = 24;//size of each icon from rating bar in pixels

  export default {
    props: {
      mdMaxRating: {
        type: Number,
        default: 5
      },
      disabled: Boolean,
      value: {
        type: Number,
        default: 0
      },
      mdIconSize: {
        type: Number,
        default: 1
      },
      mdFullIconset: String,
      mdEmptyIconset: String,
      mdFullIcon: {
        type: String,
        default: 'star'
      },
      mdEmptyIcon: {
        type: String,
        default: 'star'
      }
    },
    mixins: [theme],
    data() {
      return {
        srcFullIcon: null,
        srcEmptyIcon: null,
        rating: this.value
      };
    },
    mounted: function() {
      this.srcFullIcon = this.checkSrc(this.mdFullIcon);
      this.srcEmptyIcon = this.checkSrc(this.mdEmptyIcon);
    },
    computed: {
      emptyIcon() {
        if (this.mdEmptyIconset) {
          return '';
        }

        return this.mdEmptyIcon;
      },
      fullIcon() {
        if (this.mdFullIconset) {
          return '';
        }

        return this.mdFullIcon;
      },
      iconClasses() {
        let classes = {};

        if (this.mdIconSize) {
          classes[`md-size-${this.mdIconSize}x`] = true;
        }

        return classes;
      },
      fullIconStyle() {
        return {
          width: 100 / this.mdMaxRating * this.rating + '%',
          'margin-left': -iconSize * this.mdIconSize * this.mdMaxRating + 'px'
        };
      }
    },
    watch: {
      mdFullIcon() {
        this.srcFullIcon = this.checkSrc(this.mdFullIcon);
      },
      mdEmptyIcon() {
        this.srcEmptyIcon = this.checkSrc(this.mdEmptyIcon);
      },
      value() {
        this.rating = this.value;
      }
    },
    methods: {
      hoverStars(evt) {
        if (!this.disabled) {
          this.rating = this.getIconIndex(evt.currentTarget);
          this.$emit('hover', this.rating);
        }
      },
      clickStars(evt) {
        if (!this.disabled) {
          var selected = this.getIconIndex(evt.currentTarget);

          this.$emit('input', selected);
          this.$emit('change', selected);
        }
      },
      getIconIndex(iconSelected) {//iconSelected is a dom element
        let ratingIcons = this.$el.querySelectorAll('.md-empty-icon > .md-icon, .md-full-icon > .md-icon');
        let selected = -1;

        ratingIcons = Array.prototype.slice.call(ratingIcons);
        //find index from iconSelected
        ratingIcons.some((icon, i) => {
          if (icon === iconSelected) {
            selected = (i + 1) % this.mdMaxRating;
            selected = !selected ? this.mdMaxRating : selected;
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
