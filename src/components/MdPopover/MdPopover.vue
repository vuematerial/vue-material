<template>
  <md-portal class="md-popover" v-bind="$attrs" :class="popoverClasses" :md-if="shouldRender" @md-original-parent="setOriginalParent" @md-destroy="killPopper">
    <slot />
  </md-portal>
</template>

<script>
  import Popper from 'popper.js'
  import deepmerge from 'deepmerge'
  import MdPortal from 'components/MdPortal/MdPortal'

  export default {
    name: 'MdPopover',
    components: {
      MdPortal
    },
    props: {
      mdIf: Boolean,
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
      mdIf (shouldRender) {
        this.shouldRender = shouldRender

        if (shouldRender) {
          this.bindPopper()
        } else {
          this.shouldActivate = false
        }
      },
      mdSettings (settings) {
        if (this.popperInstance) {
          this.popperInstance.options = deepmerge(this.getPopperOptions(), settings)
          this.popperInstance.scheduleUpdate()
        }
      }
    },
    methods: {
      getPopperOptions () {
        return {
          placement: 'bottom',
          modifiers: {
            preventOverflow: {
              padding: 8
            },
            computeStyle: {
              gpuAcceleration: false
            }
          },
          onCreate: () => {
            this.shouldActivate = true
          }
        }
      },
      setOriginalParent (el) {
        this.originalParentEl = el
      },
      killPopper () {
        if (this.popperInstance) {
          this.popperInstance.destroy()
          this.popperInstance = null
        }
      },
      async bindPopper () {
        await this.$nextTick()

        const el = this.$children[0].$el

        if (this.originalParentEl) {
          const options = deepmerge(this.getPopperOptions(), this.mdSettings)

          this.popperInstance = new Popper(this.originalParentEl, el, options)
        }
      }
    },
    beforeDestroy () {
      this.killPopper()
    }
  }
</script>

<style lang="scss">
  .md-popover {
    &.md-rendering {
      opacity: 0;
    }
  }
</style>
