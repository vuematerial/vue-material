export default {
  provide: {
    MdApp: {}
  },
  data: () => ({
    MdApp: {
      drawerActive: false,
      drawerMode: 'temporary',
      drawerWidth: 0
    }
  }),
  computed: {
    containerStyles () {
      if (this.MdApp.drawerActive && this.MdApp.drawerMode === 'persistent') {
        return {
          'padding-left': this.MdApp.drawerWidth
        }
      }
    }
  },
  created () {
    this._provided.MdApp = this.MdApp
  }
}
