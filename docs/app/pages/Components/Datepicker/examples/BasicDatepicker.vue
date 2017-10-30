<template>
  <div>
    <md-datepicker v-model="selectedDate" />
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
