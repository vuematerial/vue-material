<template>
  <div class="md-checkbox" :class="classes">
    <div class="md-checkbox-container" @click="toggleCheck" v-md-ink-ripple="disabled">
      <input type="checkbox" v-model="model" :name="name" :id="id" :disabled="disabled" :value="value">
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
      model: {
        type: Boolean,
        required: true,
        twoWay: true
      },
      name: String,
      value: String,
      id: String,
      disabled: Boolean
    },
    data() {
      return {
        hasSlot: true
      };
    },
    computed: {
      classes() {
        return {
          'md-checked': Boolean(this.model),
          'md-disabled': this.disabled
        };
      }
    },
    methods: {
      toggleCheck() {
        if (!this.disabled) {
          this.model = !this.model;
        }
      }
    },
    ready() {
      this.hasSlot = this.$el.querySelector('label').innerHTML.trim() !== '';
    }
  };
</script>
