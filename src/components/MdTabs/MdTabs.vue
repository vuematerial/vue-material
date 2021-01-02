<template>
  <div class="md-tabs" :class="[tabsClasses, $mdActiveTheme]">
    <div class="md-tabs-navigation" :class="navigationClasses" ref="navigation">
      <md-button
        v-for="({ id, label, props, icon, disabled, data, events }, index) in orderedItems"
        :key="index"
        class="md-tab-nav-button"
        :class="{
          'md-active': (!mdSyncRoute && isActiveTabId(id)),
          'md-icon-label': icon && label
        }"
        :disabled="disabled"
        v-bind="props"
        v-on="events"
        @click.native="setActiveTab(id)">
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
      <div ref="tabsContainer" class="md-tabs-container" :style="containerStyles">
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
  import MdButton from '../MdButton/MdButton'
  import MdContent from 'components/MdContent/MdContent'
  import MdSwipeable from 'core/mixins/MdSwipeable/MdSwipeable'

  function areEqual (array1, array2) {
    if (array1.length !== array2.length) {
      return false
    }

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false
      }
    }

    return true
  }

  export default new MdComponent({
    name: 'MdTabs',
    mixins: [MdAssetIcon, MdSwipeable],
    components: {
      MdButton,
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
      activeTab: null,
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
        items: new Map()
      },
      activeButtonEl: null,
      orderedIds: []
    }),
    provide () {
      return {
        MdTabs: this.MdTabs
      }
    },
    computed: {
      orderedItems () {
        return this.orderedIds.map(tabId => this.MdTabs.items.get(tabId))
      },
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
          this.recomputeOrderedIds()
          this.setHasContent()
          this.tryKeepCurrentTab()
        }
      },
      activeTab (tabId) {
        this.$emit('md-changed', tabId)
        this.setActiveButtonElAndIndicatorStyles()
      },
      mdActiveTab (tabId) {
        this.activeTab = tabId
      },
      activeButtonEl (activeButtonEl) {
        this.activeTabIndex = activeButtonEl ? [].indexOf.call(activeButtonEl.parentNode.childNodes, activeButtonEl) : -1
      },
      activeTabIndex () {
        this.setIndicatorStyles()
        this.calculateTabPos()
      },
      '$route' () {
        this.$nextTick(this.setActiveButtonEl)
      },
      swiped (value) {
        const max = this.orderedIds.length
        if (this.activeTabIndex < max && value === 'right') {
          this.setActiveTabByIndex(this.activeTabIndex + 1)
        } else if (this.activeTabIndex > 0 && value === 'left') {
          this.setActiveTabByIndex(this.activeTabIndex - 1)
        }
      }
    },
    methods: {
      isActiveTabId (id) {
        // A tab ID could be NaN (this is a valid Number value), but NaN is not equal to itself
        return (Number.isNaN(id) && Number.isNaN(this.activeTab)) || id === this.activeTab
      },
      hasActiveTab () {
        // Warning: a tab ID could be 0 (a falsy value),
        // or it could be NaN (this is a valid Number value),
        // but not null nor undefined (MdTabs.props.id is required):
        // so we use `!=` and not `!==` for comparison
        return this.activeTab != null || this.mdActiveTab != null
      },
      setActiveTab (tabId) {
        if (!this.mdSyncRoute) {
          this.activeTab = tabId
        }
      },
      setActiveButtonElAndIndicatorStyles () {
        this.$nextTick().then(() => {
          this.setIndicatorStyles()
          this.setActiveButtonEl()
        })
      },
      tryKeepCurrentTab () {
        if (this.mdSyncRoute) {
          return
        }

        const newIndexOfCurrentTabId = this.orderedIds.indexOf(this.activeTab)
        const canKeepCurrentTabId = newIndexOfCurrentTabId !== -1

        const lastTabIndex = this.orderedIds.length - 1
        const canKeepCurrentTabIndex = this.activeTabIndex >= 0 && this.activeTabIndex <= lastTabIndex

        const hasAtLeastOneTab = lastTabIndex !== -1

        if (canKeepCurrentTabId) {
          this.setActiveButtonElAndIndicatorStyles() // Refresh the tab by its new location
        } else if (canKeepCurrentTabIndex) {
          this.setActiveTabByIndex(this.activeTabIndex)
        } else if (hasAtLeastOneTab) {
          this.setActiveTabByIndex(lastTabIndex)
        } else {
          this.activeTab = null
        }
      },
      setActiveButtonEl () {
        this.activeButtonEl = this.$refs.navigation.querySelector('.md-tab-nav-button.md-active')
      },
      setActiveTabByIndex (index) {
        this.activeTab = this.orderedIds[index]
      },
      ensureHasActiveTab () {
        if (!this.hasActiveTab()) {
          this.activeTab = this.orderedIds[0]
        }
      },
      setHasContent () {
        this.hasContent = this.orderedItems.some(item => item.hasContent)
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
          const tabElements = this.ours(this.$refs.tabsContainer.querySelectorAll(`.md-tab:nth-child(${this.activeTabIndex + 1})`))
          const tabElement = tabElements.length ? tabElements[0] : null

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
      },
      recomputeOrderedIds () {
        const orderedIds = this.ours(this.$refs.tabsContainer.querySelectorAll('.md-tab'))
          .map(tabElement => tabElement.mdTabIdAsObject)

        // Do not force VueJs to rerender the view and us to recompute everything if the change event was not about tabs
        if (!areEqual(this.orderedIds, orderedIds)) {
          this.orderedIds = orderedIds
        }
      },
      /**
       * querySelector/querySelectorAll return all descendant elements, even elements from nested md-tabs.
       * @return only the md-tab elements that are owned by this md-tabs
       */
      ours (tabElements) {
        return [].filter.call(tabElements, tabElement => tabElement.parentNode === this.$refs.tabsContainer)
      }
    },
    created () {
      this.setIndicatorStyles = MdThrottling(this.setIndicatorStyles, 300)
      this.activeTab = this.mdActiveTab
    },
    mounted () {
      this.setupObservers()

      this.$nextTick().then(() => {
        if (!this.mdSyncRoute) {
          this.recomputeOrderedIds()
          this.ensureHasActiveTab()
        }

        return this.$nextTick()
      }).then(() => {
        window.setTimeout(() => {
          this.setActiveButtonEl()
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
