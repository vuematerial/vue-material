<template>
  <input
    class="md-input"
    :type="type || 'text'"
    :disabled="disabled"
    @invalid="onInvalid"
    @valid="onValid"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput">
</template>

<script>
  let validClass = 'md-input-valid';
  let invalidClass = 'md-input-invalid';
  let disabledClass = 'md-input-disabled';
  let focusedClass = 'md-input-focused';
  let hasValueClass = 'md-has-value';

  let manageDisabledClass = (state, scope) => {
    if (state) {
      scope.add(disabledClass);
    } else {
      scope.remove(disabledClass);
    }
  };

  let manageHasValueClass = function(value, scope) {
    if (value.length > 0) {
      scope.add(hasValueClass);
    } else {
      scope.remove(hasValueClass);
    }
  };

  export default {
    props: {
      disabled: Boolean,
      type: String
    },
    data() {
      return {
        parentClasses: this.$parent.$el.classList
      };
    },
    watch: {
      disabled(disabled) {
        manageDisabledClass(disabled, this.parentClasses);
      }
    },
    methods: {
      onInvalid() {
        this.parentClasses.remove(validClass);
        this.parentClasses.add(invalidClass);
      },
      onValid() {
        this.parentClasses.remove(invalidClass);
        this.parentClasses.add(validClass);
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
      manageDisabledClass(this.disabled, this.parentClasses);
      manageHasValueClass(this.$el.value, this.parentClasses);
    },
    beforeDestroy() {

    }
  };
</script>
