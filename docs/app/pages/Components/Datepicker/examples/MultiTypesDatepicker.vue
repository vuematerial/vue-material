<template>
  <div>
    <div class="block">
      <h3>Date</h3>
      <md-datepicker v-model="date" />
      <div class="value">value: {{date}}</div>
    </div>
    <md-divider />
    <div class="block">
      <h3>String</h3>
      <md-datepicker v-model="string" />
      <div class="value">value: {{string}}</div>
    </div>
    <md-divider />
    <div class="block">
      <h3>Number</h3>
      <md-datepicker v-model="number" />
      <div class="value">value: {{number}}</div>
    </div>
    <md-divider />
    <div class="block">
      <h3>Dynamic</h3>
      <md-radio :model="type" value="date" @change="toDate">Date</md-radio>
      <md-radio :model="type" value="string" @change="toString">String</md-radio>
      <md-radio :model="type" value="number" @change="toNumber">Number</md-radio>
      <md-datepicker v-model="dynamic" />
      <div class="value">value: {{dynamic}}</div>
    </div>
  </div>
</template>

<script>
  import parse from 'date-fns/parse'
  import format from 'date-fns/format'
  import isValid from 'date-fns/isValid'

  export default {
    name: 'MultiTypesDatepicker',
    data () {
      let dateFormat = this.$material.locale.dateFormat || 'YYYY-MM-DD'
      let now = new Date()

      return {
        date: now,
        string: format(now, dateFormat),
        number: Number(now),
        dynamic: now
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
      type () {
        if (typeof this.dynamic === 'object' && this.dynamic instanceof Date && isValid(this.dynamic)) {
          return 'date'
        } else if (typeof this.dynamic === 'string') {
          return 'string'
        } else if (Number.isInteger(this.dynamic) && this.dynamic >= 0) {
          return 'number'
        } else if (this.model === null || this.model === undefined) {
          return 'null'
        } else {
          throw new Error('Type error')
        }
      },
      dateFormat () {
        return this.$material.locale.dateFormat || 'YYYY-MM-DD'
      }
    },
    methods: {
      toDate () {
        switch (this.type) {
          case 'null':
            this.dynamic = null
            break

          case 'string':
            this.dynamic = parse(this.dynamic, this.dateFormat, new Date())
            break

          case 'number':
            this.dynamic = new Date(this.dynamic)
            break
        }
      },
      toString () {
        this.toDate()
        this.dynamic = format(this.dynamic, this.dateFormat)
      },
      toNumber () {
        this.toDate()
        this.dynamic = Number(this.dynamic)
      }
    }
  }
</script>
