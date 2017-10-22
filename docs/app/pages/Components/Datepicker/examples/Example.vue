<template>
  <div>
    <md-datepicker v-model="date" :md-disabled-dates="disabledDates" :md-open-on-focus="false" />
  </div>
</template>

<script>
  import isWeekend from 'date-fns/is_weekend'

  export default {
    name: 'Example',
    data: () => ({
      date: new Date('2018-03-26'),
      /* disabledDates: [
        new Date('2018-03-23'),
        new Date('2018-03-24')
      ], */
      disabledDates (date) {
        return isWeekend(date)
      }
    })
  }
</script>

<style lang="scss" scoped>
  .md-datepicker {

  }
</style>
