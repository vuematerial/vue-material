<template>
  <div class="md-datepicker">

    <slot />

    <keep-alive>
      <md-datepicker-dialog :md-date.sync="selectedDate" :md-disabled-dates="mdDisabledDates" v-if="showDialog" @md-closed="toggleDialog" />
    </keep-alive>

    <md-overlay class="md-datepicker-overlay" md-fixed :md-active="showDialog" @click="toggleDialog" />
  </div>
</template>

<script>
  import Vue from 'vue'
  import parse from 'date-fns/parse'
  import isValid from 'date-fns/is_valid'
  import MdOverlay from 'components/MdOverlay/MdOverlay'
  import MdDatepickerDialog from './MdDatepickerDialog'

  export default {
    name: 'MdDatepicker',
    components: {
      MdOverlay,
      MdDatepickerDialog
    },
    props: {
      value: [String, Date],
      mdDisabledDates: [Array, Function]
    },
    data: () => ({
      showDialog: false,
      selectedDate: null
    }),
    watch: {
      selectedDate (selectedDate) {
        if (selectedDate) {
          this.$emit('input', selectedDate)
        }
      }
    },
    methods: {
      toggleDialog () {
        this.showDialog = !this.showDialog
      }
    },
    created () {
      this.selectedDate = this.value
    },
    mounted () {
      this.$nextTick().then(() => {
        this.triggerEl = this.$el.querySelector('[md-datepicker-trigger]')

        if (this.triggerEl) {
          this.triggerEl.addEventListener('click', this.toggleDialog)
        }
      })
    },
    beforeDestroy () {
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
    [md-datepicker-trigger] {
      cursor: pointer;
    }

    input[type=date]::-webkit-clear-button,
    input[type=date]::-webkit-inner-spin-button,
    input[type=date]::-webkit-calendar-picker-indicator {
      display: none;
    }
  }
</style>
