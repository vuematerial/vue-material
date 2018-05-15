<template>
  <md-field :class="['md-datepicker', { 'md-native': !this.mdOverrideNative }]" md-clearable>
    <md-date-icon class="md-date-icon" @click.native="toggleDialog" />
    <md-input :type="type" ref="input" :value="modelDate" @input="onInput" @focus.native="onFocus" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" />

    <slot />

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
  </md-field>
</template>

<script>
  import Vue from 'vue'
  import isFirefox from 'is-firefox'
  import format from 'date-fns/format'
  import parse from 'date-fns/parse'
  import isValid from 'date-fns/is_valid'
  import MdOverlay from 'components/MdOverlay/MdOverlay'
  import MdDatepickerDialog from './MdDatepickerDialog'
  import MdDateIcon from 'core/icons/MdDateIcon'
  import MdDebounce from 'core/utils/MdDebounce'
  import MdField from 'components/MdField/MdField'
  import MdInput from 'components/MdField/MdInput/MdInput'

  export default {
    name: 'MdDatepicker',
    components: {
      MdOverlay,
      MdDateIcon,
      MdField,
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
      },
      MdDebounce: {
        type: Number,
        default: 1000
      }
    },
    data: () => ({
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
      onInput(value) {
        const parsedDate = parse(value)
        if (isValid(parsedDate)) {
          this.selectedDate = parsedDate
        }
      },
      toggleDialog () {
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
      this.onInput = MdDebounce(this.onInput, this.MdDebounce)
      this.modelDate = this.dateToHTMLString(this.value)
      this.selectedDate = this.value
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
    &.md-native {
      label {
        top: 0 !important;
      }
    }

    .md-date-icon {
      cursor: pointer;
    }

    input[type=date]::-webkit-clear-button,
    input[type=date]::-webkit-inner-spin-button,
    input[type=date]::-webkit-calendar-picker-indicator {
      display: none;
    }
  }
</style>
