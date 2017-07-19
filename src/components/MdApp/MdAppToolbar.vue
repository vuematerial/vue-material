<template>
  <md-toolbar class="md-app-toolbar" v-bind="$attrs" v-on="$listeners" :class="toolbarClasses" :style="toolbarStyles">
    <slot></slot>
  </md-toolbar>
</template>

<script>
  export default {
    name: 'MdAppToolbar',
    inject: ['MdApp'],
    computed: {
      toolbarClasses () {
        return {
          'md-no-elevation': !this.MdApp.toolbar.hasElevation,
          'md-reveal-active': this.MdApp.toolbar.revealActive
        }
      },
      toolbarStyles () {
        return {
          'top': `${this.MdApp.toolbar.top}px`
        }
      }
    },
    mounted () {
      const title = this.$el.querySelector('.md-title, .md-display-1')

      this.MdApp.toolbar.element = this.$el
      this.MdApp.toolbar.titleElement = title

      if (title) {
        this.MdApp.toolbar.titleSize = parseInt(window.getComputedStyle(title).fontSize, 10)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~components/MdAnimation/variables";

  .md-no-elevation {
    box-shadow: none !important;
  }

  .md-reveal,
  .md-flexible {
    .md-reveal-active {
      transform: translate3d(0, calc(100% + 10px), 0);
      transition: .3s $md-transition-stand-timing;
      transition-property: box-shadow, transform;
      will-change: height, box-shadow, transform;
    }
  }
</style>
