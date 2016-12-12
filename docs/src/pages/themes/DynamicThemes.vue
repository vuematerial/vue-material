<template>
  <page-content page-title="Themes - Dynamic Themes">
    <md-theme :md-name="theme">
      <md-toolbar></md-toolbar>
      <md-input-container>
        <md-input v-model="theme"></md-input>
      </md-input-container>
      <md-button class="md-primary md-raised">Test</md-button>
      <md-radio class="md-primary" :md-value="true" v-model="radio">Test</md-radio>
      <md-checkbox class="md-primary" v-model="radio">Test</md-checkbox>
    </md-theme>
  </page-content>
</template>

<style lang="scss" scoped>

</style>

<script>
  export default {
    data: () => ({
      theme: 'red',
      radio: true
    })
  };
</script>
