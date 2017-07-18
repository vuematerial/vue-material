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
    revealTimer: null,
    revealLastPos: false,
    MdApp: {
      options: {
        mode: null,
        waterfall: false,
        flexible: false
      },
      toolbar: {
        element: null,
        transformY: 0,
        hasElevation: true,
        revealActive: false
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
      let threshold = 4

      if (this.mdMode === 'reveal') {
        threshold = this.MdApp.toolbar.element.offsetHeight + 10
      }

      this.MdApp.toolbar.hasElevation = $event.target.scrollTop >= threshold
    },
    handleRevealMode ($event) {
      const toolbarHeight = this.MdApp.toolbar.element.offsetHeight
      const safeAmount = 10
      const threshold = toolbarHeight + safeAmount
      const scrollTop = $event.target.scrollTop

      window.clearTimeout(this.revealTimer)

      this.revealTimer = window.setTimeout(() => {
        this.revealLastPos = scrollTop
      }, 100)

      if (this.revealLastPos > scrollTop + safeAmount) {
        this.MdApp.toolbar.revealActive = true
        this.MdApp.toolbar.transformY = scrollTop - threshold
      } else if (scrollTop < threshold) {
        this.MdApp.toolbar.revealActive = false
        this.MdApp.toolbar.transformY = 0
      } else {
        this.MdApp.toolbar.transformY = scrollTop - threshold
      }
    },
    handleModeScroll ($event) {
      if (this.mdMode === 'reveal') {
        this.handleRevealMode($event)
      }
    },
    handleScroll ($event) {
      window.requestAnimationFrame(() => {
        if (this.MdApp.toolbar.element) {
          if (this.mdWaterfall) {
            this.handleWaterfallScroll($event)
          }

          if (this.mdMode) {
            this.handleModeScroll($event)
          }
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
