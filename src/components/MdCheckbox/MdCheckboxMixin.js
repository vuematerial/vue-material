import MdRipple from 'components/MdRipple/MdRipple'

export default {
  components: {
    MdRipple
  },
  props: {
    model: [String, Boolean, Object, Number, Array],
    value: {
      type: [String, Boolean, Object, Number],
    },
    name: [String, Number],
    required: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  model: {
    prop: 'model',
    event: 'change'
  },
  data: () => ({
    rippleActive: false
  }),
  computed: {
    attrs () {
      const attrs = {
        id: this.id,
        name: this.name,
        disabled: this.disabled,
        required: this.required,
        'true-value': this.trueValue,
        'false-value': this.falseValue
      }

      if (this.$options.propsData.hasOwnProperty('value')) {
        if (this.value === null || typeof this.value !== 'object') {
          attrs.value = (this.value === null || this.value === undefined) ? '' : String(this.value)
        }
      }

      return attrs
    },
    isSelected () {
      if (this.isModelArray) {
        return this.model.includes(this.value)
      }

      if (this.hasValue) {
        return this.model === this.value
      }

      return this.model === this.trueValue
    },
    isModelArray () {
      return Array.isArray(this.model)
    },
    checkClasses () {
      return {
        'md-checked': this.isSelected,
        'md-disabled': this.disabled,
        'md-required': this.required,
        'md-indeterminate': this.indeterminate
      }
    },
    hasValue () {
      return this.$options.propsData.hasOwnProperty('value')
    }
  },
  methods: {
    removeItemFromModel (newModel) {
      const index = newModel.indexOf(this.value)

      if (index !== -1) {
        newModel.splice(index, 1)
      }
    },
    handleArrayCheckbox () {
      const newModel = this.model

      if (!this.isSelected) {
        newModel.push(this.value)
      } else {
        this.removeItemFromModel(newModel)
      }

      this.$emit('change', newModel)
    },
    handleSingleSelectCheckbox () {
      this.$emit('change', this.isSelected ? null : this.value)
    },
    handleSimpleCheckbox () {
      this.$emit('change', this.isSelected ? this.falseValue : this.trueValue)
    },
    toggleCheck () {
      if (!this.disabled) {
        this.rippleActive = true

        if (this.isModelArray) {
          this.handleArrayCheckbox()
        } else if (this.hasValue) {
          this.handleSingleSelectCheckbox()
        } else {
          this.handleSimpleCheckbox()
        }
      }
    }
  }
}
