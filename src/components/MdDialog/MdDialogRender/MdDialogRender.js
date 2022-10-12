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
  render () {
    const defaultSlot = this.$slots.default
    if (defaultSlot && defaultSlot[0]) {
      if (this.keepAlive) {
        defaultSlot[0].data.style = this.value ? {} : { display: 'none' }
        this.$nextTick(() => {
          if (this.value) window.dispatchEvent(new Event('resize'))
        })
        return defaultSlot[0]
      } else {
        return this.value && defaultSlot[0]
      }
    }
  }
}
