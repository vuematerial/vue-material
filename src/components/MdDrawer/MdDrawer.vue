<template>
  <div class="md-drawer" :class="[$mdActiveTheme, drawerClasses]" :style="drawerStyles">
    <slot />
    <md-overlay :md-visible="mdVisible" md-body-attach @click="closeDrawer" v-if="isTemporary && mdFixed" />
    <md-overlay :md-visible="mdVisible" @click="closeDrawer" v-else-if="isTemporary && !mdFixed" />
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdOverlay from 'core/MdOverlay/MdOverlay'

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
      mdPermanent: {
        type: String,
        validate: value => !!drawerPermanentTypes[value]
      },
      mdPersistent: Boolean,
      mdVisible: Boolean,
      mdFixed: Boolean
    },
    data: () => ({
      drawerWidth: null
    }),
    watch: {
      mdVisible (visible) {
        if (visible) {
          this.$emit('md-opened')
        }
      }
    },
    computed: {
      drawerClasses () {
        let classes = {
          'md-temporary': this.isTemporary,
          'md-persistent': this.mdPersistent,
          'md-active': this.mdVisible || this.mdPermanent,
          'md-fixed': this.mdFixed
        }

        if (this.mdPermanent) {
          classes['md-permanent-' + this.mdPermanent] = true
        }

        return classes
      },
      drawerStyles () {
        if (this.canPullDrawer) {
          return {
            'margin-left': this.getDrawerWidth()
          }
        }
      },
      canPullDrawer () {
        return this.mdPersistent && !this.mdVisible
      },
      isTemporary () {
        return !this.mdPermanent && !this.mdPersistent
      }
    },
    methods: {
      getDrawerWidth () {
        let drawerWidth = this.$el ? this.$el.offsetWidth : 0

        return -drawerWidth + 'px'
      },
      closeDrawer () {
        this.$emit('md-closed')
        this.$emit('update:mdVisible', false)
      }
    },
    mounted () {
      if (this.canPullDrawer) {
        this.$el.style.marginLeft = this.getDrawerWidth()
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";
  @import "~components/MdElevation/mixins";

  .md-drawer {
    width: 400px;
    max-width: calc(100vw - 56px);
    position: relative;
    z-index: 1;
    overflow: auto;

    @include md-layout-xsmall {
      width: 320px;
    }

    &.md-temporary {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 30;
      transform: translate3D(-100%, 0, 0);
      transition: transform .4s $md-transition-stand-timing;
      will-change: transform, box-shadow;

      &.md-active {
        transition-timing-function: $md-transition-default-timing;
        @include md-elevation(16);
        transform: translate3D(0, 0, 0);
      }
    }

    &.md-permanent-clipped,
    &.md-permanent-card {
      z-index: 1;
    }

    &.md-permanent-full {
      height: 100%;
      z-index: 3;

      .md-list {
        padding-top: 0;
      }
    }

    &.md-permanent-card {
      /* TODO: Remove styles to inherit from md-card */
      @include md-elevation(2);
      margin: 16px;
      overflow: hidden;
      border-radius: 2px;

      @include md-layout-xsmall {
        margin: 8px;
      }
    }

    &.md-persistent {
      transition: .4s $md-transition-stand-timing;
      transition-property: max-width, margin-left;
      will-change: max-width, margin-left;

      /* TODO: Create a way to use transform instead of margin */
      &,
      ~ * {
        margin-left: 0;
        transform: translate3D(0, 0, 0);
      }

      &.md-active {
        transition-timing-function: $md-transition-default-timing;
      }
    }

    &.md-right {
      right: 0;
      left: auto;
      transform: translate3D(100%, 0, 0);
    }

    &.md-fixed {
      position: fixed;
    }

    .md-list-item-container {
      font-size: 14px;
    }
  }
</style>
