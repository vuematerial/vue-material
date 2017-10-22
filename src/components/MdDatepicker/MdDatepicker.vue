<template>
  <md-field class="md-datepicker">
    <md-date-icon class="md-date-icon" @click.native="toggleDialog" />
    <md-input type="date" ref="input" v-model="modelDate" @focus="onFocus" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" />

    <slot />

    <keep-alive>
      <md-datepicker-dialog :md-date.sync="selectedDate" v-if="showDialog" @md-closed="toggleDialog" />
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
      mdOpenOnFocus: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      showDialog: false,
      modelDate: null,
      selectedDate: null
    }),
    watch: {
      selectedDate () {
        this.modelDate = this.dateToHTMLString(this.selectedDate)
        this.$emit('input', this.selectedDate)
      },
      value () {
        this.modelDate = this.dateToHTMLString(this.value)
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
        if (!isFirefox) {
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
        let formattedDate = null

        try {
          formattedDate = format(date, 'YYYY-MM-DD')
        } catch (error) {
          Vue.util.warn(`The datepicker value is not a valid date. Given value: ${date}.`, this)
        }

        return formattedDate
      }
    },
    created () {
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
    transition: .3s $md-transition-default-timing;

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
