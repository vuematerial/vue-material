<template>
  <div class="md-drawer" :class="[$mdActiveTheme, drawerClasses]">
    <slot />
    <md-overlay :md-visible="mdVisible" @click="closeDrawer" v-if="mdFixed" />
    <md-overlay :md-visible="mdVisible" @click="closeDrawer" md-attach-to-parent v-else />
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdOverlay from 'components/MdOverlay/MdOverlay'
  import MdPropValidator from 'core/utils/MdPropValidator'

  const drawerPermanentTypes = [
    'full',
    'clipped',
    'card'
  ]

  export default new MdComponent({
    name: 'MdDrawer',
    components: {
      MdOverlay
    },
    props: {
      mdLeft: Boolean,
      mdRight: Boolean,
      mdPermanent: {
        type: String,
        ...MdPropValidator('md-alignment', drawerPermanentTypes)
      },
      mdPersistent: Boolean,
      mdVisible: Boolean,
      mdFixed: Boolean
    },
    watch: {
      mdVisible (visible) {
        if (visible) {
          this.$emit('md-opened')
        } else {
          this.$emit('md-closed')
        }
      }
    },
    computed: {
      drawerClasses () {
        let classes = {
          'md-left': this.mdLeft,
          'md-right': this.mdRight,
          'md-temporary': this.isTemporary,
          'md-persistent': this.mdPersistent,
          'md-permanent': this.mdPermanent,
          'md-active': this.mdVisible,
          'md-fixed': this.mdFixed
        }

        if (this.mdPermanent) {
          classes['md-permanent-' + this.mdPermanent] = true
        }

        return classes
      },
      isTemporary () {
        return !this.mdPermanent && !this.mdPersistent
      },
      mode () {
        if (this.mdPersistent) {
          return 'persistent'
        }

        if (this.mdPermanent) {
          return 'permanent'
        }

        return 'temporary'
      }
    },
    methods: {
      closeDrawer () {
        this.$emit('update:mdVisible', false)
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";
  @import "~components/MdElevation/mixins";
  @import "~components/MdCard/base";

  @mixin md-drawer-temporary () {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 30;
    transform: translate3D(-100%, 0, 0);
    transition: transform .4s $md-transition-stand-timing;
    will-change: transform, box-shadow;
  }

  @mixin md-drawer-temporary-active () {
    transform: translate3D(0, 0, 0);
    transition-timing-function: $md-transition-default-timing;

    @include md-layout-xsmall {
      @include md-elevation(16);
    }
  }

  .md-drawer {
    @include md-drawer-temporary;
    width: 400px;
    max-width: calc(100vw - 56px);
    overflow: auto;

    @include md-layout-xsmall {
      width: 320px;
    }

    &.md-right {
      right: 0;
      left: auto;
      transform: translate3D(100%, 0, 0);
    }

    &.md-fixed {
      position: fixed;
    }

    &.md-active {
      @include md-drawer-temporary-active;
    }

    &:not(.md-temporary) {
      ~ .md-overlay {
        @include md-layout-small-and-up {
          background: none;
          pointer-events: none;
        }
      }
    }

    &.md-temporary {
      + .md-app-container .md-content {
        border-left: none;
      }
    }

    &.md-permanent {
      @include md-layout-small-and-up {
        position: relative;
        transform: translate3D(0, 0, 0);
      }
    }

    &.md-permanent-full {
      @include md-layout-small-and-up {
        height: 100%;
        z-index: 3;

        .md-list {
          padding-top: 0;
        }
      }
    }

    &.md-permanent-clipped,
    &.md-permanent-card {
      @include md-layout-small-and-up {
        z-index: 1;
      }
    }

    &.md-permanent-card {
      @include md-layout-small-and-up {
        @include md-card;
        margin: 8px;
        z-index: 1;
      }

      @include md-layout-medium-and-up {
        margin: 16px;
      }

      @include md-layout-large-and-up {
        margin: 24px;
      }
    }

    &.md-persistent {
      &:not(.md-active) {
        + .md-app-container .md-content {
          border-left: none;
        }
      }
    }

    .md-list-item-container {
      font-size: 14px;
    }
  }
</style>
