<template>
  <div>
    <md-list>
      <md-list-item>Plain Text</md-list-item>
      <md-list-item @click="alert">Button</md-list-item>
      <md-list-item href="https://google.com" target="_blank">Link</md-list-item>
      <md-list-item to="/components/list/router">Link Router</md-list-item>
      <md-list-item to="/components/list">Link Router Active Color</md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: 'ListTypes',
  methods: {
    alert () {
      window.alert('...')
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
</style>
