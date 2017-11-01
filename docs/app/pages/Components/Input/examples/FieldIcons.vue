<template>
  <div>
    <md-field>
      <md-icon>event</md-icon>
      <label>Date</label>
      <md-input v-model="date"></md-input>
    </md-field>

    <md-field>
      <label>Voice</label>
      <md-input v-model="voice"></md-input>
      <md-icon>keyboard_voice</md-icon>
    </md-field>

    <md-field>
      <label>Description</label>
      <md-textarea v-model="description"></md-textarea>
      <md-icon>description</md-icon>
    </md-field>

    <md-field>
      <md-icon class="md-accent">warning</md-icon>
      <label>Transfer Money</label>
      <md-input v-model="money"></md-input>
      <md-icon>attach_money</md-icon>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'FieldIcons',
    data: () => ({
      date: null,
      voice: null,
      description: null,
      money: null
    })
  }
</script>

<style lang="scss" scoped>
  .md-field:last-child {
    margin-bottom: 40px;
  }
</style>
