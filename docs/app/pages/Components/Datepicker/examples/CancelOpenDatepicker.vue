<template>
  <div>
    <md-field md-clearable>
      <md-icon md-datepicker-trigger>event</md-icon>
      <md-datepicker ref="input" v-model="selectedDate" :md-open-on-focus="false" />
    </md-field>
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
