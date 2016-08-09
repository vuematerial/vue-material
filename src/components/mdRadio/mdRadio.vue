<template>
  <div class="md-radio" :class="classes">
    <div class="md-radio-container" @click="toggleCheck" v-md-ink-ripple="disabled">
      <input type="radio" v-model="model" :name="name" :id="id" :disabled="disabled" :value="value">
    </div>

    <label :for="id || name" class="md-radio-label" v-if="hasSlot">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss" src="./mdRadio.scss"></style>

<script>
  export default {
    props: {
      model: {
        required: true,
        twoWay: true
      },
      name: String,
      value: {
        type: [String, Boolean],
        required: true
      },
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
          'md-checked': this.model && this.value && this.model.toString() === this.value.toString(),
          'md-disabled': this.disabled
        };
      }
    },
    methods: {
      toggleCheck() {
        if (!this.disabled) {
          this.model = this.value;
        }
      }
    },
    ready() {
      this.hasSlot = this.$el.querySelector('label').innerHTML.trim() !== '';
    }
  };
</script>
