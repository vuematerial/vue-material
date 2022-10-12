export default {
  name: 'MdDialogRender',
  abstract: true,
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    keepAlive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // For elements that are hidden in the dom and have no height value
    dispatchResizeEvent() {
      this.$nextTick(() => {
        window.dispatchEvent(new Event('resize'))
      })
    }
  },
  render () {
    const defaultSlot = this.$slots.default
    if (defaultSlot && defaultSlot[0]) {
      if (this.keepAlive) {
        defaultSlot[0].data.directives = [{ name: 'show', value: this.value }]
        if (this.value) this.dispatchResizeEvent()
        return defaultSlot[0]
      } else {
        return this.value && defaultSlot[0]
      }
    }
  }
}
