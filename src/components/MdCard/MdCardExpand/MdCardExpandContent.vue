<template>
  <div class="md-card-expand-content" :style="contentStyles">
    <slot />
  </div>
</template>

<script>
  import MdObserveElement from 'core/utils/MdObserveElement'
  export default {
    name: 'MdCardExpandContent',
    inject: ['MdCard'],
    data: () => ({
      marginTop: 0,
      resizeObserver: null,
      transitionEnabled: true
    }),
    computed: {
      expand () {
        return this.MdCard.expand
      },
      contentStyles () {
        return {
          'margin-top': `-${this.marginTop}px`,
          'opacity': this.marginTop === 0 ? 1 : 0,
          'transition-property': this.transitionEnabled ? null : 'none'
        }
      }
    },
    methods: {
      calculateMarginTop () {
        if (!this.expand) {
          this.marginTop = this.$el.children[0].offsetHeight
        } else {
          this.marginTop = 0
        }
      },
      calculateMarginTopImmediately () {
        if (this.expand) {
          return
        }

        this.transitionEnabled = false
        this.$nextTick(() => {
          this.calculateMarginTop()
          this.$nextTick(() => {
            // force reflow
            this.$el.offsetHeight
            this.transitionEnabled = true
          })
        })
      }
    },
    watch: {
      expand () {
        this.calculateMarginTop()
      }
    },
    mounted () {
      this.calculateMarginTopImmediately()

      this.resizeObserver = MdObserveElement(this.$el, {
        childList: true,
        characterData: true,
        subtree: true
      }, this.calculateMarginTopImmediately)
    },
    beforeDestroy () {
      this.resizeObserver.disconnect()
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-card-expand-content {
    overflow: hidden;
    transform: translate3D(0, 0, 0);
    transition: .4s $md-transition-default-timing;
    transition-property: opacity, margin-top;
    will-change: opacity, margin-top;
  }
</style>
