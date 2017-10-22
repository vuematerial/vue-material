<template>
  <md-drawer class="md-app-drawer" v-bind="$attrs" v-on="$listeners">
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
      }
    }),
    computed: {
      visible () {
        return this.drawerElement.mdActive
      },
      mode () {
        return this.drawerElement.mode
      },
      submode () {
        return this.drawerElement.submode
      }
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
      }
    },
    methods: {
      getDrawerWidth () {
        if (this.$el) {
          return window.getComputedStyle(this.$el).width
        }

        return 0
      }
    },
    async mounted () {
      await this.$nextTick()
      this.drawerElement = this.$children[0]
      this.MdApp.drawer.width = this.getDrawerWidth()
      this.MdApp.drawer.active = this.visible
      this.MdApp.drawer.mode = this.mode
      this.MdApp.drawer.submode = this.submode
      this.MdApp.drawer.initialWidth = this.$el.offsetWidth
    }
  }
</script>
