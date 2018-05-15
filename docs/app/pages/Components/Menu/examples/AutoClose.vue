<template>
  <div>
    <div>
      <md-checkbox :value="true" v-model="closeOnClick">closeOnClick</md-checkbox>
      <md-checkbox :value="true" v-model="closeOnSelect">closeOnSelect</md-checkbox>
    </div>
    <div>
      <md-menu md-direction="bottom-end" :mdCloseOnClick="closeOnClick" :mdCloseOnSelect="closeOnSelect">
        <md-button md-menu-trigger>Bottom End</md-button>

        <md-menu-content>
          <md-menu-item disabled @click="data = 'click disabled'">Disabled</md-menu-item>
          <md-menu-item @click="data = 'click 1'">Click Event 1</md-menu-item>
          <md-menu-item @click="data = 'click 2'">Click Event 2</md-menu-item>
          <md-menu-item>Plain text</md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>
    <div>{{data}}</div>
  </div>
</template>

<script>
  export default {
    name: 'AutoClose',

    data () {
      return {
        data: '',
        closeOnClick: false,
        closeOnSelect: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-menu {
    margin: 24px;
  }
</style>
