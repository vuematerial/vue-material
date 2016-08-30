<template>
  <div class="md-switch" :class="classes">
    <div class="md-switch-container" @click="onClick">
      <!-- <div class="md-switch-thumb" :style="styles" v-md-ink-ripple="disabled" v-touch:panstart="onDragStart" v-touch:panmove="onDrag" v-touch:panend="onDragEnd" v-touch-options:pan="{ direction: 'horizontal' }"> -->
      <div class="md-switch-thumb" :style="styles" v-md-ink-ripple="disabled">
        <input type="checkbox" v-model="model" :name="name" :id="id" :disabled="disabled" :value="value">
      </div>
    </div>

    <label :for="id || name" class="md-switch-label" v-if="hasSlot">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./mdSwitch.scss"></style>

<script>
  let dragFrame;
  let fullThreshold = 75;
  let initialThreshold = '-1px';

  export default {
    props: {
      model: {
        type: Boolean,
        required: true,
        twoWay: true
      },
      name: String,
      id: String,
      disabled: Boolean
    },
    data() {
      return {
        hasSlot: true,
        leftPos: initialThreshold,
        percent: 0,
        dragging: false
      };
    },
    computed: {
      classes() {
        return {
          'md-checked': Boolean(this.model),
          'md-disabled': this.disabled,
          'md-dragging': this.dragging
        };
      },
      styles() {
        return {
          transform: `translate3D(${this.leftPos}, -50%, 0)`
        };
      }
    },
    watch: {
      model() {
        this.leftPos = this.model ? fullThreshold + '%' : initialThreshold;
      }
    },
    methods: {
      onClick() {
        if (!this.disabled && !this.dragging) {
          this.model = !this.model;
        }
      },
      onDragStart() {
        if (!this.disabled) {
          this.dragging = true;
        }
      },
      onDrag(event) {
        if (!this.disabled) {
          dragFrame = requestAnimationFrame(() => {
            let percent = 0;

            if (this.model) {
              percent = 20;
            }

            percent = Math.round((event.deltaX + percent) * 100 / 34);

            if (percent >= 0 && percent <= fullThreshold) {
              this.percent = percent;
              this.leftPos = percent + '%';
            }
          });
        }
      },
      onDragEnd() {
        if (!this.disabled) {
          setTimeout(() => {
            this.dragging = false;
          }, 50);

          this.model = this.percent >= fullThreshold / 2;
          this.leftPos = this.model ? fullThreshold + '%' : initialThreshold;
        }
      }
    },
    ready() {
      this.hasSlot = this.$el.querySelector('label').innerHTML.trim() !== '';
      this.leftPos = this.model ? fullThreshold + '%' : initialThreshold;
    },
    destroyed() {
      cancelAnimationFrame(dragFrame);
    }
  };
</script>
