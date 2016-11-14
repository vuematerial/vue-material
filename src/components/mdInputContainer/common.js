export default {
  props: {
    value: [String, Number],
    disabled: Boolean,
    required: Boolean,
    maxlength: [String, Number],
    placeholder: [String, Number]
  },
  watch: {
    value() {
      this.setParentValue();
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
    setParentValue() {
      this.parentContainer.setValue(this.$el.value);
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
      this.setParentValue();
      this.parentContainer.inputLength = this.$el.value.length;
      this.$emit('change', this.$el.value);
      this.$emit('input', this.$el.value);
    }
  }
};
