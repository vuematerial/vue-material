<template>
  <div>
    <md-field>
      <md-icon md-datepicker-trigger>event</md-icon>
      <md-datepicker ref="input" v-model="selectedDate" :md-disabled-dates="disabledDates" />
    </md-field>
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
