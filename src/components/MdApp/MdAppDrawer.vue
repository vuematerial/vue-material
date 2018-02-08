<template>
  <md-drawer class="md-app-drawer" v-bind="$attrs" v-on="$listeners" :md-right="mdRight">
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
    props: {
      mdRight: {
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
      drawerName () {
        return this.mdRight ? 'rightDrawer' : 'leftDrawer'
      }
    },
    watch: {
      visible (visible) {
        this.MdApp[this.drawerName].width = this.getDrawerWidth()
        this.MdApp[this.drawerName].active = visible
      },
      mode (mode) {
        this.MdApp[this.drawerName].mode = mode
      },
      submode (submode) {
        this.MdApp[this.drawerName].submode = submode
      },
      drawerName (after, before) {
        this.clearDrawerData(before)
        this.$nextTick(() => {
          this.updateDrawerData()
        })
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
        this.MdApp[this.drawerName].width = this.getDrawerWidth()
        this.MdApp[this.drawerName].active = this.visible
        this.MdApp[this.drawerName].mode = this.mode
        this.MdApp[this.drawerName].submode = this.submode
        this.MdApp[this.drawerName].initialWidth = this.$el.offsetWidth
      },
      clearDrawerData (darwerName = this.drawerName) {
        this.MdApp[darwerName].width = 0
        this.MdApp[darwerName].active = false
      }
    },
    mounted () {
      this.$nextTick().then(() => {
        this.drawerElement = this.$children[0]
        this.updateDrawerData()
      })
    },
    updated () {
      this.updateDrawerData()
    },
    beforeDestroy () {
      this.clearDrawerData()
    }
  }
</script>
