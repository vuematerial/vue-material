<template>
  <div class="md-checkbox" :class="classes">
    <div class="md-checkbox-container" @click="toggleCheck" v-md-ink-ripple="disabled">
      <input type="checkbox" :name="name" :id="id" :disabled="disabled" :checked="isChecked">
    </div>

    <label :for="id || name" class="md-checkbox-label" v-if="hasSlot">
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
      checked: Boolean,
      disabled: Boolean
    },
    data() {
      return {
        hasSlot: true,
        isChecked: this.checked
      };
    },
    computed: {
      classes() {
        return {
          'md-checked': Boolean(this.isChecked),
          'md-disabled': this.disabled
        };
      }
    },
    methods: {
      toggleCheck() {
        if (!this.disabled) {
          this.isChecked = !this.isChecked;
          this.$emit('change', this.isChecked);
        }
      }
    },
    mounted() {
      this.hasSlot = this.$el.querySelector('label').innerHTML.trim() !== '';
    }
  };
</script>
