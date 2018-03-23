<template>
  <md-portal v-if="mdPersistent && mdDuration !== Infinity">
    <keep-alive>
      <md-snackbar-content :md-classes="[snackbarClasses, $mdActiveTheme]" v-if="mdActive">
        <slot />
      </md-snackbar-content>
    </keep-alive>
  </md-portal>

  <md-portal v-else>
    <md-snackbar-content :md-classes="[snackbarClasses, $mdActiveTheme]" v-if="mdActive">
      <slot />
    </md-snackbar-content>
  </md-portal>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPropValidator from 'core/utils/MdPropValidator'
  import MdPortal from 'components/MdPortal/MdPortal'
  import MdSnackbarContent from './MdSnackbarContent'
  import { createSnackbar, destroySnackbar } from './MdSnackbarQueue'

  export default new MdComponent({
    name: 'MdSnackbar',
    components: {
      MdPortal,
      MdSnackbarContent
    },
    props: {
      mdActive: Boolean,
      mdPersistent: Boolean,
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
      mdActive (isActive) {
        if (isActive) {
          createSnackbar(this.mdDuration, this.mdPersistent, this).then(() => {
            this.$emit('update:mdActive', false)
            this.$emit('md-opened')
          })
        } else {
          destroySnackbar()
          this.$emit('md-closed')
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";
  @import "~components/MdElevation/mixins";

  .md-snackbar {
    @include md-elevation(6);
    min-width: 288px;
    max-width: 568px;
    min-height: 48px;
    max-height: 80px;
    padding: 14px 24px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1000;
    border-radius: 2px;
    transition: .4s $md-transition-default-timing;
    will-change: background-color, color, opacity, transform;

    &.md-position-center {
      margin: 0 auto;
      right: 0;
      bottom: 0;
      left: 0;

      &.md-snackbar-enter,
      &.md-snackbar-leave-active {
        transform: translate3D(0, calc(100% + 8px), 0);
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

    @include md-layout-xsmall {
      left: 0;
      transform: none;
      border-radius: 0;
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
      margin: -8px -8px -8px 36px;

      @include md-layout-xsmall {
        margin-left: 12px;
      }

      + .md-button {
        margin-left: 16px;
      }
    }
  }
</style>
