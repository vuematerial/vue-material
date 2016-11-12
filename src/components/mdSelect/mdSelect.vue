<template>
  <div class="md-select" :class="classes">
    <md-menu>
      <span class="md-select-value" md-menu-trigger ref="value">{{ text }}</span>

      <md-menu-content class="md-select-content">
        <slot></slot>
      </md-menu-content>
    </md-menu>

    <select :name="name" :id="id" :required="required" tabindex="-1">
      <option :value="value">{{ value }}</option>
    </select>
  </div>
</template>

<style lang="scss" src="./mdSelect.scss"></style>

<script>
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    props: {
      name: String,
      required: Boolean,
      value: [String, Number],
      id: String,
      disabled: Boolean
    },
    data() {
      return {
        text: null,
        optionsAmount: 0
      };
    },
    computed: {
      classes() {
        return {
          'md-disabled': this.disabled
        };
      }
    },
    methods: {
      selectOption(value, text) {
        if (this.parentContainer) {
          this.$parent.setValue(value);
        }

        this.text = text;
        this.$emit('change', value);
        this.$emit('input', value);
      }
    },
    mounted() {
      this.parentContainer = this.parentContent = getClosestVueParent(this.$parent, 'md-input-container');

      if (this.parentContainer) {
        this.parentContainer.setValue(this.value);
        this.parentContainer.hasSelect = true;
      }
    },
    beforeDestroy() {
      if (this.parentContainer) {
        this.parentContainer.setValue('');
        this.parentContainer.hasSelect = false;
      }
    }
  };
</script>
