<template>
  <md-portal>
    <transition name="md-dialog">
      <div class="md-dialog" :class="[dialogClasses, $mdActiveTheme]" v-on="$listeners" @keydown.esc="onEsc" v-if="mdActive">
        <md-focus-trap>
          <div class="md-dialog-container">
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
        this.$emit('md-clicked-outside');
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
    @include md-elevation(24);
    min-width: 280px;
    max-width: 80%;
    max-height: 80%;
    margin: auto;
    display: flex;
    flex-flow: column;
    flex-direction: row;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 110;
    border-radius: 2px;
    backface-visibility: hidden;
    pointer-events: auto;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    transition: opacity .15s $md-transition-stand-timing,
                transform .2s $md-transition-stand-timing;
    will-change: opacity, transform, left, top;

    > .md-dialog-tabs,
    > .md-dialog-title,
    > .md-dialog-content,
    > .md-dialog-actions {
      transition: opacity .3s $md-transition-default-timing,
                  transform .25s $md-transition-default-timing;
      will-change: opacity, transform;
    }
  }

.md-dialog-enter-active,
  .md-dialog-leave-active {
    opacity: 0;
    transform: translate(-50%, -50%) scale(.9);

    > .md-dialog-tabs,
    > .md-dialog-title,
    > .md-dialog-content,
    > .md-dialog-actions {
      opacity: 0;
      transform: scale(.95) translate3D(0, 10%, 0);
    }
  }

  .md-dialog-container {
    display: flex;
    flex-flow: column;
    flex: 1;

    .md-tabs {
      flex: 1;
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
      max-width: 100%;
      max-height: 100%;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 0;
      transform: none;

      &.md-dialog-enter {
        opacity: 0;
        transform: translate3D(0, 30%, 0);
      }

      &.md-dialog-leave-active {
        opacity: 0;
        transform: translate3D(0, 0, 0);
      }
    }
  }
</style>
