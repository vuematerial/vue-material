<template>
  <div class="md-select" :class="classes">
    <div class="md-select-value">
      <select v-model="model" :name="name" :id="id" :disabled="disabled" :value="value">
        <option v-for="option in selectedOptions" :value="option.value">{{ options.text }}</option>
      </select>
    </div>

    <div class="md-select-menu">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" src="./mdSelect.scss"></style>

<script>
  export default {
    props: {
      model: {
        type: [String, Array, Boolean],
        required: true,
        twoWay: true
      },
      value: String,
      name: String,
      id: String,
      disabled: Boolean
    },
    data() {
      return {
        selectedOptions: []
      };
    },
    computed: {
      classes() {
        return {
          'md-disabled': this.disabled
        };
      }
    },
    ready() {

    }
  };
</script>
