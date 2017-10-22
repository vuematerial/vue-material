import raf from 'raf'
import MdPropValidator from 'core/utils/MdPropValidator'

const mdAppModes = [
  'fixed',
  'fixed-last',
  'reveal',
  'overlap',
  'flexible'
]

export default {
  props: {
    mdMode: {
      type: String,
      ...MdPropValidator('md-mode', mdAppModes)
    },
    mdWaterfall: Boolean,
    mdScrollbar: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    revealTimer: null,
    revealLastPos: 0,
    manualTick: false,
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
        initialWidth: 0,
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
    contentStyles () {
      const drawer = this.MdApp.drawer

      if (drawer.active && drawer.mode === 'persistent' && drawer.submode === 'full') {
        return {
          'padding-left': drawer.width
        }
      }
    },
    containerStyles () {
      const drawer = this.MdApp.drawer
      let styles = {}

      if (this.mdMode && this.mdMode !== 'fixed') {
        styles['margin-top'] = this.MdApp.toolbar.initialHeight + 'px'
      }

      if (drawer.mode === 'persistent' && drawer.submode === 'mini') {
        styles['padding-left'] = !drawer.active ? drawer.initialWidth + 'px' : 0
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
        'md-flexible': this.mdMode === 'flexible',
        'md-fixed': this.mdMode === 'fixed',
        'md-fixed-last': this.mdMode === 'fixed-last',
        'md-reveal': this.mdMode === 'reveal',
        'md-overlap': this.mdMode === 'overlap',
        'md-drawer-active': this.MdApp.drawer.active
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
    handleFlexibleMode ($event) {
      let { scrollTop, initialHeight } = this.getToolbarConstrants($event)
      const toolbar = this.MdApp.toolbar.element
      const firstRow = toolbar.querySelector('.md-toolbar-row:first-child')
      const firstRowHeight = firstRow.offsetHeight
      const scrollAmount = initialHeight - scrollTop
      const shouldKeepFlexible = scrollTop < initialHeight - firstRowHeight

      if (firstRowHeight) {
        if (shouldKeepFlexible) {
          toolbar.style.height = scrollAmount + 'px'
        } else {
          toolbar.style.height = firstRowHeight + 'px'
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
      } else if (this.mdMode === 'flexible') {
        this.handleFlexibleMode($event)
      }
    },
    handleScroll ($event) {
      if (this.MdApp.toolbar.element) {
        raf(() => {
          if (this.mdWaterfall) {
            this.handleWaterfallScroll($event)
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
    this.setToolbarElevation()
  },
  mounted () {
    const fakeEvent = {
      target: {
        scrollTop: 0
      }
    }

    if (this.mdMode === 'reveal') {
      this.MdApp.toolbar.revealActive = true
      this.handleRevealMode(fakeEvent)
    }

    if (this.mdMode === 'flexible') {
      this.MdApp.toolbar.revealActive = true
      this.handleFlexibleMode(fakeEvent)
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
