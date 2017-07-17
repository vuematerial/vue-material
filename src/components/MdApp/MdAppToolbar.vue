<template>
  <md-toolbar class="md-app-toolbar" v-bind="$attrs" v-on="$listeners" :class="toolbarClasses">
    <slot></slot>
  </md-toolbar>
</template>

<script>
  export default {
    name: 'MdAppToolbar',
    inject: ['MdApp'],
    computed: {
      toolbarClasses () {
        if (this.MdApp) {
          return {
            'md-no-elevation': !this.MdApp.toolbar.hasElevation
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-no-elevation {
    box-shadow: none !important;
  }
</style>
