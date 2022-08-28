<template>
  <div>
    <md-datepicker v-model="selectedDate" :md-disabled-input="true" />
  </div>
</template>

<script>
  export default {
    name: 'DisabledInputDatepicker',
    data: () => ({
      selectedDate: new Date('2018/03/26')
    })
  }
</script>
