<template>
  <div class="md-switch" :class="classes" @click="toggleSwitch">
    <div class="md-switch-container">
      <div class="md-switch-thumb" v-md-ink-ripple="disabled">
        <input type="checkbox" :name="name" :id="id" :disabled="disabled" v-model="realValue">
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
    data: () => ({
      realValue: !!this.value
    }),
    computed: {
      classes() {
        return {
          'md-checked': this.value,
          'md-disabled': this.disabled
        };
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
