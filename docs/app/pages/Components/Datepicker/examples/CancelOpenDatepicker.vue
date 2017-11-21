<template>
  <div>
    <md-datepicker v-model="selectedDate" :md-open-on-focus="false" />
  </div>
</template>

<script>
  export default {
    name: 'CancelOpenDatepicker',
    data: () => ({
      selectedDate: new Date('2018/03/26')
    })
  }
</script>
