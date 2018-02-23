<template>
  <div>
    <md-field>
      <md-icon md-datepicker-trigger>event</md-icon>
      <label>Select date</label>
      <md-datepicker ref="input" v-model="selectedDate" />
    </md-field>
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
