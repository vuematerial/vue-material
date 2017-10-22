<template>
  <md-portal>
    <transition name="md-snackbar">
      <div class="md-snackbar" :class="[snackbarClasses, $mdActiveTheme]" v-if="mdActive">
        <div class="md-snackbar-content">
          <slot />
        </div>
      </div>
    </transition>
  </md-portal>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPropValidator from 'core/utils/MdPropValidator'
  import MdPortal from 'components/MdPortal/MdPortal'
  import { createSnackbar, destroySnackbar } from './MdSnackbarQueue'

  export default new MdComponent({
    name: 'MdSnackbar',
    components: {
      MdPortal
    },
    props: {
      mdActive: Boolean,
      mdDuration: {
        type: Number,
        default: 4000
      },
      mdPosition: {
        type: String,
        default: 'center',
      ...MdPropValidator('md-position', ['center', 'left'])
      }
    },
    computed: {
      snackbarClasses () {
        return {
          ['md-position-' + this.mdPosition]: true
        }
      }
    },
    watch: {
      async mdActive (isActive) {
        if (isActive) {
          await createSnackbar(this.mdDuration)

          this.$emit('update:mdActive', false)
        } else {
          destroySnackbar()
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";

  .md-snackbar {
    @include md-elevation(6);
    min-width: 288px;
    max-width: 568px;
    min-height: 48px;
    max-height: 80px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1000;
    border-radius: 2px;
    transition: .4s $md-transition-default-timing;
    will-change: background-color, color, opacity, transform;

    &.md-position-center {
      bottom: 0;
      left: 50%;
      transform: translate3D(-50%, 0, 0);

      &.md-snackbar-enter,
      &.md-snackbar-leave-active {
        transform: translate3D(-50%, calc(100% + 8px), 0);
      }
    }

    &.md-position-left {
      bottom: 24px;
      left: 24px;

      &.md-snackbar-enter,
      &.md-snackbar-leave-active {
        transform: translate3D(0, calc(100% + 32px), 0);
      }
    }
  }

  .md-snackbar-enter,
  .md-snackbar-leave-active {
    opacity: 0;

    .md-snackbar-content {
      opacity: 0;
    }
  }

  .md-snackbar-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: opacity .38s $md-transition-drop-timing;

    .md-button {
      min-width: 0;
      margin: 0 -12px 0 12px;
    }
  }
</style>
