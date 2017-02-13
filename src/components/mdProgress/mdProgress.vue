<template>
  <transition name="md-progress" appear>
    <div class="md-progress" :class="[themeClass, classes]">
      <div class="md-progress-track" :style="styles"></div>
    </div>
  </transition>
</template>

<style lang="scss" src="./mdProgress.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    name: 'md-progress',
    props: {
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
        if (!this.mdIndeterminate) {
          return {
            width: this.mdProgress + '%'
          };
        }
      }
    }
  };
</script>
