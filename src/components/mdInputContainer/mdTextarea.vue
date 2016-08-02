<template>
  <textarea
    class="md-input"
    :disabled="disabled"
    @invalid="onInvalid"
    @valid="onValid"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"></textarea>
</template>

<script>
  import autosize from 'autosize';

  let invalidClass = 'md-input-invalid';
  let disabledClass = 'md-input-disabled';
  let requiredClass = 'md-input-required';
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

  let manageHasValueClass = function(value, scope) {
    if (value.length > 0) {
      scope.add(hasValueClass);
    } else {
      scope.remove(hasValueClass);
    }
  };

  let manageMaxlength = (length, parent) => {
    parent.enableCounter = length > 0;
    parent.counterLength = length;
  };

  export default {
    props: {
      type: String,
      disabled: Boolean,
      required: Boolean,
      maxlength: String
    },
    data() {
      return {
        parentClasses: this.$parent.$el.classList
      };
    },
    watch: {
      disabled(disabled) {
        manageDisabledClass(disabled, this.parentClasses);
      },
      required(required) {
        manageRequiredClass(required, this.parentClasses);
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
      }
    },
    ready() {
      if (!this.$parent.$el.classList.contains('md-input-container')) {
        this.$destroy();

        throw new Error('You should wrap the md-textarea in a md-input-container');
      }

      manageDisabledClass(this.disabled, this.parentClasses);
      manageRequiredClass(this.required, this.parentClasses);
      manageHasValueClass(this.$el.value, this.parentClasses);
      manageMaxlength(this.maxlength, this.$parent);

      if (!this.$el.getAttribute('rows')) {
        this.$el.setAttribute('rows', '1');
      }

      autosize(this.$el);
    },
    beforeDestroy() {
      autosize.destroy(this.$el);
    }
  };
</script>
