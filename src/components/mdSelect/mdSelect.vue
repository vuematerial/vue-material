<template>
  <div
    class="md-select"
    :class="[themeClass, classes]">
    <md-menu
      :md-close-on-select="!multiple"
      @open="onOpen"
      @close="$emit('closed')"
      v-bind="mdMenuOptions">
      <slot name="icon"></slot>
      <span
        class="md-select-value"
        md-menu-trigger
        ref="value"
        :style="valueStyle">
        {{ selectedText || placeholder }}
      </span>

      <md-menu-content
        class="md-select-content"
        :class="[themeClass, contentClasses]">
        <slot></slot>
      </md-menu-content>
    </md-menu>

    <select
      :name="name"
      :id="id"
      :required="required"
      :disabled="disabled"
      tabindex="-1">
      <option
        selected="true"
        :value="selectedValue"
        v-if="!multiple">
        {{ selectedText }}
      </option>
      <option
        v-if="option.value"
        v-for="(option, index) in multipleOptions"
        :key="index"
        selected="true"
        :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" src="./mdSelect.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';
  import isArray from '../../core/utils/isArray';

  export default {
    name: 'md-select',
    props: {
      name: String,
      id: String,
      required: Boolean,
      multiple: Boolean,
      value: [String, Boolean, Number, Array],
      disabled: Boolean,
      placeholder: String,
      mdMenuClass: String,
      mdMenuOptions: Object
    },
    mixins: [theme],
    data() {
      return {
        lastSelected: null,
        selectedValue: null,
        selectedText: null,
        multipleOptions: {},
        options: {},
        optionsAmount: 0
      };
    },
    computed: {
      classes() {
        return {
          'md-disabled': this.disabled,
          'md-select-icon': this.hasIcon
        };
      },
      contentClasses() {
        if (this.multiple) {
          return 'md-multiple ' + this.mdMenuClass;
        }

        return this.mdMenuClass;
      },
      hasIcon() {
        return this.$slots['icon'];
      },
      valueStyle() {
        return this.hasIcon ? {
          display: 'none'
        } : {};
      }
    },
    watch: {
      value(value) {
        this.setTextAndValue(value);

        if (this.multiple) {
          this.selectOptions(value);
        }
      },
      disabled() {
        this.setParentDisabled();
      },
      required() {
        this.setParentRequired();
      },
      placeholder() {
        this.setParentPlaceholder();
      }
    },
    methods: {
      changeValue(value) {
        this.$emit('input', value);
        this.$emit('change', value);
        this.$emit('selected', value);
      },
      getSingleValue(value) {
        let output = {};

        Object.keys(this.options).forEach((index) => {
          const options = this.options[index];

          if (options.value === value) {
            output.value = value;
            output.text = options.$refs.item.textContent,
              output.el = options.$refs.item;
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
      onOpen() {
        if (this.lastSelected) {
          this.lastSelected.scrollIntoViewIfNeeded(true);
        }

        this.$emit('opened');
      },
      removeChild(index) {
        this.optionsAmount--;
        const selection = Object.assign({}, this.options[index]);
  
        delete this.options[index];
        delete this.multipleOptions[index];

        if (this.multiple) {
          const element = this.selectedValue.find((el) => el.name === selection.$refs.item.textContent.trim());
          const selectionIndex = this.selectedValue.indexOf(element);

          if (selectionIndex !== -1) {
            this.selectedValue.splice(selectionIndex, 1);
          }
        }
      },
      setParentDisabled() {
        this.parentContainer.isDisabled = this.disabled;
      },
      setParentRequired() {
        this.parentContainer.isRequired = this.required;
      },
      setParentPlaceholder() {
        this.parentContainer.hasPlaceholder = !!this.placeholder;
      },
      selectOptions(modelValue) {
        const optionsArray = Object.keys(this.options).map((el) => this.options[el]);

        if (optionsArray && optionsArray.length) {
          let selectedOptions = optionsArray.filter((el) => modelValue.includes(el.value));
          let unselectedOptions = optionsArray.filter((el) => !modelValue.includes(el.value));
  
          selectedOptions
            .forEach((el) => {
              el.check = true;
            });
          unselectedOptions
            .forEach((el) => {
              el.check = false;
            });
        }
      },
      setTextAndValue(modelValue) {
        const output = this.multiple ?
          this.getMultipleValue(modelValue) :
          this.getSingleValue(modelValue);

        this.selectedValue = output.value;
        this.selectedText = output.text;
        this.lastSelected = output.el;

        if (this.parentContainer) {
          this.parentContainer.setValue(this.selectedText);
        }
      },
      selectMultiple(index, value, text) {
        this.$nextTick(() => {
          let values = [];

          this.multipleOptions[index] = {
            value,
            text
          };

          for (let key in this.multipleOptions) {
            if (this.multipleOptions.hasOwnProperty(key) && this.multipleOptions[key].value) {
              values.push(this.multipleOptions[key].value);
            }
          }

          this.changeValue(values);
        });
      },
      selectOption(value, text, el) {
        this.lastSelected = el;
        this.selectedText = text;
        this.setTextAndValue(value);
        this.changeValue(value);
      }
    },
    mounted() {
      this.parentContainer = getClosestVueParent(this.$parent, 'md-input-container');

      if (this.parentContainer) {
        this.setParentDisabled();
        this.setParentRequired();
        this.setParentPlaceholder();
        this.parentContainer.hasSelect = true;
      }

      this.setTextAndValue(this.value);
    },
    beforeDestroy() {
      if (this.parentContainer) {
        this.parentContainer.setValue('');
        this.parentContainer.hasSelect = false;
      }
    }
  };
</script>
