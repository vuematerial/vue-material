<template>
  <md-portal class="md-dialog" :class="dialogClasses" md-transition-name="md-dialog" :md-if="mdActive">
    <md-focus-trap>
      <div class="md-dialog-container" :class="[$mdActiveTheme]" @keydown.esc="onEsc">
        <slot />
      </div>
    </md-focus-trap>

    <md-overlay md-fixed :md-visible="mdActive" @click="onClick" v-if="mdBackdrop" />
  </md-portal>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPortal from 'components/MdPortal/MdPortal'
  import MdOverlay from 'components/MdOverlay/MdOverlay'
  import MdFocusTrap from 'components/MdFocusTrap/MdFocusTrap'

  export default new MdComponent({
    name: 'MdDialog',
    components: {
      MdPortal,
      MdOverlay,
      MdFocusTrap
    },
    props: {
      mdActive: Boolean,
      mdBackdrop: {
        type: Boolean,
        default: true
      },
      mdCloseOnEsc: {
        type: Boolean,
        default: true
      },
      mdClickOutsideToClose: {
        type: Boolean,
        default: true
      },
      mdFullscreen: {
        type: Boolean,
        default: true
      },
      mdAnimateFromSource: Boolean
    },
    computed: {
      dialogClasses () {
        return {
          'md-dialog-fullscreen': this.mdFullscreen
        }
      }
    },
    watch: {
      async mdActive (isActive) {
        await this.$nextTick()

        if (isActive) {
          /* const target = document.activeElement
          const container = this.$children[0].$el.querySelector('.md-dialog-container')
          const targetRect = target.getBoundingClientRect()
          const containerRect = container.getBoundingClientRect()

          container.style.transition = `none`
          container.style.position = `fixed`
          container.style.top = `${targetRect.y}px`
          container.style.left = `${targetRect.x}px`
          container.style.transform = `scale(.1)`
          container.style.transformOrigin = `top left`

          await this.$nextTick()

          container.style.transition = `.4s ease`
          container.style.top = `50%`
          container.style.left = `50%`
          container.style.transform = 'translate3D(-50%, -50%, 0)' */

          this.$emit('md-opened')
        } else {
          this.$emit('md-closed')
        }
      }
    },
    methods: {
      closeDialog () {
        this.$emit('update:mdActive', false)
      },
      onClick () {
        if (this.mdClickOutsideToClose) {
          this.closeDialog()
        }
      },
      onEsc () {
        if (this.mdCloseOnEsc) {
          this.closeDialog()
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";
  @import "~components/MdElevation/mixins";

  .md-dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 110;
    transition: .4s;
    pointer-events: none;
  }

  .md-dialog-container {
    @include md-elevation(24);
    min-width: 280px;
    max-width: 80%;
    max-height: 80%;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    border-radius: 2px;
    backface-visibility: hidden;
    pointer-events: auto;
    transform-origin: center center;
    transition: opacity .2s $md-transition-stand-timing,
                transform .4s $md-transition-stand-timing;
    will-change: opacity, transform, left, top;

    > * {
      transition: .4s $md-transition-default-timing;
      transition-property: opacity, transform;
      will-change: opacity, transform;
    }
  }

  .md-dialog-enter,
  .md-dialog-leave-active {
    .md-dialog-container {
      opacity: 0;
      transform: scale(.9, .85);

      > * {
        opacity: 0;
        transform: scale(.95) translate3D(0, 15%, 0);
      }
    }
  }

  .md-dialog-fullscreen {
    @include md-layout-xsmall {
      &.md-dialog-enter {
        .md-dialog-container {
          opacity: 0;
          transform: translate3D(0, 30%, 0);
        }
      }

      &.md-dialog-leave-active {
        .md-dialog-container {
          opacity: 0;
          transform: translate3D(0, 0, 0);
        }
      }

      .md-dialog-container {
        max-width: 100%;
        max-height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 0;
      }
    }
  }
</style>
