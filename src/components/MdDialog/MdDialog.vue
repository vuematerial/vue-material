<template>
  <md-portal class="md-dialog" :class="[$mdActiveTheme]" md-transition-name="md-dialog" :md-if="mdActive">
    <slot />

    <md-overlay md-fixed :md-visible="mdActive" @click="closeDialog"></md-overlay>
  </md-portal>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPortal from 'components/MdPortal/MdPortal'
  import MdOverlay from 'components/MdOverlay/MdOverlay'

  export default new MdComponent({
    name: 'MdDialog',
    components: {
      MdPortal,
      MdOverlay
    },
    props: {
      mdActive: Boolean,
      mdAnimateFromSource: Boolean
    },
    methods: {
      closeDialog () {
        this.$emit('update:mdActive', false)
      }
    }
  })
  </script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";

  .md-dialog {
    @include md-elevation(24);
    min-width: 280px;
    max-width: 80%;
    max-height: 80%;
    display: flex;
    flex-flow: column;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 110;
    border-radius: 2px;
    transform: translate3D(-50%, -50%, 0);
    transform-origin: center center;
    transition: opacity .4s $md-transition-stand-timing,
                transform .4s .05s $md-transition-stand-timing,
                clip-path .35s $md-transition-default-timing;
    will-change: opacity, transform, left, top;
  }

  .md-dialog-enter,
  .md-dialog-leave-active {
    opacity: 0;
    transform: translate3D(-50%, -50%, 0) scale(.9, .85);
  }
</style>
