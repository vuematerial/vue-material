<template>
  <div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-datepicker-inline :md-date.sync="selectedDate" :class="layout"/>
      </div>
      <div class="md-layout-item">
        Selected date: {{ selectedDate }}
      </div>
    </div>

    <md-divider/>
    <md-field>
      <label>First day of a week</label>
      <md-select v-model="firstDayOfAWeek">
        <md-option value="0">Sunday</md-option>
        <md-option value="1">Monday</md-option>
      </md-select>
      <span class="md-helper-text">This config is global.</span>
    </md-field>
    <md-field>
      <label>Layout</label>
      <md-select v-model="layout">
        <md-option value="md-vertical">Vertical</md-option>
        <md-option value="md-landscape">Landscape</md-option>
      </md-select>
    </md-field>
  </div>
</template>

<script>
  import MdDateIcon from 'core/icons/MdDateIcon'
  import format from 'date-fns/format'
  import parse from 'date-fns/parse'
  import isValid from 'date-fns/isValid'
  import MdDebounce from 'core/utils/MdDebounce';

  export default {
    name: 'BasicInlineDatepicker',
    data () {
      return {
        selectedDate: null,
        layout: 'md-landscape'
      }
    },
    computed: {
      firstDayOfAWeek: {
        get () {
          return this.$material.locale.firstDayOfAWeek
        },
        set (val) {
          this.$material.locale.firstDayOfAWeek = val
        }
      },
    }
  }
</script>
