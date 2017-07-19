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
        titleElement: null,
        height: '0px',
        initialHeight: 0,
        top: 0,
        titleSize: 20,
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
      let styles = {}

      if (this.MdApp.drawer.active && this.MdApp.drawer.mode === 'persistent') {
        styles['margin-left'] = this.MdApp.drawer.width
      }

      if (this.mdMode === 'reveal' || this.mdMode === 'fixed-last' || this.mdFlexible) {
        styles['margin-top'] = this.MdApp.toolbar.initialHeight + 'px'
      }

      return styles
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
    setToolbarMarginAndHeight (margin, height) {
      this.MdApp.toolbar.top = margin
      this.MdApp.toolbar.height = height
    },
    getToolbarConstrants ($event) {
      const toolbarHeight = this.MdApp.toolbar.element.offsetHeight
      const safeAmount = 10
      const threshold = toolbarHeight + safeAmount
      const scrollTop = $event.target.scrollTop

      if (!this.MdApp.toolbar.initialHeight) {
        this.MdApp.toolbar.initialHeight = toolbarHeight
      }

      return {
        toolbarHeight,
        safeAmount,
        threshold,
        scrollTop,
        initialHeight: this.MdApp.toolbar.initialHeight
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
    handleFlexibleScroll ($event) {
      let { scrollTop, initialHeight } = this.getToolbarConstrants($event)
      const toolbar = this.MdApp.toolbar.element
      const firstRow = toolbar.querySelector('.md-toolbar-row:first-child')
      const firstRowHeight = firstRow.offsetHeight
      const scrollAmount = initialHeight - scrollTop

      if (firstRowHeight) {
        if (scrollTop < initialHeight - firstRowHeight) {
          toolbar.style.height = scrollAmount + 'px'
        } else {
          toolbar.style.height = firstRowHeight + 'px'
        }
      }

      const titleElement = this.MdApp.toolbar.titleElement
      if (titleElement) {
        const targetSize = 20
        const initialSize = this.MdApp.toolbar.titleSize

        if (scrollTop < initialHeight - firstRowHeight) {
          const newSize = Math.max(0, 1 - (scrollTop - initialSize) / (scrollAmount + initialSize + 0.000001)) * (initialSize - targetSize) + targetSize

          titleElement.style.fontSize = newSize + 'px'
        } else {
          titleElement.style.fontSize = '20px'
        }
      }

      let { threshold, toolbarHeight } = this.getToolbarConstrants($event)

      this.setToolbarMarginAndHeight(scrollTop - threshold, toolbarHeight)
    },
    handleRevealMode ($event) {
      const { toolbarHeight, safeAmount, threshold, scrollTop } = this.getToolbarConstrants($event)

      window.clearTimeout(this.revealTimer)

      this.revealTimer = window.setTimeout(() => {
        this.revealLastPos = scrollTop
      }, 100)

      this.setToolbarMarginAndHeight(scrollTop - threshold, toolbarHeight)

      if (scrollTop >= threshold) {
        this.MdApp.toolbar.revealActive = this.revealLastPos > scrollTop + safeAmount
      } else {
        this.MdApp.toolbar.revealActive = true
      }
    },
    handleFixedLastMode ($event) {
      let { scrollTop, toolbarHeight } = this.getToolbarConstrants($event)
      const toolbar = this.MdApp.toolbar.element
      const firstRow = toolbar.querySelector('.md-toolbar-row:first-child')
      const firstRowHeight = firstRow.offsetHeight

      if (scrollTop > firstRowHeight) {
        this.setToolbarMarginAndHeight(scrollTop - firstRowHeight, toolbarHeight)
      } else {
        this.setToolbarMarginAndHeight(0, toolbarHeight)
      }

      /* if (firstRowHeight) {
        if (scrollTop < initialHeight - firstRowHeight) {
          toolbar.style.height = scrollAmount + 'px'
        } else {
          toolbar.style.height = firstRowHeight + 'px'
        }
      }

      let { threshold, toolbarHeight } = this.getToolbarConstrants($event)

      this.setToolbarMarginAndHeight(scrollTop - threshold, toolbarHeight) */
    },
    handleModeScroll ($event) {
      if (this.mdMode === 'reveal') {
        this.handleRevealMode($event)
      } else if (this.mdMode === 'fixed-last') {
        this.handleFixedLastMode($event)
      }
    },
    handleScroll ($event) {
      if (this.MdApp.toolbar.element) {
        window.requestAnimationFrame(() => {
          if (this.mdWaterfall) {
            this.handleWaterfallScroll($event)
          }

          if (this.mdFlexible) {
            this.handleFlexibleScroll($event)
          }

          if (this.mdMode) {
            this.handleModeScroll($event)
          }
        })
      }
    }
  },
  created () {
    this.MdApp.options.mode = this.mdMode
    this.MdApp.options.waterfall = this.mdWaterfall
    this.MdApp.options.flexible = this.mdFlexible
    this.setToolbarElevation()
  },
  mounted () {
    if (this.mdMode === 'reveal' || this.mdFlexible) {
      this.MdApp.toolbar.revealActive = true
      this.handleRevealMode({
        target: {
          scrollTop: 0
        }
      })
    }

    if (this.mdMode === 'fixed-last') {
      this.handleFixedLastMode({
        target: {
          scrollTop: 0
        }
      })
    }
  }
}
