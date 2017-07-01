import MdUuid from 'core/MdUuid'

export default {
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
      default: 'md-field-' + MdUuid()
    },
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
  watch: {
    placeholder () {
      this.setPlaceholder()
    },
    disabled () {
      this.setDisabled()
    }
  },
  methods: {
    setStateValue () {
      this.state.value = this.content
    },
    setPlaceholder () {
      this.state.placeholder = Boolean(this.placeholder)
    },
    setDisabled () {
      this.state.disabled = Boolean(this.disabled)
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
  }
}
