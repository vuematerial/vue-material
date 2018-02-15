<template>
  <div>
    <md-field>
      <md-icon @click.native="toggleDialog">event</md-icon>
      <label>Select date</label>
      <md-date-input ref="input" v-model="selectedDate" />
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'LabeledDatepicker',
    data: () => ({
      selectedDate: null
    }),
    methods: {
      toggleDialog () {
        this.$refs.input.toggleDialog()
      }
    }
  }
</script>
