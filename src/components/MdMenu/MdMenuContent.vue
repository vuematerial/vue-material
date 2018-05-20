<template>
  <md-popover :md-settings="popperSettings" :md-active="shouldRender">
    <transition name="md-menu-content" :css="didMount" v-if="shouldRender" v-on="$listeners">
      <div
        :class="[menuClasses, mdContentClass, $mdActiveTheme]"
        :style="menuStyles"
        ref="menu">
        <div class="md-menu-content-container md-scrollbar" :class="$mdActiveTheme" ref="container">
          <md-list :class="listClasses" v-bind="filteredAttrs">
            <slot />
          </md-list>
        </div>
      </div>
    </transition>
  </md-popover>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdPropValidator from 'core/utils/MdPropValidator'
  import MdObserveEvent from 'core/utils/MdObserveEvent'
  import MdResizeObserver from 'core/utils/MdResizeObserver'
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
      mdListClass: [String, Boolean],
      mdContentClass: [String, Boolean]
    },
    inject: ['MdMenu'],
    data: () => ({
      highlightIndex: -1,
      didMount: false,
      highlightItems: [],
      popperSettings: null,
      menuStyles: ''
    }),
    computed: {
      filteredAttrs () {
        const attrs = this.$attrs
        delete attrs.id
        return attrs
      },
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
      },
      listClasses () {
        return {
          'md-dense': this.MdMenu.dense,
          ...this.mdListClass
        }
      }
    },
    watch: {
      shouldRender (shouldRender) {
        if (shouldRender) {
          this.setPopperSettings()

          this.$nextTick().then(() => {
            this.setInitialHighlightIndex()
            this.createClickEventObserver()
            this.createResizeObserver()
            this.createKeydownListener()
          })
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
          const items = this.$el.querySelectorAll('.md-list-item-container:not(.md-list-item-default):not([disabled])')

          this.highlightItems = Array.from(items)
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
        const relativePosition = this.getBodyPosition()

        const offsetX = this.MdMenu.offsetX || 0
        const offsetY = this.MdMenu.offsetY || 0

        return {
          offsetX: offsetX - relativePosition.x,
          offsetY: offsetY - relativePosition.y
        }
      },
      hasCustomOffsets () {
        const { offsetX, offsetY, alignTrigger } = this.MdMenu

        return Boolean(alignTrigger || offsetY || offsetX)
      },
      isMenu ({ target }) {
        return this.MdMenu.$el ? this.MdMenu.$el.contains(target) : false
      },
      isMenuContentEl ({ target }) {
        return this.$refs.menu ? this.$refs.menu.contains(target) : false
      },
      isBackdropExpectMenu ($event) {
        return !this.$el.contains($event.target) && !this.isMenu($event)
      },
      createClickEventObserver () {
        if (document) {
          this.MdMenu.bodyClickObserver = new MdObserveEvent(document.body, 'click', $event => {
            $event.stopPropagation()

            if (!this.isMenu($event) && (this.MdMenu.closeOnClick || this.isBackdropExpectMenu($event))) {
              this.MdMenu.active = false
              this.MdMenu.bodyClickObserver.destroy()
              this.MdMenu.windowResizeObserver.destroy()
              this.destroyKeyDownListener()
            }
          })
        }
      },
      createKeydownListener () {
        window.addEventListener('keydown', this.keyNavigation)
      },
      destroyKeyDownListener () {
        window.removeEventListener('keydown', this.keyNavigation)
      },
      keyNavigation (event) {
        switch (event.key) {
        case 'ArrowUp':
          event.preventDefault()
          this.setHighlight('up')
          break

        case 'ArrowDown':
          event.preventDefault()
          this.setHighlight('down')
          break

        case 'Enter':
          this.setSelection()
          break

        case 'Space':
          this.setSelection()
          break

        case 'Escape':
          this.onEsc()
        }
      },
      createResizeObserver () {
        this.MdMenu.windowResizeObserver = new MdResizeObserver(window, this.setStyles)
      },
      setupWatchers () {
        this.$watch('MdMenu.direction', this.setPopperSettings)
        this.$watch('MdMenu.alignTrigger', this.setPopperSettings)
        this.$watch('MdMenu.offsetX', this.setPopperSettings)
        this.$watch('MdMenu.offsetY', this.setPopperSettings)
      },
      setStyles () {
        if (this.MdMenu.fullWidth) {
          this.menuStyles = `
            width: ${this.MdMenu.instance.$el.offsetWidth}px;
            max-width: ${this.MdMenu.instance.$el.offsetWidth}px
          `
        }
      },
      getBodyPosition() {
        const body = document.body
        const { top, left } = body.getBoundingClientRect()

        const scrollLeft = window.pageXOffset !== undefined ? window.pageXOffset : body.scrollLeft
        const scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : body.scrollTop

        return { x: left + scrollLeft, y: top + scrollTop }
      }
    },
    mounted () {
      this.$nextTick().then(() => {
        this.setHighlightItems()
        this.setupWatchers()
        this.setStyles()
        this.didMount = true
      })
    },
    beforeDestroy () {
      if (this.MdMenu.bodyClickObserver) {
        this.MdMenu.bodyClickObserver.destroy()
      }

      if (this.MdMenu.windowResizeObserver) {
        this.MdMenu.windowResizeObserver.destroy()
      }
      this.destroyKeyDownListener()
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
    max-height: 35vh;
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: 60;
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
  }

  .md-menu-content-container {
    flex: 1;
    overflow: auto;

    .md-list {
      transition: opacity .3s $md-transition-stand-timing;
      will-change: opacity;
      font-family: 'Roboto', sans-serif;
      text-transform: none;
      white-space: nowrap;

      .md-list-item-container {
        height: 100%;
      }

      @include md-layout-small {
        font-size: 14px;
      }
    }
  }
</style>
