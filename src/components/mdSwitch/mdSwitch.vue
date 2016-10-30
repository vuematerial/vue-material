<template>
  <div class="md-switch" :class="classes">
    <div class="md-switch-container" @click="toggleSwitch">
      <div class="md-switch-thumb" :style="styles" v-md-ink-ripple="disabled">
        <input type="checkbox" :name="name" :id="id" :disabled="disabled" :value="value">
        <button class="md-switch-holder"></button>
      </div>
    </div>

    <label :for="id || name" class="md-switch-label" v-if="$slots.default">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./mdSwitch.scss"></style>

<script>
  export default {
    props: {
      name: String,
      value: Boolean,
      id: String,
      disabled: Boolean
    },
    computed: {
      classes() {
        return {
          'md-checked': Boolean(this.value),
          'md-disabled': this.disabled
        };
      }
    },
    methods: {
      toggleSwitch() {
        if (!this.disabled) {
          this.value = !this.value;
          this.$emit('change', this.value);
          this.$emit('input', this.value);
        }
      }
    }
  };
</script>
