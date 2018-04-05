<template>
  <div :class="['md-datepicker']">
    <md-input
    :type="type"
    ref="input"
    v-model="modelDate"
    @focus.native="onFocus"
    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
    v-bind="{ disabled, required, placeholder }" />

    <keep-alive>
      <md-datepicker-dialog
        v-if="showDialog"
        :md-date.sync="selectedDate"
        :md-disabled-dates="mdDisabledDates"
        :mdImmediately="mdImmediately"
        @md-closed="toggleDialog"
      />
    </keep-alive>

    <md-overlay class="md-datepicker-overlay" md-fixed :md-active="showDialog" @click="toggleDialog" />
  </div>
</template>

<script>
  import Vue from 'vue'
  import isFirefox from 'is-firefox'
  import format from 'date-fns/format'
  import parse from 'date-fns/parse'
  import isValid from 'date-fns/is_valid'
  import MdOverlay from 'components/MdOverlay/MdOverlay'
  import MdDatepickerDialog from './MdDatepickerDialog'
  import MdInput from 'components/MdField/MdInput/MdInput'
  import MdFieldMixin from '../MdField/MdFieldMixin'

  export default {
    name: 'MdDatepicker',
    components: {
      MdOverlay,
      MdInput,
      MdDatepickerDialog
    },
    props: {
      value: [String, Date],
      mdDisabledDates: [Array, Function],
      mdOpenOnFocus: {
        type: Boolean,
        default: true
      },
      mdOverrideNative: {
        type: Boolean,
        default: true
      },
      mdImmediately: {
        type: Boolean,
        default: false
      }
    },
    mixins: [MdFieldMixin],
    inject: ['MdField'],
    data: () => ({
      triggerEl: null,
      showDialog: false,
      modelDate: null,
      selectedDate: null
    }),
    computed: {
      type () {
        return this.mdOverrideNative
          ? 'text'
          : 'date'
      }
    },
    watch: {
      mdOverrideNative: {
        immediate: true,
        handler () {
          this.MdField.native = !this.mdOverrideNative
        }
      },
      selectedDate (selectedDate) {
        if (selectedDate) {
          this.modelDate = this.dateToHTMLString(selectedDate)
          this.$emit('input', selectedDate)
        }
      },
      value () {
        if (this.value) {
          this.modelDate = this.dateToHTMLString(this.value)
        }
      },
      modelDate (value) {
        if (value) {
          const parsedDate = parse(value)

          if (isValid(parsedDate)) {
            this.selectedDate = parsedDate
          }
        } else {
          this.selectedDate = null
        }
      }
    },
    methods: {
      toggleDialog () {
        if(this.disabled || this.readonly) return

        if (!isFirefox || this.mdOverrideNative) {
          this.showDialog = !this.showDialog
          if (this.showDialog) {
            this.$emit('md-opened')
          } else {
            this.$emit('md-closed')
          }
        } else {
          this.$refs.input.$el.click()
        }
      },
      onFocus () {
        if (this.mdOpenOnFocus) {
          this.toggleDialog()
        }
      },
      dateToHTMLString (date) {
        if (date) {
          let formattedDate = null
          const dateFormat = this.$material.locale.dateFormat || 'YYYY-MM-DD'

          try {
            formattedDate = format(date, dateFormat)
          } catch (error) {
            Vue.util.warn(`The datepicker value is not a valid date. Given value: ${date}.`, this)
          }

          return formattedDate
        }
      }
    },
    created () {
      this.modelDate = this.dateToHTMLString(this.value)
      this.selectedDate = this.value

      this.MdField.date = true
    },
    mounted () {
      this.$nextTick().then(() => {
        this.triggerEl = this.MdField.$el.querySelector('[md-datepicker-trigger]')

        if (this.triggerEl) {
          this.triggerEl.addEventListener('click', this.toggleDialog)
        }
      })
    },
    beforeDestroy () {
      this.MdField.date = false

      if (this.triggerEl) {
        this.triggerEl.removeEventListener('click', this.toggleDialog)
      }
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";

  .md-datepicker-overlay {
    opacity: 0;

    @include md-layout-xsmall {
      opacity: 1;
    }
  }

  .md-datepicker {
    width: 100%;
    display: flex;

    input[type=date]::-webkit-clear-button,
    input[type=date]::-webkit-inner-spin-button,
    input[type=date]::-webkit-calendar-picker-indicator {
      display: none;
    }
  }

  .md-field{
    &.md-has-date {
      [md-datepicker-trigger] {
        cursor: pointer;
      }
    }
  }

  .md-field.md-field-bottom-line.md-has-date {
    &.md-native {
      &:not(.md-inline) {
        label {
          pointer-events: auto;
          top: 2px;
          opacity: 1;
          font-size: 12px;
        }
      }

      &.md-inline {
        label {
          opacity: 0;
        }
      }

      .md-prefix {
        display: block;
      }
    }
  }

  .md-field.md-field-box.md-has-date {
    &.md-native {
      &:not(.md-inline) {
        label {
          pointer-events: auto;
          top: 8px;
          opacity: 1;
          font-size: 12px;
        }

        .md-input {
          padding-top: 20px;
          padding-bottom: 1px;
        }

        .md-prefix,
        .md-suffix {
          padding-top: 20px;
        }
      }

      &.md-inline {
        label {
          opacity: 0;
        }
      }

      .md-prefix {
        display: block;
      }

      &.md-dense:not(.md-inline) {
        .md-input {
          padding-top: 16px;
          padding-bottom: 1px;
        }

        .md-prefix,
        .md-suffix {
          padding-top: 16px;
        }
      }
    }
  }

  .md-field.md-field-raised.md-has-date {
    &.md-native {
      &.md-inline {
        label {
          opacity: 0;
        }
      }

      .md-prefix {
        display: block;
      }
    }
  }
</style>
