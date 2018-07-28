export default {
  props: {
    value: {},
    placeholder: String,
    name: String,
    maxlength: [String, Number],
    readonly: Boolean,
    required: Boolean,
    disabled: Boolean,
    mdCounter: [String, Number]
  },
  data () {
    return {
      sentValue: '',
      textareaHeight: false
    }
  },
  computed: {
    model: {
      get () {
        return this.localValue
      },
      set (value) {
        if (value.constructor.toString().match(/function (\w*)/)[1].toLowerCase() !== 'inputevent') {
          this.sentValue = value
          this.$emit('input', value) // needed for autofill support
        }
      }
    },
    clear () {
      return this.MdField.clear
    },
    attributes () {
      return {
        ...this.$attrs,
        type: this.type,
        id: this.id,
        name: this.name,
        disabled: this.disabled,
        required: this.required,
        placeholder: this.placeholder,
        readonly: this.readonly,
        maxlength: this.maxlength
      }
    },
    localValue: {
      get () {
        if ( this.value === undefined ) {  // support not having v-model set
          return this.sentValue
        } else if ( this.sentValue !== this.value ) {
          this.sentValue = this.value
          this.$emit('input', this.value) // needed for upstreamChange test
        }

        return this.value
      },
      // DEPRECATED: use model instead
      set (value) {
        this.model = value
      }
    }
  },
  watch: {
    model () {
      this.setFieldValue()
    },
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
    },
    mdCounter () {
      this.setMaxlength()
    }
  },
  methods: {
    clearField () {
      this.$el.value = ''
      this.model = ''
      this.setFieldValue()
    },
    setLabelFor () {
      if (this.$el.parentNode) {
        const label = this.$el.parentNode.querySelector('label')

        if (label) {
          const forAttribute = label.getAttribute('for')

          if (!forAttribute || forAttribute.indexOf('md-') >= 0) {
            label.setAttribute('for', this.id)
          }
        }
      }
    },
    setFieldValue () {
      this.$nextTick().then(() => {
        this.MdField.value = this.model
      })
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
      if (this.mdCounter) {
        this.MdField.counter = parseInt(this.mdCounter, 10)
      } else {
        this.MdField.maxlength = parseInt(this.maxlength, 10)
      }
    },
    onFocus () {
      this.MdField.focused = true
    },
    onBlur () {
      this.MdField.focused = false
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
