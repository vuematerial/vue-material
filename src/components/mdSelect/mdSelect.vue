<template>
  <div class="md-select" :class="classes">
    <md-menu :md-close-on-select="!multiple">
      <span class="md-select-value" md-menu-trigger ref="value">{{ selectedValue || multiplevalue || placeholder }}</span>

      <md-menu-content class="md-select-content" :class="contentClasses">
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
      multiple: Boolean,
      value: [String, Number, Array],
      id: String,
      disabled: Boolean,
      placeholder: String,
      mdMenuClass: String
    },
    data() {
      return {
        selectedValue: null,
        multiplevalue: null,
        options: {},
        optionsAmount: 0
      };
    },
    computed: {
      classes() {
        return {
          'md-disabled': this.disabled
        };
      },
      contentClasses() {
        if (this.multiple) {
          return 'md-multiple ' + this.mdMenuClass;
        }

        return this.mdMenuClass;
      }
    },
    methods: {
      changeValue(value, parentValue, changed) {
        if (changed) {
          this.$emit('change', value);
        }

        if (this.parentContainer) {
          this.$parent.setValue(parentValue || value);
        }
      },
      selectMultiple(index, value, text) {
        let output = [];
        let values = [];

        this.options[index] = {
          value,
          text
        };

        for (var key in this.options) {
          if (this.options.hasOwnProperty(key) && this.options[key].text) {
            output.push(this.options[key].text);
            values.push(this.options[key].value);
          }
        }

        this.multiplevalue = output.join(', ');
        this.changeValue(values, this.multiplevalue);
      },
      selectOption(value, text, changed) {
        this.selectedValue = text;
        this.changeValue(value, null, changed);
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
