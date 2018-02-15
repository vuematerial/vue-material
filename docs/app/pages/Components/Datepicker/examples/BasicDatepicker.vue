<template>
  <div>
    <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <md-field>
        <md-icon @click.native="toggleDialog">event</md-icon>
        <md-date-input ref="input" v-model="selectedDate" />
      </md-field>
    </div>
    <div class="md-layout-item">
      <md-datepicker v-model="selectedDate1" >
        <md-button md-datepicker-trigger class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>
        <label>{{ selectedDate1Formatted }}</label>
      </md-datepicker>
    </div>

  </div>

    <md-field>
      <label for="movie">First day of a week</label>
      <md-select v-model="firstDayOfAWeek">
        <md-option value="0">Sunday</md-option>
        <md-option value="1">Monday</md-option>
      </md-select>
      <span class="md-helper-text">This config is global.</span>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'BasicDatepicker',
    data: () => ({
      selectedDate: null,
      selectedDate1: null
    }),
    computed: {
      firstDayOfAWeek: {
        get () {
          return this.$material.locale.firstDayOfAWeek
        },
        set (val) {
          this.$material.locale.firstDayOfAWeek = val
        }
      },
      selectedDate1Formatted ()  {
        if(this.selectedDate1) {
          return this.selectedDate1.toDateString()
        }

        return 'Choose Date'
      }
    },
    methods: {
      toggleDialog () {
        this.$refs.input.toggleDialog()
      }
    }
  }
</script>

<style lang="scss">
  .md-datepicker {
    margin-top: 30px;

    label {
      line-height: 40px;
    }
  }
</style>

