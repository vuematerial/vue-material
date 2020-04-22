<template>
  <div>
    <md-datepicker-inline :md-date.sync="selectedDate" :md-disabled-dates="disabledDates" />
  </div>
</template>

<script>
  export default {
    name: 'DisabledDatesDatepicker',
    data: () => ({
      selectedDate: null,
      disabledDates: date => {
        const day = date.getDay()

        return day === 6 || day === 0
      }
    })
  }
</script>
