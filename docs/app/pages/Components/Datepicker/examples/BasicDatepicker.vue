<template>
  <div>
    <md-datepicker v-model="selectedDate" />
    Start from Monday:
    <md-datepicker v-model="selectedDate" md-first-day-of-a-week="1" />
  </div>
</template>

<script>
  export default {
    name: 'BasicDatepicker',
    data: () => ({
      selectedDate: null
    })
  }
</script>
