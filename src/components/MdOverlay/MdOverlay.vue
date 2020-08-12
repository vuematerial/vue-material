<template>
  <md-portal :md-attach-to-parent="mdAttachToParent" :mdTarget="mdTarget">
    <transition name="md-overlay">
      <div class="md-overlay" :class="overlayClasses" v-on="$listeners" v-if="mdActive"></div>
    </transition>
  </md-portal>
</template>

<script>
import Vue from 'vue'
import MdPortal from "components/MdPortal/MdPortal";

export default {
  name: "MdOverlay",
  components: {
    MdPortal,
  },
  props: {
    mdTarget: {
      type: null,
      validator(value) {
        if (HTMLElement && value && value instanceof HTMLElement) {
          return true;
        }

        Vue.util.warn(
          "The md-target-el prop is invalid. You should pass a valid HTMLElement.",
          this
        );

        return false;
      },
    },
    mdActive: Boolean,
    mdAttachToParent: Boolean,
    mdFixed: Boolean,
  },
  computed: {
    overlayClasses() {
      return {
        "md-fixed": this.mdFixed,
      };
    },
  },
};
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
  background: rgba(#000, 0.6);
  transition: 0.35s $md-transition-default-timing;
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
