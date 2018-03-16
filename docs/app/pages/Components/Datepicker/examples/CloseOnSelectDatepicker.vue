<template>
  <div>
    <md-datepicker v-model="selectedDate" md-immediately />
  </div>
</template>

<script>
  export default {
    name: 'CloseOnSelectDatepicker',
    data: () => ({
      selectedDate: new Date('2018/03/26')
    })
  }
</script>
