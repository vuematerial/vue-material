<template>
  <md-drawer class="md-app-drawer" :md-active="mdActive && initialized" v-bind="$attrs" v-on="$listeners" :md-right="mdRight" ref="drawer">
    <slot />
  </md-drawer>
</template>

<script>
  export default {
    name: 'MdAppDrawer',
    inject: ['MdApp'],
    data: () => ({
      drawerElement: {
        mdActive: null,
        mode: null,
        submode: null
      },
      initialized: false
    }),
    props: {
      mdRight: {
        type: Boolean,
        default: false
      },
      mdActive: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      visible () {
        return this.drawerElement.mdActive
      },
      mode () {
        return this.drawerElement.mode
      },
      submode () {
        return this.drawerElement.submode
      },
    },
    watch: {
      visible (visible) {
        this.MdApp.drawer.width = this.getDrawerWidth()
        this.MdApp.drawer.active = visible
      },
      mode (mode) {
        this.MdApp.drawer.mode = mode
      },
      submode (submode) {
        this.MdApp.drawer.submode = submode
      },
      mdRight (right) {
        this.MdApp.drawer.right = right
      }
    },
    methods: {
      getDrawerWidth () {
        if (this.$el) {
          return window.getComputedStyle(this.$el).width
        }

        return 0
      },
      updateDrawerData () {
        this.MdApp.drawer.width = this.getDrawerWidth()
        this.MdApp.drawer.active = this.visible
        this.MdApp.drawer.mode = this.mode
        this.MdApp.drawer.submode = this.submode
        this.MdApp.drawer.right = this.mdRight
      },
      clearDrawerData () {
        this.MdApp.drawer.width = 0
        this.MdApp.drawer.active = false
        this.MdApp.drawer.mode = 'temporary'
        this.MdApp.drawer.submode = null
        this.MdApp.drawer.initialWidth = 0
      },
    },
    mounted () {
      this.$nextTick().then(() => {
        this.MdApp.drawer.initialWidth = this.$el.offsetWidth
        this.drawerElement = this.$refs.drawer
        this.updateDrawerData()
        this.initialized = true
      })
    },
    updated () {
      this.drawerElement = this.$refs.drawer
    },
    beforeDestroy () {
      this.clearDrawerData()
    }
  }
</script>
