<template>
  <div class="md-select" :class="classes">
    <md-menu :md-close-on-select="!multiple">
      <span class="md-select-value" md-menu-trigger ref="value">{{ selectedText || multipleText || placeholder }}</span>

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
  import isArray from '../../core/utils/isArray';

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
        selectedText: null,
        multipleText: null,
        multipleOptions: {},
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
    watch: {
      value(value) {
        this.setTextAndvalue(value);
      }
    },
    methods: {
      getSingleValue(value) {
        let output = {};

        Object.keys(this.options).forEach((index) => {
          const options = this.options[index];

          if (options.value === value) {
            output.value = value;
            output.text = options.$refs.item.textContent;
          }
        });

        return output;
      },
      getMultipleValue(modelValue) {
        if (isArray(this.value)) {
          let outputText = [];

          modelValue.forEach((value) => {
            Object.keys(this.options).forEach((index) => {
              const options = this.options[index];

              if (options.value === value) {
                let text = options.$refs.item.textContent;

                this.multipleOptions[index] = {
                  value,
                  text
                };
                outputText.push(text);
              }
            });
          });

          return {
            value: modelValue,
            text: outputText.join(', ')
          };
        }

        return {};
      },
      setTextAndvalue(modelValue) {
        const output = this.multiple ? this.getMultipleValue(modelValue) : this.getSingleValue(modelValue);

        this.selectedValue = output.value;
        this.selectedText = output.text;

        if (this.parentContainer) {
          this.$parent.setValue(output.text);
        }
      },
      changeValue(value) {
        this.$emit('input', value);
        this.$emit('change', value);
      },
      selectMultiple(index, value, text) {
        let values = [];

        this.multipleOptions[index] = {
          value,
          text
        };

        for (var key in this.multipleOptions) {
          if (this.multipleOptions.hasOwnProperty(key) && this.multipleOptions[key].value) {
            values.push(this.multipleOptions[key].value);
          }
        }

        this.changeValue(values);
      },
      selectOption(value, text) {
        this.selectedText = text;
        this.changeValue(value);
      }
    },
    mounted() {
      this.parentContainer = getClosestVueParent(this.$parent, 'md-input-container');

      this.setTextAndvalue(this.value);

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
