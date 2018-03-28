<template>
  <div class="md-menu" v-on="$listeners">
    <slot />
  </div>
</template>

<script>
  import MdPropValidator from 'core/utils/MdPropValidator'

  export default {
    name: 'MdMenu',
    props: {
      mdActive: Boolean,
      mdAlignTrigger: Boolean,
      mdOffsetX: Number,
      mdOffsetY: Number,
      mdFullWidth: Boolean,
      mdDense: Boolean,
      mdDirection: {
        type: String,
        default: 'bottom-start',
        ...MdPropValidator('md-direction', [
          'top-end',
          'top-start',
          'bottom-end',
          'bottom-start'
        ])
      },
      mdCloseOnSelect: {
        type: Boolean,
        default: true
      },
      mdCloseOnClick: {
        type: Boolean,
        default: false
      },
      mdSize: {
        type: String,
        default: 'small',
        ...MdPropValidator('md-size', [
          'auto',
          'small',
          'medium',
          'big',
          'huge'
        ])
      }
    },
    data () {
      return {
        triggerEl: null,
        MdMenu: {
          instance: this,
          active: this.mdActive,
          direction: this.mdDirection,
          size: this.mdSize,
          alignTrigger: this.mdAlignTrigger,
          offsetX: this.mdOffsetX,
          offsetY: this.mdOffsetY,
          fullWidth: this.mdFullWidth,
          dense: this.mdDense,
          closeOnSelect: this.mdCloseOnSelect,
          closeOnClick: this.mdCloseOnClick,
          bodyClickObserver: null,
          windowResizeObserver: null,
          $el: this.$el
        }
      }
    },
    provide () {
      return {
        MdMenu: this.MdMenu
      }
    },
    computed: {
      isActive () {
        return this.MdMenu.active
      }
    },
    watch: {
      mdActive: {
        immediate: true,
        handler (isActive) {
          this.MdMenu.active = isActive
        }
      },
      mdDirection (direction) {
        this.MdMenu.direction = direction
      },
      mdSize (size) {
        this.MdMenu.size = size
      },
      mdAlignTrigger (aligned) {
        this.MdMenu.alignTrigger = aligned
      },
      mdOffsetX (offset) {
        this.MdMenu.offsetX = offset
      },
      mdOffsetY (offset) {
        this.MdMenu.offsetY = offset
      },
      isActive (isActive) {
        this.$emit('update:mdActive', isActive)

        if (!isActive) {
          this.$emit('md-closed')
        } else {
          this.$emit('md-opened')
        }
      },
      mdCloseOnSelect () {
        this.MdMenu.closeOnSelect  = this.mdCloseOnSelect
      },
      mdCloseOnClick () {
        this.MdMenu.closeOnClick  = this.mdCloseOnClick
      }
    },
    methods: {
      toggleContent ($event) {
        this.MdMenu.active = !this.MdMenu.active
      }
    },
    mounted () {
      this.MdMenu.$el = this.$el

      this.$nextTick().then(() => {
        this.triggerEl = this.$el.querySelector('[md-menu-trigger]')

        if (this.triggerEl) {
          this.triggerEl.addEventListener('click', this.toggleContent)
        }
      })
    },
    beforeDestroy () {
      if (this.triggerEl) {
        this.triggerEl.removeEventListener('click', this.toggleContent)
      }
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";

  .md-menu {
    display: inline-block;

    > .md-button {
      margin: 0;
    }
  }
</style>
