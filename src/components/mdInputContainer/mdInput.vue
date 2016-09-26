<template>
  <input
    class="md-input"
    :type="type || 'text'"
    :value="value"
    :disabled="disabled"
    :required="required"
    :placeholder="placeholder"
    :maxlength="maxlength"
    @invalid="onInvalid"
    @valid="onValid"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
    @keydown.up="onInput"
    @keydown.down="onInput">
</template>

<script>
  let invalidClass = 'md-input-invalid';
  let disabledClass = 'md-input-disabled';
  let requiredClass = 'md-input-required';
  let placeholderClass = 'md-input-placeholder';
  let focusedClass = 'md-input-focused';
  let hasValueClass = 'md-has-value';

  let manageDisabledClass = (state, scope) => {
    if (state) {
      scope.add(disabledClass);
    } else {
      scope.remove(disabledClass);
    }
  };

  let manageRequiredClass = (required, scope) => {
    if (required) {
      scope.add(requiredClass);
    } else {
      scope.remove(requiredClass);
    }
  };

  let managePlaceholderClass = (placeholder, scope) => {
    if (placeholder) {
      scope.add(placeholderClass);
    } else {
      scope.remove(placeholderClass);
    }
  };

  let manageHasValueClass = function(value, scope) {
    if (value.length > 0) {
      scope.add(hasValueClass);
    } else {
      scope.remove(hasValueClass);
    }
  };

  let manageMaxlength = (length, parent) => {
    parent.enableCounter = +length > 0;
    parent.counterLength = +length;
  };

  export default {
    props: {
      type: String,
      value: [String, Number],
      disabled: Boolean,
      required: Boolean,
      maxlength: [String, Number],
      placeholder: [String, Number]
    },
    watch: {
      disabled(disabled) {
        manageDisabledClass(disabled, this.parentClasses);
      },
      required(required) {
        manageRequiredClass(required, this.parentClasses);
      },
      placeholder(placeholder) {
        managePlaceholderClass(placeholder, this.parentClasses);
      },
      maxlength(maxlength) {
        manageMaxlength(maxlength, this.$parent);
      }
    },
    methods: {
      onInvalid() {
        this.parentClasses.add(invalidClass);
      },
      onValid() {
        this.parentClasses.remove(invalidClass);
      },
      onFocus() {
        this.parentClasses.add(focusedClass);
      },
      onBlur() {
        this.parentClasses.remove(focusedClass);
        manageHasValueClass(this.$el.value, this.parentClasses);
      },
      onInput() {
        manageHasValueClass(this.$el.value, this.parentClasses);
        this.$parent.inputLength = this.$el.value.length;
        this.$emit('change', this.$el.value);
        this.$emit('input', this.$el.value);
      }
    },
    mounted() {
      if (!this.$parent.$el.classList.contains('md-input-container')) {
        this.$destroy();

        throw new Error('You should wrap the md-input in a md-input-container');
      }

      this.parentClasses = this.$parent.$el.classList;

      manageDisabledClass(this.disabled, this.parentClasses);
      manageRequiredClass(this.required, this.parentClasses);
      managePlaceholderClass(this.placeholder, this.parentClasses);
      manageHasValueClass(this.$el.value, this.parentClasses);
      manageMaxlength(this.maxlength, this.$parent);
    }
  };
</script>
