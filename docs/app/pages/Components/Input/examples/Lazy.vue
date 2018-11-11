<template>
  <div>
    <md-field>
      <label>Lazy</label>
      <md-input v-model="initial" :isLazy="isLazy"></md-input>
    </md-field>
    <md-field>
      <label>Non Lazy</label>
      <md-input v-model="initial" :isLazy="!isLazy"></md-input>
    </md-field>
    <p>Value: {{initial}}</p>
  </div>
</template>

<script>
  export default {
    name: 'lazy',
    data: () => ({
      initial: 'Initial Value',
      isLazy: true
    })
  }
</script>

<style lang="scss" scoped>
  .md-field:last-child {
    margin-bottom: 40px;
  }
</style>
