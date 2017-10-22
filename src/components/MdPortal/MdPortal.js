import Vue from 'vue'

export default {
  name: 'MdPortal',
  abstract: true,
  props: {
    mdAttachToParent: Boolean,
    mdTarget: {
      type: window.HTMLElement,
      validator (value) {
        if (value && value instanceof window.HTMLElement) {
          return true
        }

        Vue.util.warn('The md-target-el prop is invalid. You should pass a valid HTMLElement.', this)

        return false
      }
    }
  },
  data: () => ({
    leaveTimeout: null,
    originalParentEl: null
  }),
  computed: {
    transitionName () {
      const childrenComponent = this._vnode.componentOptions.children[0]

      if (childrenComponent) {
        const transition = childrenComponent.data.transition

        if (transition) {
          return transition.name
        }
      }

      return 'v'
    },
    leaveClass () {
      return this.transitionName + '-leave'
    },
    leaveActiveClass () {
      return this.transitionName + '-leave-active'
    },
    leaveToClass () {
      return this.transitionName + '-leave-to'
    }
  },
  watch: {
    mdTarget (newTarget, oldTarget) {
      this.changeParentEl(newTarget)

      if (oldTarget) {
        this.$forceUpdate()
      }
    }
  },
  methods: {
    getTransitionDuration () {
      const duration = window.getComputedStyle(this.$el).transitionDuration
      const num = parseFloat(duration, 10)
      let unit = duration.match(/m?s/)
      let milliseconds = null

      if (unit) {
        unit = unit[0]
      }

      switch (unit) {
        case 's':
          milliseconds = num * 1000
          break

        case 'ms':
          milliseconds = num
          break

        default:
          milliseconds = 0
          break
      }

      return milliseconds
    },
    killGhostElement () {
      if (this.$el.parentNode) {
        this.changeParentEl(this.originalParentEl)
        this.$options._parentElm = this.originalParentEl
        this.$el.parentNode.removeChild(this.$el)
      }
    },
    destroyElement () {
      window.requestAnimationFrame(() => {
        this.$el.classList.remove(this.leaveClass)
        this.$el.classList.remove(this.leaveActiveClass)
        this.$el.classList.remove(this.leaveToClass)
        this.$emit('md-destroy')
        this.killGhostElement()
      })
    },
    changeParentEl (newTarget) {
      newTarget && newTarget.appendChild(this.$el)
    }
  },
  mounted () {
    if (!this.originalParentEl) {
      this.originalParentEl = this.$el.parentNode
      this.$emit('md-initial-parent', this.$el.parentNode)
    }

    if (this.mdAttachToParent && this.$el.parentNode.parentNode) {
      this.changeParentEl(this.$el.parentNode.parentNode)
    } else {
      this.changeParentEl(this.mdTarget || document.body)
    }
  },
  async beforeDestroy () {
    if (this.$el.classList) {
      this.$el.classList.add(this.leaveClass)
      this.$el.classList.add(this.leaveActiveClass)
      await this.$nextTick()
      this.$el.classList.add(this.leaveToClass)

      window.clearTimeout(this.leaveTimeout)
      this.leaveTimeout = window.setTimeout(this.destroyElement, this.getTransitionDuration())
    } else {
      this.killGhostElement()
    }
  },
  render (createElement) {
    const defaultSlot = this.$slots.default

    if (defaultSlot && defaultSlot[0]) {
      return defaultSlot[0]
    }
  }
}
