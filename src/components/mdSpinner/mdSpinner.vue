<template>
  <transition name="md-spinner" appear>
    <div class="md-spinner" :class="[themeClass, classes]":style="styles">
      <svg class="md-spinner-draw" viewBox="25 25 50 50">
        <circle class="md-spinner-path" cx="50" cy="50" r="20" :stroke-width="mdStroke" :stroke-dasharray="dashProgress"></circle>
      </svg>
    </div>
  </transition>
</template>

<style lang="scss" src="./mdSpinner.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-spinner',
    props: {
      mdSize: {
        type: Number,
        default: 50
      },
      mdStroke: {
        type: Number,
        default: 3.5
      },
      mdIndeterminate: Boolean,
      mdProgress: {
        type: Number,
        default: 0
      }
    },
    mixins: [theme],
    computed: {
      classes() {
        return {
          'md-indeterminate': this.mdIndeterminate
        };
      },
      styles() {
        const newSize = this.mdSize + 'px';

        return {
          width: newSize,
          height: newSize
        };
      },
      dashProgress() {
        let progress = this.mdProgress * 125 / 100;

        if (this.mdIndeterminate) {
          return false;
        }

        if (progress >= 125) {
          progress = 130;
        }

        return `${progress}, 200`;
      }
    }
  };
</script>
