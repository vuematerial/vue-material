<template>
  <div>
    <div>
      <div class="md-caption">Open by button</div>
      <md-menu md-direction="bottom-start">
        <md-button class="md-primary md-raised" md-menu-trigger>Open datepicker</md-button>
        <md-menu-content class="md-datepicker-popup">
          <md-datepicker-inline :md-date.sync="selectedDate"/>
        </md-menu-content>
      </md-menu>
    </div>
    <br/>
    <div>
      <div class="md-caption">Open on input focus</div>
      <md-field class="md-has-datepicker" @click.native.stop>
        <md-icon @click="showMenu">
          date_range
        </md-icon>
        <label>Date</label>
        <md-menu md-direction="bottom-start" md-align-trigger :md-active.sync="menuActive">
          <md-input v-model="inputValue" @focus="showMenu"></md-input>
          <md-menu-content class="md-datepicker-popup">
            <md-datepicker-inline :md-date.sync="selectedDate" @md-click:day="hideMenu"/>
          </md-menu-content>
        </md-menu>
      </md-field>
    </div>
  </div>
</template>

<script>
  import format from 'date-fns/format'
  import parse from 'date-fns/parse'
  import isValid from 'date-fns/isValid'
  import MdDebounce from 'core/utils/MdDebounce';

  export default {
    name: 'InputAndMenuDatepicker',
    data () {
      return {
        selectedDate: null,
        menuActive: false,
      }
    },
    computed: {
      inputValue: {
        get () {
          if (!this.selectedDate) {
            return ''
          }
          return format(this.selectedDate, 'dd.MM.yyyy')
        },
        set: MdDebounce(function (value) {
          if (value === '') {
            this.selectedDate = null;
            return;
          }
          const date = parse(value, 'dd.MM.yyyy', new Date())
          if (isValid(date)) {
            this.selectedDate = date
          }
        }, 500)
      },
    },
    methods: {
      showMenu () {
        this.menuActive = true
      },
      hideMenu () {
        this.menuActive = false
      }
    }
  }
</script>
