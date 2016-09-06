<template>
  <div class="md-checkbox" :class="classes">
    <div class="md-checkbox-container" @click="toggleCheck" v-md-ink-ripple="disabled">
      <input type="checkbox" :name="name" :id="id" :disabled="disabled" :value="value">
    </div>

    <label :for="id || name" class="md-checkbox-label" v-if="$slots.default">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./mdCheckbox.scss"></style>

<script>
  export default {
    props: {
      name: String,
      value: [String, Boolean],
      id: String,
      disabled: Boolean
    },
    data() {
      return {
        checked: this.value
      };
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
      toggleCheck() {
        if (!this.disabled) {
          this.checked = !this.checked;
          this.$emit('change', this.checked);
          this.$emit('input', this.checked);
        }
      }
    }
  };
</script>
