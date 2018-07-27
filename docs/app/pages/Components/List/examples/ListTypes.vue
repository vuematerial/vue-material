<template>
  <div>
    <md-list>
      <md-list-item>Plain Text</md-list-item>
      <md-list-item @click="alert">Button</md-list-item>
      <md-list-item href="https://google.com" target="_blank">Link</md-list-item>
      <md-list-item to="/components/list" exact>Router <code>/</code></md-list-item>
      <md-list-item to="/components/list/router">Router <code>/router/**</code></md-list-item>
    </md-list>
    <md-list>
      <md-list-item to="/components/list/router/1">Router <code>/router/1</code></md-list-item>
      <md-list-item to="/components/list/router/2">Router <code>/router/2</code></md-list-item>
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

  .md-list .router-link-active {
    text-shadow: 0 0 5px;
  }
</style>
