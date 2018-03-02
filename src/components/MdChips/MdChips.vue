<template>
  <div class="md-chips" :class="[$mdActiveTheme, chipsClasses]">
    <slot />

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
      :disabled="disabled"
      :readonly="readonly || mdStatic"
      :placeholder="mdPlaceholder"
      @input="handleInput"
      @keydown.enter="insertChip"
      @keydown.8="handleBackRemove"
      @focus="onFocus"
      @blur="onBlur" />
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
    mixins: [MdFieldMixin],
    inject: ['MdField'],
    components: {
      MdField,
      MdInput
    },
    props: {
      id: {
        type: [String, Number],
        default: () => 'md-chips-' + MdUuid()
      },
      mdInputType: {
        type: [String, Number],
        ...MdPropValidator('md-input-type', ['email', 'number', 'password', 'search', 'tel', 'text', 'url'])
      },
      mdPlaceholder: [String, Number],
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
        return !this.mdLimit || this.value.length < this.mdLimit
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
      insertChip ({ target }) {
        let isArray = Array.isArray(this.localValue)
        if(!isArray) this.localValue = []

        let inputValue = this.formattedInputValue

        if (!inputValue || !this.modelRespectLimit) {
          return
        }

        if (this.localValue.includes(inputValue)) {
          this.duplicatedChip = null
          // to trigger animate
          this.$nextTick(() => {
            this.duplicatedChip = inputValue
          })
          return
        }

        this.localValue.push(inputValue)
        this.$emit('md-insert', inputValue)
        this.setFieldValue(this.value)
        this.inputValue = ''
      },
      removeChip (chip) {
        const index = this.localValue.indexOf(chip)

        this.localValue.splice(index, 1)
        this.$emit('md-delete', chip, index)
        this.setFieldValue(this.value)
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
      },
      setTyping () {
        this.MdField.typing = this.hasInputValue
      }
    },
    watch: {
      value () {
        this.checkDuplicated()
      },
      hasInputValue () {
        this.setTyping()
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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    transition: $md-transition-stand;
    transition-property: padding-top, padding-bottom;

    .md-chip {
      margin-bottom: 4px;

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
      padding-top: 12px;

      .md-input {
        height: 36px;
        padding: 0;
      }
    }

    > .md-icon {
      ~ {
        .md-chips {
          padding-left: 36px;
        }
      }
    }

    &.md-focused,
    &.md-has-value {
      label {
        top: 0px;
      }
    }

    &.md-inline {
      min-height: 36px;
      margin-top: 8px;

      label {
        top: 10px;
      }

      .md-chips {
        padding-top: 0;
      }

      &.md-focused,
      &.md-has-value {
        label {
          top: 10px;
          font-size: 16px;
        }
      }

      &.md-typing {
        label {
          opacity: 0;
        }
      }
    }
  }

  .md-field.md-has-chips.md-field-bottom-line.md-dense {
    > .md-icon {
      ~ {
        .md-chips {
          padding-left: 32px;
        }
      }
    }

    &.md-focused,
    &.md-has-value {
      label {
        top: 0px;
      }
    }

    &.md-inline {
      min-height: 36px;
      margin-top: 8px;

      label {
        top: 14px;
      }


      &.md-focused,
      &.md-has-value {
        label {
          top: 14px;
          font-size: 13px;
        }
      }
    }
  }

  .md-field.md-has-chips.md-field-box {
    .md-chips {
      padding: 20px 16px 0;

      .md-input {
        height: 32px;
        padding: 0;
      }
    }

    > .md-icon {
      ~ {
        .md-chips {
          padding-left: 56px;
        }
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

      &.md-focused,
      &.md-has-value {
        .md-chips {
          padding-top: 20px;
          padding-bottom: 1px;

          .md-input {
            height: 32px;
            padding: 0;
          }
        }
      }
    }

    &.md-focused,
    &.md-has-value {
      label {
        top: 6px;
      }
    }

    &.md-inline {
      .md-chips {
        padding-top: 12px;
      }

      &.md-focused,
      &.md-has-value {
        label {
          top: 20px;
          font-size: 16px;
        }
      }

      &.md-typing {
        label {
          opacity: 0;
        }
      }
    }
  }

  .md-field.md-has-chips.md-field-box.md-dense {
    min-height: 57px;

    > .md-icon {
      ~ {
        .md-chips {
          padding-left: 50px;
        }
      }
    }

    &.md-inline {
      label {
        top: 21px;
      }

      &.md-focused,
      &.md-has-value {
        label {
          top: 21px;
          font-size: 13px;
        }
      }
    }
  }

  .md-field.md-has-chips.md-field-raised {
    min-height: 48px;

    .md-chips {
      padding: 8px 16px 4px;

      .md-input {
        height: 32px;
        padding: 0;
      }
    }

    > .md-icon {
      ~ {
        .md-chips {
          padding-left: 56px;
        }
      }
    }

    &.md-typing {
      label {
        opacity: 0;
      }
    }
  }

  .md-field.md-has-chips.md-field-raised.md-dense {
    min-height: 48px;

    > .md-icon {
      ~ {
        .md-chips {
          padding-left: 48px;
        }
      }
    }
  }
</style>
