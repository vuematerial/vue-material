<template>
  <md-portal class="md-overlay" :class="{ 'md-fixed' : mdFixed}" :md-target-el="targetEl" v-on="$listeners" md-transition-name="md-overlay" :md-if="mdVisible" v-if="!mdAttachToParent || targetEl"></md-portal>
</template>

<script>
  import MdPortal from 'components/MdPortal/MdPortal'

  export default {
    name: 'MdOverlay',
    components: {
      MdPortal
    },
    props: {
      mdAttachToParent: Boolean,
      mdVisible: Boolean,
      mdFixed: Boolean
    },
    data: () => ({
      targetEl: null
    }),
    mounted () {
      if (this.mdAttachToParent) {
        this.targetEl = this.$el.parentNode.parentNode
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
