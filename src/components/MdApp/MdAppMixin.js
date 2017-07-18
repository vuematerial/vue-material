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
    mdFlexible: Boolean,
    mdScrollbar: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    revealTimer: null,
    revealLastPos: 0,
    MdApp: {
      options: {
        mode: null,
        waterfall: false,
        flexible: false
      },
      toolbar: {
        element: null,
        marginTop: 0,
        hasElevation: true,
        revealActive: true
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
    scrollerClasses () {
      if (this.mdScrollbar) {
        return 'md-scrollbar'
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
    getToolbarConstrants ($event) {
      const toolbarHeight = this.MdApp.toolbar.element.offsetHeight
      const safeAmount = 10
      const threshold = toolbarHeight + safeAmount
      const scrollTop = $event.target.scrollTop

      return {
        toolbarHeight,
        safeAmount,
        threshold,
        scrollTop
      }
    },
    handleWaterfallScroll ($event) {
      let { threshold, scrollTop } = this.getToolbarConstrants($event)
      let elevationMark = 4

      if (this.mdMode === 'reveal') {
        elevationMark = threshold
      }

      this.MdApp.toolbar.hasElevation = scrollTop >= elevationMark
    },
    handleRevealMode ($event) {
      const { safeAmount, threshold, scrollTop } = this.getToolbarConstrants($event)

      window.clearTimeout(this.revealTimer)

      this.revealTimer = window.setTimeout(() => {
        this.revealLastPos = scrollTop
      }, 100)

      this.MdApp.toolbar.marginTop = scrollTop - threshold

      if (scrollTop >= threshold) {
        this.MdApp.toolbar.revealActive = this.revealLastPos > scrollTop + safeAmount
      } else {
        this.MdApp.toolbar.revealActive = true
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
  },
  mounted () {
    this.handleModeScroll({
      target: {
        scrollTop: 0
      }
    })
  }
}
