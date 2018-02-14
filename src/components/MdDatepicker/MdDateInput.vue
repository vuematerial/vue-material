<template>
  <div :class="['md-date-input', { 'md-native': !this.mdOverrideNative }]">
    <md-input
    :type="type"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="disabled"
    :required="required"
    ref="input"
    v-model="modelDate"
    @focus.native="onFocus"
    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" />

    <keep-alive>
      <md-datepicker-dialog :md-date.sync="selectedDate" :md-disabled-dates="mdDisabledDates" v-if="showDialog" @md-closed="toggleDialog" />
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
    name: 'MdDateInput',
    components: {
      MdOverlay,
      MdInput,
      MdDatepickerDialog
    },
    mixins: [MdFieldMixin],
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
      }
    },
    inject: ['MdField'],
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
        }
      }
    },
    methods: {
      toggleDialog () {
        if(this.disabled || this.readonly) return

        if (!isFirefox || this.mdOverrideNative) {
          this.showDialog = !this.showDialog
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
    },
    mounted () {
      this.MdField.native = !this.mdOverrideNative
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

  .md-field {
    &.md-native {
      label {
        top: 0 !important;
      }
    }
  }

  .md-date-input {
    width: 100%;
    display: flex;



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
