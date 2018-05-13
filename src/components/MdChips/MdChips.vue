<template>
  <div class="md-chips" :class="[$mdActiveTheme, chipsClasses]">

    <md-chip
      v-for="(chip, key) in value"
      :key="chip"
      :md-deletable="!isStatic"
      :md-clickable="!isStatic"
      :md-duplicated="duplicatedChip === chip"
      @keydown.enter="$emit('md-click', chip, key)"
      @click.native="$emit('md-click', chip, key)"
      @md-delete.stop="removeChip(chip)">
      <slot name="md-chip" :chip="chip" v-if="$scopedSlots['md-chip']">{{ chip }}</slot>
      <template v-else>{{ chip }}</template>
    </md-chip>

    <input
      class="md-input"
      ref="input"
      v-model.trim="inputValue"
      v-if="!isStatic && modelRespectLimit"
      :type="mdInputType"
      :id="id"
      :placeholder="placeholder"
      @input="handleInput"
      @focus="onFocus"
      @blur="onBlur"
      @keydown.enter="insertChip"
      @keydown.8="handleBackRemove" />
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdField from 'components/MdField/MdField'
  import MdInput from 'components/MdField/MdInput/MdInput'
  import MdUuid from 'core/utils/MdUuid'
  import MdPropValidator from 'core/utils/MdPropValidator'
  import MdFieldMixin from '../MdField/MdFieldMixin'

  export default new MdComponent({
    name: 'MdChips',
    components: {
      MdField,
      MdInput
    },
    props: {
      value: Array,
      id: {
        type: [String, Number],
        default: () => 'md-chips-' + MdUuid()
      },
      mdInputType: {
        type: [String, Number],
        ...MdPropValidator('md-input-type', ['email', 'number', 'password', 'search', 'tel', 'text', 'url'])
      },
      mdStatic: Boolean,
      mdLimit: Number,
      mdCheckDuplicated: {
        type: Boolean,
        default: false
      },
      mdFormat: {
        type: Function
      }
    },
    mixins: [MdFieldMixin],
    inject: ['MdField'],
    data: () => ({
      inputValue: '',
      duplicatedChip: null
    }),
    computed: {
      chipsClasses () {
        return {
          'md-has-value': this.value && this.value.length
        }
      },

      modelRespectLimit () {
        return !this.mdLimit || this.value.length < this.MdField.maxlength
      },

      formattedInputValue () {
        if (!this.mdFormat) {
          return this.inputValue
        }
        return this.mdFormat(this.inputValue)
      },

      stringInputValue () {
        return (this.inputValue || this.inputValue === 0) && this.inputValue.toString()
      },

      hasInputValue () {
        return this.stringInputValue && this.stringInputValue.length > 0
      },

      isStatic () {
        return this.disabled || this.readonly || this.mdStatic
      }
    },
    methods: {
      clearField () {
        this.inputValue = ''
        this.model = []
        this.setFieldValue()
      },
      setMaxlength () {
        if (this.mdLimit) {
          this.MdField.maxlength = parseInt(this.mdLimit, 10)
        } else if (this.mdCounter) {
          this.MdField.counter = parseInt(this.mdCounter, 10)
        } else {
          this.MdField.maxlength = parseInt(this.maxlength, 10)
        }
      },
      insertChip ({ target }) {
        let isArray = Array.isArray(this.localValue)
        if(!isArray) this.localValue = []

        let inputValue = this.formattedInputValue

        if (!inputValue || !this.modelRespectLimit) {
          return
        }

        if (this.value.includes(inputValue)) {
          this.duplicatedChip = null
          // to trigger animate
          this.$nextTick(() => {
            this.duplicatedChip = inputValue
          })
          return
        }

        this.localValue.push(inputValue)
        this.setFieldValue(this.value)
        this.$emit('md-insert', inputValue)
        this.inputValue = ''
      },
      removeChip (chip) {
        const index = this.localValue.indexOf(chip)

        this.localValue.splice(index, 1)
        this.setFieldValue(this.value)
        this.$emit('md-delete', chip, index)
        this.$nextTick(() => this.$refs.input.focus())
      },
      handleBackRemove () {
        if (!this.inputValue) {
          this.removeChip(this.value[this.value.length - 1])
        }
      },
      handleInput () {
        if (this.mdCheckDuplicated) {
          this.checkDuplicated()
        } else {
          this.duplicatedChip = null
        }
      },
      checkDuplicated () {
        if (!this.value.includes(this.formattedInputValue)) {
          this.duplicatedChip = null
          return false
        }

        if (!this.mdCheckDuplicated) {
          return false
        }

        this.duplicatedChip = this.formattedInputValue
      }
    },
    watch: {
      mdLimit () {
        this.setMaxlength()
      },
      hasInputValue () {
        this.MdField.typing = this.hasInputValue
      },
      value () {
        this.checkDuplicated()
      }
    },
    created () {
      this.MdField.chips = true
    },
    beforeDestroy () {
      this.MdField.chips = false
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-chips {
    flex-wrap: wrap;
    flex: 1;
    display: flex;
    transition: $md-transition-stand;
    transition-property: padding-top, padding-bottom;

    &.md-has-value {
      label {
        top: -6px;
      }
    }

    .md-chip {
      margin: 2px 4px 2px 0;

      &:last-of-type {
        margin-right: 8px;
      }
    }

    .md-input {
      min-width: 128px;
    }
  }

  .md-field.md-has-chips.md-field-bottom-line {
    .md-chips {
      .md-input {
        height: 36px;
        line-height: 36px;
      }
    }

    label {
      margin-top: 2px;
    }

    > .md-icon {
      margin-top: 8px;
    }

    &:not(.md-inline) {
      padding-top: 12px;

      &.md-typing {
        label {
          pointer-events: auto;
          font-size: 12px;
          opacity: 1;
        }
      }

      &.md-typing,
      &.md-focused,
      &.md-has-value {
        label {
          top: -4px;
        }
      }
    }

    &.md-inline {
      &.md-has-placeholder,
      &.md-typing {
        label {
          opacity: 0;
        }
      }
    }
  }

  .md-field.md-has-chips.md-field-box {
    .md-chips {
      padding: 20px 0 0;

      .md-input {
        height: 36px;
        padding: 0;
      }
    }

    &.md-has-placeholder {
      .md-chips {
        padding-top: 10px;
        padding-bottom: 10px;

        .md-input {
          height: 36px;
          padding: 0;
        }
      }

      &.md-typing,
      &.md-focused,
      &.md-has-value {
        .md-chips {
          padding-top: 20px;
          padding-bottom: 0;

          .md-input {
            height: 36px;
            padding: 0;
          }
        }
      }
    }

    &.md-typing {
      label {
        pointer-events: auto;
        opacity: 1;
        font-size: 12px;
      }
    }

    &.md-typing,
    &.md-focused,
    &.md-has-value {
      label {
        top: 6px;
      }

      .md-input,
      .md-textarea {
        font-size: 16px;
      }

      .md-prefix,
      .md-suffix {
        padding-top: 20px;
      }
    }

    &.md-inline {
      .md-chips {
        padding-top: 10px;
      }

      &.md-typing,
      &.md-focused,
      &.md-has-value {
        label {
          top: 20px;
          font-size: 16px;
        }

        .md-chips {
          padding-top: 10px;
          padding-bottom: 10px;

          .md-input {
            height: 36px;
            padding: 0;
          }
        }

        .md-prefix,
        .md-suffix {
          padding-top: 0;
        }
      }

      &.md-typing {
        label {
          opacity: 0;
        }
      }

      &.md-has-placeholder {
        label {
          opacity: 0;
        }
      }
    }
  }

  .md-field.md-has-chips.md-field-raised {
    min-height: 48px;

    .md-chips {
      .md-input {
        height: 36px;
        line-height: 36px;
        padding: 0;
      }
    }
  }

  .md-field.md-has-chips.md-field-raised.md-dense {
    min-height: 48px;
  }
</style>
