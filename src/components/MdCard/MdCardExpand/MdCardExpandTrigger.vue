<script>
  export default {
    name: 'MdCardExpandTrigger',
    inject: ['MdCard'],
    render (createElement) {
      const [trigger] = this.$slots.default
      const staticClass = ' md-card-expand-trigger'
      let listeners = {
        click: () => {
          this.MdCard.expand = !this.MdCard.expand
        }
      }

      if (trigger) {
        trigger.componentOptions.listeners = {
          ...trigger.componentOptions.listeners,
          ...listeners
        }
        trigger.data.staticClass += staticClass

        return trigger
      }

      return createElement('div', {
        staticClass,
        on: listeners
      })
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-card-expand-trigger.md-icon-button {
    transition: transform .4s $md-transition-stand-timing;
    will-change: transform;
  }
</style>
