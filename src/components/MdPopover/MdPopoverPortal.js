import Popper from 'popper.js'
import deepmerge from 'deepmerge'

export default {
  name: 'MdPopoverPortal',
  abstract: true,
  inject: ['MdPortal'],
  props: {
    mdSettings: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    popperInstance: null
  }),
  methods: {
    getPopperOptions () {
      return {
        placement: 'bottom',
        modifiers: {
          preventOverflow: {
            boundariesElement: 'viewport',
            padding: 16
          },
          computeStyle: {
            gpuAcceleration: false
          }
        },
        onCreate: () => {
          this.$emit('md-opened')
        }
      }
    },
    createPopper (el) {
      const options = deepmerge(this.getPopperOptions(), this.mdSettings)

      this.popperInstance = new Popper(this.MdPortal.originalParent, el, options)
    },
    killPopper () {
      this.$emit('md-closed')

      if (this.popperInstance) {
        this.popperInstance.destroy()
        this.popperInstance = null
      }
    }
  },
  render (createElement) {
    const defaultSlot = this.$slots.default
    let options = this.$slots.default[0].componentOptions

    if (options.tag === 'transition') {
      options.listeners = {
        ...options.listeners,
        beforeEnter: this.createPopper,
        afterLeave: this.killPopper
      }
    }

    if (defaultSlot && defaultSlot[0]) {
      return defaultSlot[0]
    }
  }
}
