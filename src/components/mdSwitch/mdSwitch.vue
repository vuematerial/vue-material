<template>
  <div class="md-switch">
    <input type="checkbox" :name="name" :id="id" :disabled="disabled" :value="selectedValue" v-model="checked" >
    <div class="md-switch-container">
      <div class="md-switch-thumb" v-md-ink-ripple>
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
      value: {
        type: [Array, Boolean, Number],
        required: true
      },
      disabled: {
        required: false
      },
      id: String,
      name: String,
      selectedValue: {
        required: false
      }
    },
    data: function() {
      return {
        checked: null
      };
    },
    beforeMount: function() {
      this.checked = this.value;
    },
    watch: {
      value: function(value) {
        this.checked = value;
      },
      checked: function(value) {
        this.$emit('input', value);
      }
    }
  };
</script>
