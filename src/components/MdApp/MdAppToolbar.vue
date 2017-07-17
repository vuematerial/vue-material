<template>
  <md-toolbar class="md-app-toolbar" v-bind="$attrs" v-on="$listeners" :class="toolbarClasses" :style="toolbarStyles">
    <slot></slot>
  </md-toolbar>
</template>

<script>
  export default {
    name: 'MdAppToolbar',
    inject: ['MdApp'],
    computed: {
      toolbarClasses () {
        return {
          'md-no-elevation': !this.MdApp.toolbar.hasElevation
        }
      },
      toolbarStyles () {
        return {
          transform: `translate3D(0, ${this.MdApp.toolbar.transformY}px, 0)`
        }
      }
    },
    mounted () {
      this.MdApp.toolbar.element = this.$el
    }
  }
</script>

<style lang="scss" scoped>
  .md-no-elevation {
    box-shadow: none !important;
  }
</style>
