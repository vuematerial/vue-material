<template>
  <div class="md-checkbox" :class="classes">
    <div class="md-checkbox-container" @click="toggleCheck" v-md-ink-ripple="disabled">
      <input type="checkbox" :name="name" :id="id" :disabled="disabled" :value="value">
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
      disabled: Boolean
    },
    data() {
      return {
        hasSlot: true,
        isChecked: this.value
      };
    },
    computed: {
      checked() {
        return this.value;
      },
      classes() {
        return {
          'md-checked': Boolean(this.checked),
          'md-disabled': this.disabled
        };
      }
    },
    methods: {
      toggleCheck() {
        if (!this.disabled) {
          this.isChecked = !this.isChecked;
          this.$emit('change', this.isChecked);
          this.$emit('input', this.isChecked);
        }
      }
    },
    mounted() {
      if (this.value) {
        this.isChecked = true;
      }

      this.hasSlot = this.$el.querySelector('label').innerHTML.trim() !== '';
    }
  };
</script>
