import Vue from 'vue'

export default {
  name: 'MdPortal',
  abstract: true,
  props: {
    mdAttachToParent: Boolean,
    mdTarget: {
      validator (el) {
        if (!HTMLElement || (el && el instanceof HTMLElement)) {
          return true
        }

        Vue.util.warn('The md-target-el prop is invalid. You should pass a valid HTMLElement.', this)

        return false
      }
    }
  },
  data: () => ({
    lastEl: null,
    MdPortal: {
      originalParent: null
    }
  }),
  provide () {
    return {
      MdPortal: this.MdPortal
    }
  },
  watch: {
    mdTarget () {
      this.appendElToTarget()
    },
    mdAttachToParent () {
      this.appendElToTarget()
    }
  },
  methods: {
    getDOMTarget () {
      if (this.mdAttachToParent) {
        return this.$el.parentNode.parentNode
      }

      if (!this.mdTarget) {
        return document.body
      }

      if (this.mdTarget instanceof window.Node) {
        return this.mdTarget
      }

      return document.querySelector(this.mdTarget)
    },
    appendElToTarget () {
      this.getDOMTarget(this.mdTarget).appendChild(this.$el)
      this.lastEl = this.$el
    },
    replaceLastElementWhenChanged () {
      this.$el.parentNode.removeChild(this.lastEl)
      this.getDOMTarget(this.mdTarget).appendChild(this.$el)
    }
  },
  render () {
    const defaultSlot = this.$slots.default

    if (defaultSlot && defaultSlot[0]) {
      return defaultSlot[0]
    }
  },
  async mounted () {
    await this.$nextTick()

    if (!this.MdPortal.originalParent) {
      this.MdPortal.originalParent = this.$el.parentNode
      this.appendElToTarget()
    } else if (this.lastEl) {
      this.replaceLastElementWhenChanged()
    }
  },
  updated () {
    if (this.$el.parentNode === this.MdPortal.originalParent) {
      this.replaceLastElementWhenChanged()
    }
  },
  beforeDestroy () {
    this.lastEl = this.$el
  },
  destroyed () {
    if (this.lastEl && this.lastEl.parentNode) {
      this.lastEl.parentNode.removeChild(this.lastEl)
    }
  }
}
