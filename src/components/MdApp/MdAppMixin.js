const mdAppModes = [
  'fixed',
  'fixed-last',
  'reveal'
]

const customValidator = (name, source, value) => {
  if (source.includes(value)) {
    return true
  }

  console.error(`The ${name} prop is invalid. Given value: ${value}. Available options: ${source.join(', ')}.`)

  return false
}

export default {
  props: {
    mdMode: {
      type: String,
      validator (value) {
        return customValidator('md-mode', mdAppModes, value)
      }
    },
    mdWaterfall: Boolean,
    mdFlexible: Boolean
  },
  data: () => ({
    MdApp: {
      options: {
        mode: null,
        waterfall: false,
        flexible: false
      },
      toolbar: {
        hasElevation: true
      },
      drawer: {
        active: false,
        mode: 'temporary',
        width: 0
      }
    }
  }),
  provide () {
    return {
      MdApp: this.MdApp
    }
  },
  computed: {
    containerStyles () {
      if (this.MdApp.drawer.active && this.MdApp.drawer.mode === 'persistent') {
        return {
          'padding-left': this.MdApp.drawerWidth
        }
      }
    },
    appClasses () {
      return {
        'md-waterfall': this.mdWaterfall,
        'md-flexible': this.mdFlexible,
        'md-fixed': this.mdMode === 'fixed',
        'md-fixed-last': this.mdMode === 'fixed-last',
        'md-reveal': this.mdMode === 'reveal'
      }
    }
  },
  watch: {
    mdMode (mode) {
      this.MdApp.options.mode = mode
    },
    mdWaterfall (waterfall) {
      this.MdApp.options.waterfall = waterfall
      this.setToolbarElevation()
    },
    mdFlexible (flexible) {
      this.MdApp.options.flexible = flexible
    }
  },
  methods: {
    setToolbarElevation () {
      this.MdApp.toolbar.hasElevation = !this.mdWaterfall
    },
    handleWaterfallScroll ($event) {
      this.MdApp.toolbar.hasElevation = $event.target.scrollTop >= 4
    },
    handleModeScroll ($event) {
      /* const toolbar = this.$el.querySelector('.md-app-toolbar') */
      const scrollTop = $event.target.scrollTop

      console.log(scrollTop)
    },
    handleScroll ($event) {
      window.requestAnimationFrame(() => {
        if (this.mdWaterfall) {
          this.handleWaterfallScroll($event)
        } else if (this.mdMode) {
          this.handleModeScroll($event)
        }
      })
    }
  },
  created () {
    this.MdApp.options.mode = this.mdMode
    this.MdApp.options.waterfall = this.mdWaterfall
    this.MdApp.options.flexible = this.mdFlexible
    this.setToolbarElevation()
  }
}
