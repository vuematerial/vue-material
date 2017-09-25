<template>
  <div class="md-card-expand-content" :style="contentStyles">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'MdCardExpandContent',
    inject: ['MdCard'],
    data: () => ({
      marginTop: 0
    }),
    computed: {
      expand () {
        return this.MdCard.expand
      },
      contentStyles () {
        return {
          'margin-top': `-${this.marginTop}px`,
          'opacity': this.marginTop === 0 ? 1 : 0
        }
      }
    },
    watch: {
      expand (expand) {
        if (!expand) {
          this.marginTop = this.$el.children[0].offsetHeight
        } else {
          this.marginTop = 0
        }
      }
    },
    mounted () {
      this.marginTop = this.$el.children[0].offsetHeight
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-card-expand-content {
    overflow: hidden;
    transform: translate3D(0, 0, 0);
    transition: .4s $md-transition-default-timing;
    transition-property: opacity, margin-top;
    will-change: opacity, margin-top;
  }
</style>
