<template>
  <div>
    <md-datepicker v-model="date" :md-open-on-focus="false" />
  </div>
</template>

<script>
  export default {
    name: 'Example',
    data: () => ({
      date: new Date('2018-03-26')
    })
  }
</script>

<style lang="scss" scoped>
  .md-datepicker {

  }
</style>
