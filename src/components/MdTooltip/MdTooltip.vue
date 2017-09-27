<template>
  <md-popover
    class="md-tooltip"
    :class="[tooltipClasses, $mdActiveTheme]"
    :style="tooltipStyles"
    md-transition-name="md-tooltip"
    md-follow-el="original"
    :md-settings="popperSettings"
    :md-if="shouldRender">
    <slot />
  </md-popover>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPropValidator from 'core/utils/MdPropValidator'
  import MdPopover from 'components/MdPopover/MdPopover'

  export default new MdComponent({
    name: 'MdTooltip',
    components: {
      MdPopover
    },
    props: {
      mdActive: Boolean,
      mdDelay: {
        type: [String, Number],
        default: 0
      },
      mdDirection: {
        type: String,
        default: 'bottom',
        ...MdPropValidator('md-direction', ['top', 'right', 'bottom', 'left'])
      }
    },
    data: () => ({
      shouldRender: false,
      targetEl: null
    }),
    computed: {
      tooltipClasses () {
        return 'md-tooltip-' + this.mdDirection
      },
      tooltipStyles () {
        return `transition-delay: ${this.mdDelay}ms`
      },
      popperSettings () {
        return {
          placement: this.mdDirection,
          modifiers: {
            offset: {
              offset: '0, 8'
            }
          }
        }
      }
    },
    watch: {
      mdActive () {
        this.shouldRender = this.mdActive
      }
    },
    methods: {
      show () {
        this.shouldRender = true
      },
      hide () {
        this.$emit('update:mdActive', false)
        this.shouldRender = false
      }
    },
    async mounted () {
      await this.$nextTick()

      this.shouldRender = this.mdActive
      this.targetEl = this.$children[0].originalParentEl
      this.targetEl.addEventListener('mouseenter', this.show, false)
      this.targetEl.addEventListener('mouseleave', this.hide, false)
    },
    beforeDestroy () {
      this.targetEl.removeEventListener('mouseenter', this.show)
      this.targetEl.removeEventListener('mouseleave', this.hide)
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";

  $md-tooltip-height: 22px;
  $md-tooltip-height-mobile: 32px;

  .md-tooltip {
    height: $md-tooltip-height;
    padding: 0 8px;
    position: fixed;
    z-index: 60;
    pointer-events: none;
    border-radius: 2px;
    opacity: 0;
    transition: .15s $md-transition-enter-timing;
    transition-property: opacity, transform;
    will-change: opacity, transform, top, left !important;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    line-height: $md-tooltip-height;
    text-transform: none;
    white-space: nowrap;

    @include md-layout-small {
      height: $md-tooltip-height-mobile;
      font-size: 14px;
      line-height: $md-tooltip-height-mobile;
    }

    &.md-tooltip-top {
      transform: translate3d(0, 3px, 0) scale(.95);
    }

    &.md-tooltip-right {
      transform: translate3d(-3px, 0, 0) scale(.95);
    }

    &.md-tooltip-bottom {
      transform: translate3d(0, -3px, 0) scale(.95);
    }

    &.md-tooltip-left {
      transform: translate3d(3px, 0, 0) scale(.95);
    }

    &.md-active {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transition-timing-function: $md-transition-leave-timing;
    }
  }
</style>
