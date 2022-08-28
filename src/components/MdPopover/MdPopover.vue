<script>
  import Popper from 'popper.js'
  import deepmerge from 'deepmerge'
  import MdPortal from 'components/MdPortal/MdPortal'

  export default {
    name: 'MdPopover',
    abstract: true,
    components: {
      MdPortal
    },
    props: {
      mdActive: Boolean,
      mdSettings: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({
      popperInstance: null,
      originalParentEl: null,
      shouldRender: false,
      shouldActivate: false
    }),
    computed: {
      popoverClasses () {
        if (this.shouldActivate) {
          return 'md-active'
        } else if (this.shouldRender) {
          return 'md-rendering'
        }
      }
    },
    watch: {
      mdActive: {
        immediate: true,
        handler (shouldRender) {
          this.shouldRender = shouldRender

          if (shouldRender) {
            this.bindPopper()
          } else {
            this.shouldActivate = false
          }
        }
      },
      mdSettings () {
        if (this.popperInstance) {
          this.createPopper()
        }
      }
    },
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
            this.shouldActivate = true
            this.$emit('md-active')
          }
        }
      },
      setOriginalParent (el) {
        if (!this.originalParentEl) {
          this.originalParentEl = el
        }
      },
      killPopper () {
        if (this.popperInstance) {
          this.popperInstance.destroy()
          this.popperInstance = null
        }
      },
      bindPopper () {
        this.$nextTick().then(() => {
          if (this.originalParentEl) {
            this.createPopper()
          }
        })
      },
      createPopper () {
        if (this.mdSettings) {
          const options = deepmerge(this.getPopperOptions(), this.mdSettings)

          if (this.$el.nodeType !== Node.COMMENT_NODE) {
            this.popperInstance = new Popper(this.originalParentEl, this.$el, options)
          }
        }
      },
      resetPopper () {
        if (this.popperInstance) {
          this.killPopper()
          this.createPopper()
        }
      }
    },
    beforeDestroy () {
      this.killPopper()
    },
    mounted () {
      this.resetPopper()
    },
    render (createElement) {
      return createElement(MdPortal, {
        props: {
          ...this.$attrs
        },
        on: {
          ...this.$listeners,
          'md-initial-parent': this.setOriginalParent,
          'md-destroy': this.killPopper
        }
      }, this.$slots.default)
    }
  }
</script>

<style lang="scss">
  .md-popover {
    &.md-rendering {
      opacity: 0;
      transition: none !important;
    }
  }
</style>
