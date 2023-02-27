export default {
  name: 'MdDialogRender',
  abstract: true,
  props: {
    mdValue: {
      type: Boolean,
      default: false,
    },
    mdKeepAlive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // For elements that are only hidden in the dom and because of it have no height value
    dispatchResizeEvent () {
      this.$nextTick(() => {
        window.dispatchEvent(new Event('resize'))
      })
    }
  },
  render () {
    const defaultSlot = this.$slots.default
    if (defaultSlot && defaultSlot[0]) {
      if (this.mdKeepAlive) {
        defaultSlot[0].data.directives = [{ name: 'show', value: this.mdValue }]
        if (this.mdValue) this.dispatchResizeEvent()
        return defaultSlot[0]
      } else {
        return this.mdValue && defaultSlot[0]
      }
    }
  }
}
