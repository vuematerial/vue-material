<template>
  <div class="md-tabs" :class="[tabsClasses, $mdActiveTheme]">
    <div class="md-tabs-navigation" :class="navigationClasses" ref="navigation">
      <md-button
        v-for="({ label, props, icon, disabled, data, events }, index) in MdTabs.items"
        :key="index"
        class="md-tab-nav-button"
        :class="{
          'md-active': (!mdSyncRoute && index === activeTab),
          'md-icon-label': icon && label
        }"
        :disabled="disabled"
        v-bind="props"
        v-on="events"
        @click.native="setActiveTab(index)">
        <slot name="md-tab" :tab="{ label, icon, data }" v-if="$scopedSlots['md-tab']"></slot>

        <template v-else>
          <template v-if="!icon">{{ label }}</template>
          <template v-else>
            <md-icon class="md-tab-icon" v-if="isAssetIcon(icon)" :md-src="icon"></md-icon>
            <md-icon class="md-tab-icon" v-else>{{ icon }}</md-icon>
            <span class="md-tab-label">{{ label }}</span>
          </template>
        </template>
      </md-button>
      <span class="md-tabs-indicator" :style="indicatorStyles" :class="indicatorClass" ref="indicator"></span>
    </div>

    <md-content ref="tabsContent" class="md-tabs-content" :style="contentStyles" v-show="hasContent">
      <div class="md-tabs-container" :style="containerStyles">
        <slot />
      </div>
    </md-content>
  </div>
</template>

<script>
  import raf from 'raf'
  import MdComponent from 'core/MdComponent'
  import MdAssetIcon from 'core/mixins/MdAssetIcon/MdAssetIcon'
  import MdPropValidator from 'core/utils/MdPropValidator'
  import MdObserveElement from 'core/utils/MdObserveElement'
  import MdThrottling from 'core/utils/MdThrottling'
  import MdContent from 'components/MdContent/MdContent'
  import MdSwipeable from 'core/mixins/MdSwipeable/MdSwipeable'

  export default new MdComponent({
    name: 'MdTabs',
    mixins: [MdAssetIcon, MdSwipeable],
    components: {
      MdContent
    },
    props: {
      mdAlignment: {
        type: String,
        default: 'left',
        ...MdPropValidator('md-alignment', ['left', 'right', 'centered', 'fixed'])
      },
      mdElevation: {
        type: [Number, String],
        default: 0
      },
      mdSyncRoute: Boolean,
      mdDynamicHeight: Boolean,
      mdActiveTab: [String, Number],
      mdIsRtl: { type: Boolean, default: false }
    },
    data: () => ({
      resizeObserver: null,
      activeTab: 0,
      activeTabIndex: 0,
      indicatorStyles: {},
      indicatorClass: null,
      noTransition: true,
      containerStyles: {},
      contentStyles: {
        height: '0px'
      },
      hasContent: false,
      MdTabs: {
        items: {}
      },
      activeButtonEl: null
    }),
    provide () {
      return {
        MdTabs: this.MdTabs
      }
    },
    computed: {
      tabsClasses () {
        return {
          ['md-alignment-' + this.mdAlignment]: true,
          'md-no-transition': this.noTransition,
          'md-dynamic-height': this.mdDynamicHeight
        }
      },
      navigationClasses () {
        return 'md-elevation-' + this.mdElevation
      },
      mdSwipeElement () {
        return this.$refs.tabsContent.$el
      }
    },
    watch: {
      MdTabs: {
        deep: true,
        handler () {
          this.setHasContent()
        }
      },
      activeTab (index) {
        this.$emit('md-changed', index)
        this.$nextTick().then(() => {
          this.setIndicatorStyles()
          this.setActiveButtonEl()
        })
      },
      mdActiveTab (tab) {
        this.activeTab = tab
        this.$emit('md-changed', tab)
      },
      activeButtonEl (activeButtonEl) {
        this.activeTabIndex = activeButtonEl ? [].indexOf.call(activeButtonEl.parentNode.childNodes, activeButtonEl) : -1
      },
      activeTabIndex (index) {
        this.setIndicatorStyles()
        this.calculateTabPos()
      },
      '$route' () {
        this.$nextTick(this.setActiveButtonEl)
      },
      swiped (value) {
        const { keys } = this.getItemsAndKeys()
        const max = keys.length || 0
        if (this.activeTabIndex < max && value === 'right') {
          this.setSwipeActiveTabByIndex(this.activeTabIndex + 1)
        } else if (this.activeTabIndex > 0 && value === 'left') {
          this.setSwipeActiveTabByIndex(this.activeTabIndex - 1)
        }
      }
    },
    methods: {
      hasActiveTab () {
        return this.activeTab || this.mdActiveTab
      },
      getItemsAndKeys () {
        const items = this.MdTabs.items

        return {
          items,
          keys: Object.keys(items)
        }
      },
      setActiveTab (index) {
        if (!this.mdSyncRoute) {
          this.activeTab = index
        }
      },
      setActiveButtonEl () {
        this.activeButtonEl = this.$refs.navigation.querySelector('.md-tab-nav-button.md-active')
      },
      setSwipeActiveTabByIndex (index) {
        const { keys } = this.getItemsAndKeys()

        if (keys) {
          this.activeTab = keys[index]
        }
      },
      setActiveTabByIndex (index) {
        const { keys } = this.getItemsAndKeys()

        if (!this.hasActiveTab()) {
          this.activeTab = keys[index]
        }
      },
      setHasContent () {
        const { items, keys } = this.getItemsAndKeys()

        this.hasContent = keys.some(key => items[key].hasContent)
      },
      setIndicatorStyles () {
        raf(() => {
          this.$nextTick().then(() => {
            // this.setActiveButtonEl()
            if (this.activeButtonEl && this.$refs.indicator) {
              const buttonWidth = this.activeButtonEl.offsetWidth
              const buttonLeft = this.activeButtonEl.offsetLeft
              const indicatorLeft = this.$refs.indicator.offsetLeft

              if (indicatorLeft < buttonLeft) {
                this.indicatorClass = 'md-tabs-indicator-right'
              } else {
                this.indicatorClass = 'md-tabs-indicator-left'
              }

              this.indicatorStyles = {
                left: `${buttonLeft}px`,
                right: `calc(100% - ${buttonWidth + buttonLeft}px)`
              }
            } else {
              this.indicatorStyles = {
                left: '100%',
                right: '100%'
              }
            }
          })
        })
      },
      calculateTabPos () {
        if (this.hasContent) {
          const tabElement = this.$el.querySelector(`.md-tab:nth-child(${this.activeTabIndex + 1})`)

          this.contentStyles = {
            height: tabElement ? `${tabElement.offsetHeight}px` : 0
          }
          this.containerStyles = {
            transform: `translate3D(${this.mdIsRtl ? (this.activeTabIndex) * 100 : (-this.activeTabIndex) * 100}%, 0, 0)`
          }
        }
      },
      callResizeFunctions () {
        this.setIndicatorStyles()
        this.calculateTabPos()
      },
      setupObservers () {
        this.resizeObserver = MdObserveElement(this.$el.querySelector('.md-tabs-content'), {
          childList: true,
          characterData: true,
          subtree: true
        }, () => {
          this.callResizeFunctions()
        })

        window.addEventListener('resize', this.callResizeFunctions)
      }
    },
    created () {
      this.setIndicatorStyles = MdThrottling(this.setIndicatorStyles, 300)
      this.setHasContent()
      this.activeTab = this.mdActiveTab
    },
    mounted () {
      this.setupObservers()

      this.$nextTick().then(() => {
        if (!this.mdSyncRoute) {
          this.setActiveTabByIndex(0)
        }

        return this.$nextTick()
      }).then(() => {
        window.setTimeout(() => {
          this.setActiveButtonEl()
          this.activeTabIndex = [].indexOf.call(this.activeButtonEl.parentNode.childNodes, this.activeButtonEl)
          this.callResizeFunctions()
          this.noTransition = false
          this.setupObservers()
        }, 100)
      })

      this.$refs.navigation.addEventListener('transitionend', this.setIndicatorStyles)
    },
    beforeDestroy () {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect()
      }

      window.removeEventListener('resize', this.callResizeFunctions)
      this.$refs.navigation.removeEventListener('transitionend', this.setIndicatorStyles)
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";
  @import "~components/MdLayout/mixins";

  .md-tabs {
    display: flex;
    flex-direction: column;

    &.md-no-transition * {
      transition: none !important;
    }

    &.md-dynamic-height .md-tabs-content {
      transition: height .3s $md-transition-default-timing;
      will-change: height;
    }

    &.md-transparent {
      .md-tabs-navigation,
      .md-tabs-content {
        background-color: transparent !important;
      }
    }

    &.md-dynamic-height .md-tabs-content {
      transition: height .35s $md-transition-stand-timing;
    }

    &.md-alignment-left .md-tabs-navigation {
      justify-content: flex-start;
    }

    &.md-alignment-right .md-tabs-navigation {
      justify-content: flex-end;
    }

    &.md-alignment-centered .md-tabs-navigation {
      justify-content: center;
    }

    &.md-alignment-fixed .md-tabs-navigation {
      justify-content: center;

      .md-button {
        max-width: 264px;
        min-width: 160px;
        flex: 1;

        @include md-layout-small {
          min-width: 72px;
        }
      }
    }

    .md-toolbar & {
      padding-left: 48px;

      @include md-layout-small {
        margin: 0 -8px;
        padding-left: 0px;
      }
    }
  }

  .md-tabs-navigation {
    display: flex;
    position: relative;

    .md-button {
      max-width: 264px;
      min-width: 72px;
      height: 48px;
      margin: 0;
      cursor: pointer;
      border-radius: 0;
      font-size: 13px;
    }

    .md-button-content {
      position: static;
    }

    .md-icon-label {
      height: 72px;

      .md-button-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .md-tab-icon + .md-tab-label {
        margin-top: 10px;
      }
    }

    .md-ripple {
      padding: 0 24px;

      @include md-layout-small {
        padding: 0 12px;
      }
    }
  }

  .md-tabs-indicator {
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateZ(0);
    will-change: left, right;

    &.md-tabs-indicator-left {
      transition: left .3s $md-transition-default-timing,
                  right .35s $md-transition-default-timing;
    }

    &.md-tabs-indicator-right {
      transition: right .3s $md-transition-default-timing,
                  left .35s $md-transition-default-timing;
    }
  }

  .md-tabs-content {
    overflow: hidden;
    transition: none;
    will-change: height;
  }

  .md-tabs-container {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
    transform: translateZ(0);
    transition: transform .35s $md-transition-default-timing;
    will-change: transform;
  }

  .md-tab {
    width: 100%;
    flex: 1 0 100%;
    padding: 16px;

    @include md-layout-small {
      padding: 8px;
    }
  }
</style>
