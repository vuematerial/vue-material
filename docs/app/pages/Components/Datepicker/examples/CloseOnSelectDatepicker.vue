<template>
  <div>
    <md-field md-clearable>
      <md-icon md-datepicker-trigger>event</md-icon>
      <md-datepicker v-model="selectedDate" md-immediately />
    </md-field>
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
