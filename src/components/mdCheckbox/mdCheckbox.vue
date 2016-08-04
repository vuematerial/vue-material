<template>
  <div class="md-checkbox" :class="classes">
    <div class="md-checkbox-container" @click="toggleCheck" v-md-ink-ripple>
      <input type="checkbox" v-model="model" :name="name" :id="id" :disabled="disabled" :value="value">

      <md-icon>check</md-icon>
    </div>

    <label :for="id || name" class="md-checkbox-label">
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
      id: String,
      disabled: Boolean
    },
    computed: {
      classes() {
        return {
          'md-checked': Boolean(this.model)
        };
      }
    },
    methods: {
      toggleCheck() {
        this.model = !this.model;
      }
    },
    ready() {

    }
  };
</script>
