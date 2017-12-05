import MdPortal from '../MdPortal/MdPortal'
import MdPopoverPortal from './MdPopoverPortal'

export default {
  name: 'MdPopover',
  abstract: true,
  props: {
    mdSettings: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    MdPopoverPortal
  },
  data: () => ({
    popoverPortalEl: null,
    MdPopover: {
      originalParent: null
    }
  }),
  mounted () {
    const { componentInstance } = this.popoverPortalEl

    if (componentInstance) {
      this.MdPopover = componentInstance.MdPortal
    }
  },
  render (createElement) {
    const popoverPortalEl = createElement(MdPopoverPortal, {
      attrs: this.$attrs,
      props: {
        mdSettings: this.mdSettings
      }
    }, this.$slots.default)

    this.popoverPortalEl = popoverPortalEl

    return createElement(MdPortal, [popoverPortalEl])
  }
}
