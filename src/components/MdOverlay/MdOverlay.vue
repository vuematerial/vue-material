<template>
  <md-portal :md-attach-to-parent="mdAttachToParent">
    <transition name="md-overlay">
      <div class="md-overlay" :class="overlayClasses" v-on="$listeners" v-if="mdActive"></div>
    </transition>
  </md-portal>
</template>

<script>
  import MdPortal from 'components/MdPortal/MdPortal'

  export default {
    name: 'MdOverlay',
    components: {
      MdPortal
    },
    props: {
      mdActive: Boolean,
      mdAttachToParent: Boolean,
      mdFixed: Boolean
    },
    computed: {
      overlayClasses () {
        return {
          'md-fixed': this.mdFixed
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    overflow: hidden;
    background: rgba(#000, .6);
    transition: .35s $md-transition-default-timing;
    transition-property: opacity;
    will-change: opacity;

    body > &,
    &.md-fixed {
      position: fixed;
    }
  }

  .md-overlay-enter,
  .md-overlay-leave-active {
    opacity: 0;
  }
</style>
