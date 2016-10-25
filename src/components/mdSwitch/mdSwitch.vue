<template>
  <div class="md-switch" :class="classes">
    <div class="md-switch-container" @click="toggleSwitch">
      <div class="md-switch-thumb" :style="styles" v-md-ink-ripple="disabled">
        <input type="checkbox" :name="name" :id="id" :disabled="disabled" :value="value">
        <button :type="type" class="md-switch-holder"></button>
      </div>
    </div>

    <label :for="id || name" class="md-switch-label" v-if="$slots.default">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./mdSwitch.scss"></style>

<script>
  let fullThreshold = 75;
  let initialThreshold = '-1px';

  export default {
    props: {
      name: String,
      value: Boolean,
      id: String,
      disabled: Boolean,
      type: {
        type: String,
        default: 'button'
      }
    },
    data() {
      return {
        leftPos: initialThreshold,
        checked: this.value
      };
    },
    computed: {
      classes() {
        return {
          'md-checked': Boolean(this.value),
          'md-disabled': this.disabled
        };
      },
      styles() {
        return {
          transform: `translate3D(${this.leftPos}, -50%, 0)`
        };
      }
    },
    watch: {
      checked() {
        this.leftPos = this.value ? fullThreshold + '%' : initialThreshold;
      }
    },
    methods: {
      toggleSwitch() {
        if (!this.disabled) {
          this.checked = !this.checked;
          this.$emit('change', this.checked);
          this.$emit('input', this.checked);
        }
      }
    },
    mounted() {
      this.leftPos = this.value ? fullThreshold + '%' : initialThreshold;
    }
  };
</script>
