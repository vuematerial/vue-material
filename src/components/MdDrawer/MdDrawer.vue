<template>
  <div class="md-drawer" :class="[$mdActiveTheme, drawerClasses]">
    <slot />
    <md-overlay :md-visible="mdVisible" md-body-attach @click="closeDrawer" v-if="mdFixed" />
    <md-overlay :md-visible="mdVisible" @click="closeDrawer" v-else />
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdOverlay from 'core/MdOverlay/MdOverlay'

  export default new MdComponent({
    name: 'MdDrawer',
    components: {
      MdOverlay
    },
    props: {
      mdVisible: Boolean,
      mdFixed: Boolean
    },
    watch: {
      mdVisible (visible) {
        if (visible) {
          this.$emit('md-opened')
        }
      }
    },
    computed: {
      drawerClasses () {
        return {
          'md-active': this.mdVisible,
          'md-fixed': this.mdFixed
        }
      }
    },
    methods: {
      closeDrawer () {
        this.$emit('md-closed')
        this.$emit('update:mdVisible', false)
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
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 30;
    transform: translate3d(-100%, 0, 0);
    transition: .4s $md-transition-default-timing;
    transition-property: box-shadow, transform;
    will-change: box-shadow, transform;

    @include md-layout-xsmall {
      width: 320px;
      max-width: calc(100vw - 56px);
    }

    &.md-fixed {
      position: fixed;
    }

    &.md-right {
      right: 0;
      left: auto;
      transform: translate3d(100%, 0, 0);
    }

    &.md-active {
      transform: translate3d(0, 0, 0);
      @include md-elevation(16);
    }
  }
</style>
