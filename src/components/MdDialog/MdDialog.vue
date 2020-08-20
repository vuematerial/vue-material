<template>
  <md-portal>
    <transition name="md-dialog">
      <div class="md-dialog" v-if="mdActive">
        <md-focus-trap>
          <div class="md-dialog-container" :class="[dialogContainerClasses, $mdActiveTheme]" v-on="$listeners"
               @keydown.esc="onEsc">
            <slot />
            <keep-alive>
              <md-overlay :class="mdBackdropClass" md-fixed :md-active="mdActive" @click="onClick" v-if="mdBackdrop" />
            </keep-alive>
          </div>
        </md-focus-trap>
      </div>
    </transition>
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
      mdBackdropClass: {
        type: String,
        default: 'md-dialog-overlay'
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
          'md-active': this.mdActive
        }
      },
      dialogContainerClasses () {
        return {
          'md-dialog-fullscreen': this.mdFullscreen
        }
      }
    },
    watch: {
      mdActive (isActive) {
        this.$nextTick().then(() => {
          if (isActive) {
            this.$emit('md-opened')
          } else {
            this.$emit('md-closed')
          }
        })
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
        this.$emit('md-clicked-outside')
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

  $opacity-transition-duration: .15s;
  $transform-transition-duration: .20s;
  $max-duration: max($opacity-transition-duration, $transform-transition-duration);

  .md-dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    display: flex;
    transition-duration: $max-duration;
    z-index: 110;

    &.md-dialog-leave,
    &.md-dialog-enter-to {
      .md-dialog-container {
        opacity: 1;
        transform: scale(1);
      }

      .md-dialog-fullscreen {
        @include md-layout-xsmall {
          opacity: 0;
          transform: translate(0, 30%);
        }
      }
    }

    &.md-dialog-enter,
    &.md-dialog-leave-to {
      .md-dialog-container {
        opacity: 0;
        transform: scale(.9);
      }

      .md-dialog-fullscreen {
        @include md-layout-xsmall {
          opacity: 1;
          transform: translate(0, 0);
        }
      }
    }

  }

  .md-dialog-container {
    @include md-elevation(24);
    min-width: 280px;
    max-width: 80%;
    max-height: 80%;
    margin: auto;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    border-radius: 2px;
    backface-visibility: hidden;
    pointer-events: auto;
    opacity: 1;
    transform-origin: center center;
    transition: opacity $opacity-transition-duration $md-transition-stand-timing, transform $transform-transition-duration $md-transition-stand-timing;
    will-change: opacity, transform;

    &.md-dialog-leave,
    &.md-dialog-enter-to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    &.md-dialog-enter,
    &.md-dialog-leave-to {
      opacity: 0;
      transform: translate(-50%, -50%) scale(.9);
    }
  }

  .md-dialog-container {
    .md-tabs {
      flex: 1;
      max-width: 100%;
    }

    .md-tabs-navigation {
      padding: 0 12px;
    }

    .md-tab {
      @include md-layout-xsmall {
        padding: 12px;
      }
    }
  }

  .md-dialog-fullscreen {
    @include md-layout-xsmall {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: 0;
      transform: none;

      &.md-dialog-enter,
      &.md-dialog-leave-to {
        opacity: 0;
        transform: translate3D(0, 30%, 0);
      }

      &.md-dialog-leave,
      &.md-dialog-enter-to {
        opacity: 1;
        transform: translate3D(0, 0, 0);
      }
    }
  }
</style>
