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
      <h3>Dynamic By Model</h3>
      <md-radio :model="type" value="date" @change="toDate">Date</md-radio>
      <md-radio :model="type" value="string" @change="toString">String</md-radio>
      <md-radio :model="type" value="number" @change="toNumber">Number</md-radio>
      <md-datepicker v-model="dynamicByModel" />
      <div class="value">value: {{dynamicByModel}}</div>
    </div>
    <md-divider />
    <div class="block">
      <h3>Dynamic By <code>:md-model-type</code></h3>
      <md-radio v-model="mdTypeValue" value="date">Date</md-radio>
      <md-radio v-model="mdTypeValue" value="string">String</md-radio>
      <md-radio v-model="mdTypeValue" value="number">Number</md-radio>
      <md-datepicker v-model="dynamicByMdType" :md-model-type="mdType" />
      <div class="value">value: {{dynamicByMdType}}</div>
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
        dynamicByModel: now,
        mdTypeValue: 'date',
        dynamicByMdType: now
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
      // eslint-disable-next-line
      type () {
        if (typeof this.dynamicByModel === 'object' && this.dynamicByModel instanceof Date && isValid(this.dynamicByModel)) {
          return 'date'
        } else if (typeof this.dynamicByModel === 'string') {
          return 'string'
        } else if (Number.isInteger(this.dynamicByModel) && this.dynamicByModel >= 0) {
          return 'number'
        } else if (this.model === null || this.model === undefined) {
          return 'null'
        } else {
          throw new Error('Type error')
        }
      },
      dateFormat () {
        return this.$material.locale.dateFormat || 'YYYY-MM-DD'
      },
      mdType () {
        switch (this.mdTypeValue) {
        case 'date':
          return Date
        case 'string':
          return String
        case 'number':
          return Number
        }
      }
    },
    methods: {
      toDate () {
        switch (this.type) {
        case 'null':
          this.dynamicByModel = null
          break

        case 'string':
          this.dynamicByModel = parse(this.dynamicByModel, this.dateFormat, new Date())
          break

        case 'number':
          this.dynamicByModel = new Date(this.dynamicByModel)
          break
        }
      },
      toString () {
        this.toDate()
        this.dynamicByModel = this.dynamicByModel && format(this.dynamicByModel, this.dateFormat)
      },
      toNumber () {
        this.toDate()
        this.dynamicByModel = this.dynamicByModel && Number(this.dynamicByModel)
      }
    }
  }
</script>
