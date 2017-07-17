export default {
  props: {
    value: [String, Number],
    placeholder: String,
    maxlength: [String, Number],
    readonly: Boolean,
    required: Boolean,
    disabled: Boolean
  },
  data () {
    return {
      content: this.value || null
    }
  },
  computed: {
    clear () {
      return this.MdField.clear
    }
  },
  watch: {
    clear (clear) {
      if (clear) {
        this.clearField()
      }
    },
    placeholder () {
      this.setPlaceholder()
    },
    disabled () {
      this.setDisabled()
    },
    required () {
      this.setRequired()
    },
    maxlength () {
      this.setMaxlength()
    }
  },
  methods: {
    clearField () {
      this.$el.value = ''
      this.content = ''
      this.setFieldValue()
      this.$emit('input', '')
    },
    setLabelFor () {
      const label = this.$el.parentNode.querySelector('label')

      if (label) {
        const forAttribute = label.getAttribute('for')

        if (!forAttribute || forAttribute.indexOf('md-') >= 0) {
          label.setAttribute('for', this.id)
        }
      }
    },
    setFieldValue () {
      this.MdField.value = this.content
    },
    setPlaceholder () {
      this.MdField.placeholder = Boolean(this.placeholder)
    },
    setDisabled () {
      this.MdField.disabled = Boolean(this.disabled)
    },
    setRequired () {
      this.MdField.required = Boolean(this.required)
    },
    setMaxlength () {
      this.MdField.maxlength = parseInt(this.maxlength, 10)
    },
    onFocus () {
      this.MdField.focused = true
    },
    onBlur () {
      this.MdField.focused = false
    },
    onInput () {
      this.setFieldValue()
    }
  },
  created () {
    this.setFieldValue()
    this.setPlaceholder()
    this.setDisabled()
    this.setRequired()
    this.setMaxlength()
  },
  mounted () {
    this.setLabelFor()
  }
}
