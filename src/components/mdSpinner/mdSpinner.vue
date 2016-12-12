<template>
  <transition name="md-spinner" appear>
    <div class="md-spinner" :class="classes" :style="styles">
      <svg class="md-spinner-draw" viewBox="25 25 50 50">
        <circle class="md-spinner-path" cx="50" cy="50" r="20" :stroke-dasharray="dashProgress">
      </svg>
    </div>
  </transition>
</template>

<style lang="scss" src="./mdSpinner.scss"></style>

<script>
  export default {
    props: {
      mdSize: {
        type: Number,
        default: 50
      },
      mdIndeterminate: Boolean,
      mdProgress: {
        type: Number,
        default: 0
      }
    },
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
    },
    data: () => ({

    }),
    methods: {

    }
  };
</script>
