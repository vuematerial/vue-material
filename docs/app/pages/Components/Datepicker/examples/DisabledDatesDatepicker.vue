<template>
  <div>
    <md-datepicker v-model="selectedDate" :md-disabled-dates="disabledDates" />
  </div>
</template>

<script>
  function isWeekend (date) {
    const day = date.getDay()

    return day === 6 || day === 0
  }

  export default {
    name: 'DisabledDatesDatepicker',
    data: () => ({
      selectedDate: null,
      disabledDates: date => isWeekend(date)
    })
  }
</script>
