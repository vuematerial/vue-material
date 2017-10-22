<template>
  <md-popover :md-settings="popperSettings" :md-active="shouldRender">
    <md-focus-trap v-if="shouldRender">
      <transition name="md-menu-content" :css="didMount">
        <div
          class="md-scrollbar"
          :class="[menuClasses, $mdActiveTheme]"
          @keydown.arrow-down.prevent="setHighlight('down')"
          @keydown.arrow-up.prevent="setHighlight('up')"
          @keydown.space.prevent="setSelection"
          @keydown.enter.prevent="setSelection">
          <md-list :class="mdListClass" v-bind="$attrs" @keydown.esc="onEsc">
            <slot />
          </md-list>
        </div>
      </transition>
    </md-focus-trap>
  </md-popover>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPropValidator from 'core/utils/MdPropValidator'
  import MdObserveEvent from 'core/utils/MdObserveEvent'
  import MdPopover from 'components/MdPopover/MdPopover'
  import MdFocusTrap from 'components/MdFocusTrap/MdFocusTrap'
  import MdList from 'components/MdList/MdList'

  export default new MdComponent({
    name: 'MdMenuContent',
    components: {
      MdPopover,
      MdFocusTrap,
      MdList
    },
    props: {
      mdListClass: [String, Boolean]
    },
    inject: ['MdMenu'],
    data: () => ({
      highlightIndex: -1,
      didMount: false,
      highlightItems: [],
      popperSettings: null
    }),
    computed: {
      highlightedItem () {
        return this.highlightItems[this.highlightIndex]
      },
      shouldRender () {
        return this.MdMenu.active
      },
      menuClasses () {
        const prefix = 'md-menu-content-'

        return {
          [prefix + this.MdMenu.direction]: true,
          [prefix + this.MdMenu.size]: true,
          'md-menu-content': this.didMount,
          'md-shallow': !this.didMount
        }
      }
    },
    watch: {
      shouldRender (shouldRender) {
        if (shouldRender) {
          this.setPopperSettings()

          window.setTimeout(() => {
            this.setInitialHighlightIndex()
            this.createClickEventObserver()
          }, 20)
        }
      }
    },
    methods: {
      setPopperSettings () {
        const { direction, alignTrigger } = this.MdMenu

        let { offsetX, offsetY } = this.getOffsets()

        if (!this.hasCustomOffsets()) {
          if (this.MdMenu.instance.$el && this.MdMenu.instance.$el.offsetHeight) {
            offsetY = -this.MdMenu.instance.$el.offsetHeight - 11
          }

          if (direction.includes('start')) {
            offsetX = -8
          } else if (direction.includes('end')) {
            offsetX = 8
          }
        }

        this.popperSettings = {
          placement: direction,
          modifiers: {
            keepTogether: {
              enabled: true
            },
            flip: {
              enabled: false
            },
            offset: {
              offset: `${offsetX}, ${offsetY}`
            }
          }
        }
      },
      setInitialHighlightIndex () {
        this.setHighlightItems()
        this.highlightItems.forEach((item, index) => {
          if (item.classList.contains('md-selected')) {
            this.highlightIndex = index - 1
          }
        })
      },
      setHighlightItems () {
        if (this.$el.querySelectorAll) {
          this.highlightItems = Array.from(this.$el.querySelectorAll('.md-list-item-container:not(.md-list-item-default):not([disabled])'))
        }
      },
      setHighlight (direction) {
        this.setHighlightItems()

        if (this.highlightItems.length) {
          if (direction === 'down') {
            if (this.highlightIndex === this.highlightItems.length - 1) {
              this.highlightIndex = 0
            } else {
              this.highlightIndex++
            }
          } else {
            if (this.highlightIndex === 0) {
              this.highlightIndex = this.highlightItems.length - 1
            } else {
              this.highlightIndex--
            }
          }

          this.clearAllHighlights()
          this.setItemHighlight()
        }
      },
      clearAllHighlights () {
        this.highlightItems.forEach(item => {
          item.parentNode.__vue__.highlighted = false
        })
      },
      setItemHighlight () {
        if (this.highlightedItem) {
          this.highlightedItem.parentNode.__vue__.highlighted = true
          if (this.$parent.$parent.setOffsets) {
            this.$parent.$parent.setOffsets(this.highlightedItem.parentNode)
          }
        }
      },
      setSelection () {
        if (this.highlightedItem) {
          this.highlightedItem.parentNode.click()
        }
      },
      onEsc () {
        this.MdMenu.active = false
      },
      getOffsets () {
        return {
          offsetX: this.MdMenu.offsetX || 0,
          offsetY: this.MdMenu.offsetY || 0
        }
      },
      hasCustomOffsets () {
        const { offsetX, offsetY, alignTrigger } = this.MdMenu

        return Boolean(alignTrigger || offsetY || offsetX)
      },
      createClickEventObserver () {
        this.MdMenu.eventObserver = new MdObserveEvent(document.body, 'click', $event => {
          if (!this.$el.contains($event.target)) {
            this.MdMenu.active = false
            this.MdMenu.eventObserver.destroy()
          }
        })
      },
      setupWatchers () {
        this.$watch('MdMenu.direction', this.setPopperSettings)
        this.$watch('MdMenu.alignTrigger', this.setPopperSettings)
        this.$watch('MdMenu.offsetX', this.setPopperSettings)
        this.$watch('MdMenu.offsetY', this.setPopperSettings)
      }
    },
    async mounted () {
      await this.$nextTick()
      this.setHighlightItems()
      this.setupWatchers()
      this.didMount = true
    },
    beforeDestroy () {
      if (this.MdMenu.eventObserver) {
        this.MdMenu.eventObserver.destroy()
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";
  @import "~components/MdLayout/mixins";

  $md-menu-base-width: 56px;

  .md-menu-content {
    @include md-elevation(8);
    min-width: $md-menu-base-width * 2;
    max-width: $md-menu-base-width * 5;
    max-height: 50vh;
    position: absolute;
    z-index: 60;
    overflow: auto;
    border-radius: 2px;
    transition: transform .2s $md-transition-stand-timing,
                opacity .3s $md-transition-stand-timing;
    will-change: opacity, transform, top, left !important;

    &.md-shallow {
      position: fixed !important;
      top: -9999em !important;
      left: -9999em !important;
      pointer-events: none;
    }

    &.md-menu-content-enter-active {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    &.md-menu-content-leave-active {
      transition: opacity .4s $md-transition-default-timing;
      opacity: 0;
    }

    &.md-menu-content-enter {
      &.md-menu-content-top-start {
        transform-origin: bottom left;
        transform: translate3d(0, 8px, 0) scaleY(.95);
      }

      &.md-menu-content-top-end {
        transform-origin: bottom right;
        transform: translate3d(0, 8px, 0) scaleY(.95);
      }

      &.md-menu-content-right-start {
        transform-origin: left top;
        transform: translate3d(0, -8px, 0) scaleY(.95);
      }

      &.md-menu-content-right-end {
        transform-origin: left bottom;
        transform: translate3d(0, 8px, 0) scaleY(.95);
      }

      &.md-menu-content-bottom-start {
        transform-origin: top left;
        transform: translate3d(0, -8px, 0) scaleY(.95);
      }

      &.md-menu-content-bottom-end {
        transform-origin: top right;
        transform: translate3d(0, -8px, 0) scaleY(.95);
      }

      &.md-menu-content-left-start {
        transform-origin: right top;
        transform: translate3d(0, -8px, 0) scaleY(.95);
      }

      &.md-menu-content-left-end {
        transform-origin: right bottom;
        transform: translate3d(0, 8px, 0) scaleY(.95);
      }

      .md-list {
        opacity: 0;
      }
    }

    &.md-menu-content-medium {
      min-width: $md-menu-base-width * 3;
    }

    &.md-menu-content-big {
      min-width: $md-menu-base-width * 4;
    }

    &.md-menu-content-huge {
      min-width: $md-menu-base-width * 5;
    }

    .md-list {
      transition: opacity .3s $md-transition-stand-timing;
      will-change: opacity;
      font-family: 'Roboto', sans-serif;
      text-transform: none;
      white-space: nowrap;

      @include md-layout-small {
        font-size: 14px;
      }
    }
  }
</style>
