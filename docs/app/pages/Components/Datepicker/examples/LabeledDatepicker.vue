<template>
  <div>
    <md-datepicker v-model="selectedDate">
      <label>Select date</label>
    </md-datepicker>
  </div>
</template>

<script>
  export default {
    name: 'LabeledDatepicker',
    data: () => ({
      selectedDate: null
    })
  }
</script>
