export default {
  props: {
    value: [String, Number],
    debounce: {
      type: Number,
      default: 3E2
    },
    disabled: Boolean,
    required: Boolean,
    maxlength: [Number, String],
    name: String,
    placeholder: String
  },
  data() {
    return {
      timeout: 0
    };
  },
  watch: {
    value(value) {
      this.setParentValue(value);
      this.updateValues(value);
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
    lazyEventEmitter() {
      if (this.timeout) {
        window.clearTimeout(this.timeout);
      }
      this.timeout = window.setTimeout(() => {
        this.$emit('change', this.$el.value);
        this.$emit('input', this.$el.value);
      }, this.debounce);
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
    updateValues(value) {
      const newValue = value || this.$el.value || this.value;

      this.setParentValue(newValue);
      this.parentContainer.inputLength = newValue ? newValue.length : 0;
    },
    onFocus() {
      if (this.parentContainer) {
        this.parentContainer.isFocused = true;
      }
    },
    onBlur() {
      this.parentContainer.isFocused = false;
      this.setParentValue();
    },
    onInput() {
      this.updateValues();
      this.lazyEventEmitter();
    }
  }
};
