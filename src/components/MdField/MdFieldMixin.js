export default {
  props: {
    value: [String, Number],
    placeholder: String,
    maxlength: [String, Number],
    readonly: Boolean,
    required: Boolean,
    disabled: Boolean
  },
  inject: ['state'],
  data () {
    return {
      content: this.value || null
    }
  },
  computed: {
    clear () {
      return this.state.clear
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
      this.setStateValue()
      this.$emit('input', '')
    },
    setStateValue () {
      this.state.value = this.content
    },
    setPlaceholder () {
      this.state.placeholder = Boolean(this.placeholder)
    },
    setDisabled () {
      this.state.disabled = Boolean(this.disabled)
    },
    setRequired () {
      this.state.required = Boolean(this.required)
    },
    setMaxlength () {
      this.state.maxlength = parseInt(this.maxlength, 10)
    },
    onFocus () {
      this.state.focused = true
    },
    onBlur () {
      this.state.focused = false
    },
    onInput () {
      this.setStateValue()
    }
  },
  created () {
    this.setStateValue()
    this.setPlaceholder()
    this.setDisabled()
    this.setRequired()
    this.setMaxlength()
  }
}
