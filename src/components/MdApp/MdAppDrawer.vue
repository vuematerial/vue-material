<template>
  <md-drawer class="md-app-drawer" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </md-drawer>
</template>

<script>
  export default {
    name: 'MdAppDrawer',
    inject: ['MdApp'],
    data: () => ({
      drawerElement: {
        mdVisible: null,
        mode: null
      }
    }),
    computed: {
      visible () {
        return this.drawerElement.mdVisible
      },
      mode () {
        return this.drawerElement.mode
      }
    },
    watch: {
      visible (visible) {
        this.MdApp.drawer.width = this.getDrawerWidth()
        this.MdApp.drawer.active = visible
      },
      mode (mode) {
        this.MdApp.drawer.mode = mode
      }
    },
    methods: {
      getDrawerWidth () {
        let drawerWidth = this.$el ? this.$el.offsetWidth : 0

        return drawerWidth + 'px'
      }
    },
    mounted () {
      this.drawerElement = this.$children[0]
      this.MdApp.drawer.width = this.getDrawerWidth()
      this.MdApp.drawer.active = this.visible
      this.MdApp.drawer.mode = this.mode
    }
  }
</script>
