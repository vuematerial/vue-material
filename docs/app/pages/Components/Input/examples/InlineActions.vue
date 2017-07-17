<template>
  <div>
    <md-field md-clearable>
      <label>Cleareable</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field>
      <label>Password toggle</label>
      <md-input type="password" v-model="password"></md-input>
    </md-field>

    <md-field :md-toggle-password="false">
      <label>Password field without toggle</label>
      <md-input type="password" v-model="password"></md-input>
    </md-field>
  </div>
</template>

<style lang="scss" scoped>
  .md-field:last-child {
    margin-bottom: 40px;
  }
</style>

<script>
  export default {
    name: 'Icons',
    data: () => ({
      initial: 'Initial Value',
      password: 'mysecurepassword'
    })
  }
</script>
