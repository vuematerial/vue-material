export default {
  props: {
    value: [String, Number],
    disabled: Boolean,
    required: Boolean,
    maxlength: [Number, String],
    placeholder: String
  },
  watch: {
    value(value) {
      this.setParentValue(value);
    },
    disabled() {
      this.setParentDisabled();
    },
    required() {
      this.setParentRequired();
    },
    placeholder() {
      this.setParentPlaceholder();
    },
    maxlength() {
      this.handleMaxLength();
    }
  },
  methods: {
    handleMaxLength() {
      this.parentContainer.enableCounter = this.maxlength > 0;
      this.parentContainer.counterLength = this.maxlength;
    },
    setParentValue(value) {
      this.parentContainer.setValue(value || this.$el.value);
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
    onFocus() {
      this.parentContainer.isFocused = true;
    },
    onBlur() {
      this.parentContainer.isFocused = false;
      this.setParentValue();
    },
    onInput() {
      const value = this.$el.value;

      this.setParentValue();
      this.parentContainer.inputLength = value ? value.length : 0;
      this.$emit('change', value);
      this.$emit('input', value);
    }
  }
};
