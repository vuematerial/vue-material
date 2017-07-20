const mdAppModes = [
  'fixed',
  'fixed-last',
  'reveal',
  'overlap'
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
        revealActive: false,
        fixedLastActive: false,
        fixedLastHeight: false,
        overlapOff: false
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
        styles['padding-left'] = this.MdApp.drawer.width
      }

      if ((this.mdMode && this.mdMode !== 'fixed') || this.mdFlexible) {
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
        'md-reveal': this.mdMode === 'reveal',
        'md-overlap': this.mdMode === 'overlap'
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
    setToolbarTimer (scrollTop) {
      window.clearTimeout(this.revealTimer)

      this.revealTimer = window.setTimeout(() => {
        this.revealLastPos = scrollTop
      }, 100)
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
      const shouldKeepFlexible = scrollTop < initialHeight - firstRowHeight

      if (firstRowHeight) {
        if (shouldKeepFlexible) {
          toolbar.style.height = scrollAmount + 'px'
          this.$emit('md-flexible-done')
        } else {
          toolbar.style.height = firstRowHeight + 'px'
          this.$emit('md-flexible-done')
        }
      }

      const titleElement = this.MdApp.toolbar.titleElement
      if (titleElement) {
        const targetSize = 20
        const initialSize = this.MdApp.toolbar.titleSize

        if (shouldKeepFlexible) {
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

      this.setToolbarTimer(scrollTop)
      this.setToolbarMarginAndHeight(scrollTop - threshold, toolbarHeight)

      if (scrollTop >= threshold) {
        this.MdApp.toolbar.revealActive = this.revealLastPos > scrollTop + safeAmount
      } else {
        this.MdApp.toolbar.revealActive = true
      }
    },
    handleFixedLastMode ($event) {
      let { scrollTop, toolbarHeight, safeAmount } = this.getToolbarConstrants($event)
      const toolbar = this.MdApp.toolbar.element
      const firstRow = toolbar.querySelector('.md-toolbar-row:first-child')
      const firstRowHeight = firstRow.offsetHeight

      this.setToolbarTimer(scrollTop)
      this.setToolbarMarginAndHeight(scrollTop - firstRowHeight, toolbarHeight)
      this.MdApp.toolbar.fixedLastHeight = firstRowHeight

      if (scrollTop >= firstRowHeight) {
        this.MdApp.toolbar.fixedLastActive = this.revealLastPos > scrollTop + safeAmount
      } else {
        this.MdApp.toolbar.fixedLastActive = true
      }
    },
    handleOverlapMode ($event) {
      const { toolbarHeight, scrollTop, initialHeight } = this.getToolbarConstrants($event)
      const toolbar = this.MdApp.toolbar.element
      const firstRow = toolbar.querySelector('.md-toolbar-row:first-child')
      const firstRowHeight = firstRow.offsetHeight
      const newHeight = initialHeight - scrollTop - (scrollTop * 100 / (initialHeight - firstRowHeight - (firstRowHeight / 1.5)))

      if (firstRowHeight) {
        if (scrollTop < initialHeight - firstRowHeight && newHeight >= firstRowHeight) {
          this.MdApp.toolbar.overlapOff = false
          toolbar.style.height = newHeight + 'px'
        } else {
          this.MdApp.toolbar.overlapOff = true
          toolbar.style.height = firstRowHeight + 'px'
        }
      }

      this.setToolbarMarginAndHeight(scrollTop, toolbarHeight)
    },
    handleModeScroll ($event) {
      if (this.mdMode === 'reveal') {
        this.handleRevealMode($event)
      } else if (this.mdMode === 'fixed-last') {
        this.handleFixedLastMode($event)
      } else if (this.mdMode === 'overlap') {
        this.handleOverlapMode($event)
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
    const fakeEvent = {
      target: {
        scrollTop: 0
      }
    }

    if (this.mdMode === 'reveal' || this.mdFlexible) {
      this.MdApp.toolbar.revealActive = true
      this.handleRevealMode(fakeEvent)
    }

    if (this.mdMode === 'fixed-last') {
      this.MdApp.toolbar.fixedLastActive = true
      this.handleFixedLastMode(fakeEvent)
    }

    if (this.mdMode === 'overlap') {
      this.handleOverlapMode(fakeEvent)
    }
  }
}
