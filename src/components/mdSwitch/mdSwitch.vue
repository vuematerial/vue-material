<template>
  <div class="md-switch" :class="classes">
    <div class="md-switch-container" v-on:click="toggleSwitch">
      <div class="md-switch-thumb" v-md-ink-ripple="disabled">
        <input type="checkbox" :name="name" :id="id" :disabled="disabled" v-model="realValue">
        <button class="md-switch-holder"></button>
      </div>
    </div>

    <label :for="id || name" class="md-switch-label" v-if="$slots.default" v-on:click="toggleSwitch">
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
    data() {
      return {
        realValue: !!this.value
      };
    },
    computed: {
      classes() {
        return {
          'md-checked': this.realValue,
          'md-disabled': this.disabled
        };
      }
    },
    watch: {
      value(newValue) {
        this.realValue = newValue;
      }
    },
    methods: {
      toggleSwitch() {
        if (!this.disabled) {
          this.realValue = !this.realValue;
          this.$emit('change', this.value);
          this.$emit('input', this.value);
        }
      }
    }
  };
</script>
