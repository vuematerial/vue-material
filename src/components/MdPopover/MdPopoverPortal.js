import MdPortalNew from '../MdPortal/MdPortalNew'
import MdPopoverNew from './MdPopoverNew'

export default {
  name: 'MdPopoverPortal',
  abstract: true,
  components: {
    MdPopoverNew
  },
  render (createElement) {
    const popoverEl = createElement(MdPopoverNew, {
      props: this.$attrs
    }, this.$slots.default)

    return createElement(MdPortalNew, [popoverEl])
  }
}
