<template>
  <div class="md-tabs" :class="[themeClass, tabClasses]">
    <md-whiteframe md-tag="nav" class="md-tabs-navigation" :md-elevation="mdElevation" :class="navigationClasses" ref="tabNavigation">
      <div class="md-tabs-navigation-container" ref="tabsContainer" @scroll="handleNavigationScroll">
        <div class="md-tabs-navigation-scroll-container">
          <button
            v-for="header in tabList"
            :key="header.id"
            type="button"
            class="md-tab-header"
            :class="getHeaderClass(header)"
            :disabled="header.disabled"
            @click="setActiveTab(header)"
            ref="tabHeader">
            <md-ink-ripple :md-disabled="header.disabled"></md-ink-ripple>

            <div class="md-tab-header-container">
              <slot name="header-item" :header="header">
                <md-icon v-if="header.icon">{{ header.icon }}</md-icon>
                <md-icon v-else-if="header.iconset" :md-iconset="header.iconset">{{ header.icon }}</md-icon>
                <md-icon v-else-if="header.iconSrc" :md-src="header.iconSrc"></md-icon>

                <span v-if="header.label">{{ header.label }}</span>
              </slot>
            </div>

           <md-tooltip v-if="header.tooltip" :md-direction="header.tooltipDirection" :md-delay="header.tooltipDelay">{{ header.tooltip }}</md-tooltip>
          </button>

          <span class="md-tab-indicator" :class="indicatorClasses" ref="indicator"></span>
        </div>
      </div>

      <button v-if="mdNavigation && hasNavigationScroll" @click="navigationScrollLeft" class="md-tab-header-navigation-button md-left" :class="navigationLeftButtonClasses">
        <md-icon>keyboard_arrow_left</md-icon>
      </button>

      <button v-if="mdNavigation && hasNavigationScroll" @click="navigationScrollRight" class="md-tab-header-navigation-button md-right" :class="navigationRightButtonClasses">
        <md-icon>keyboard_arrow_right</md-icon>
      </button>
    </md-whiteframe>

    <div class="md-tabs-content" ref="tabContent" :style="{ height: contentHeight }">
      <div class="md-tabs-wrapper" :style="{ transform: `translate3D(-${contentWidth}, 0, 0)` }">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./mdTabs.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import throttle from '../../core/utils/throttle';

  export default {
    name: 'md-tabs',
    props: {
      mdFixed: Boolean,
      mdCentered: Boolean,
      mdRight: Boolean,
      mdNavigation: {
        type: Boolean,
        default: true
      },
      mdDynamicHeight: {
        type: Boolean,
        default: true
      },
      mdElevation: {
        type: [String, Number],
        default: 0
      }
    },
    mixins: [theme],
    data: () => ({
      tabList: {},
      activeTab: null,
      activeTabNumber: 0,
      hasIcons: false,
      hasLabel: false,
      hasNavigationScroll: false,
      isNavigationOnStart: true,
      isNavigationOnEnd: false,
      transitionControl: null,
      transitionOff: false,
      contentHeight: '0px',
      contentWidth: '0px'
    }),
    computed: {
      tabClasses() {
        return {
          'md-dynamic-height': this.mdDynamicHeight,
          'md-transition-off': this.transitionOff
        };
      },
      navigationClasses() {
        return {
          'md-has-icon': this.hasIcons,
          'md-has-label': this.hasLabel,
          'md-fixed': this.mdFixed,
          'md-right': !this.mdCentered && this.mdRight,
          'md-centered': this.mdCentered || this.mdFixed,
          'md-has-navigation-scroll': this.hasNavigationScroll
        };
      },
      indicatorClasses() {
        let toLeft = this.lastIndicatorNumber > this.activeTabNumber;

        this.lastIndicatorNumber = this.activeTabNumber;

        return {
          'md-transition-off': this.transitionOff,
          'md-to-right': !toLeft,
          'md-to-left': toLeft
        };
      },
      navigationLeftButtonClasses() {
        return {
          'md-disabled': this.isNavigationOnStart
        };
      },
      navigationRightButtonClasses() {
        return {
          'md-disabled': this.isNavigationOnEnd
        };
      }
    },
    methods: {
      getHeaderClass(header) {
        return {
          'md-active': this.activeTab === header.id,
          'md-disabled': header.disabled
        };
      },
      registerTab(tabData) {
        let hasActive = false;

        for (let tab of Object.keys(this.tabList)) {
          if (this.tabList[tab].active) {
            hasActive = true;
            break;
          }
        }

        this.$set(this.tabList, tabData.id, tabData);

        if (!hasActive && !tabData.disabled) {
          this.tabList[tabData.id].active = true;
        }
      },
      unregisterTab(tabData) {
        this.$delete(this.tabList, tabData.id);
      },
      updateTab(tabData) {
        this.registerTab(tabData);

        if (tabData.active) {
          if (!tabData.disabled) {
            this.setActiveTab(tabData);
          } else if (Object.keys(this.tabList).length) {
            let tabsIds = Object.keys(this.tabList);
            let targetIndex = tabsIds.indexOf(tabData.id) + 1;
            let target = tabsIds[targetIndex];

            if (target) {
              this.setActiveTab(this.tabList[target]);
            } else {
              this.setActiveTab(this.tabList[0]);
            }
          }
        }
      },
      observeElementChanges() {
        this.parentObserver = new MutationObserver(throttle(this.calculateOnWatch, 50));
        this.parentObserver.observe(this.$refs.tabContent, {
          childList: true,
          attributes: true,
          subtree: true
        });
      },
      getTabIndex(id) {
        const idList = Object.keys(this.tabList);

        return idList.indexOf(id);
      },
      calculateIndicatorPos() {
        if (this.$refs.tabHeader && this.$refs.tabHeader[this.activeTabNumber]) {
          const tabsWidth = this.$el.offsetWidth;
          const activeTab = this.$refs.tabHeader[this.activeTabNumber];
          const left = activeTab.offsetLeft - this.$refs.tabsContainer.scrollLeft;
          const right = tabsWidth - left - activeTab.offsetWidth;

          this.$refs.indicator.style.left = left + 'px';
          this.$refs.indicator.style.right = right + 'px';
        }
      },
      calculateTabsWidthAndPosition() {
        const width = this.$el.offsetWidth;
        let index = 0;

        this.contentWidth = width * this.activeTabNumber + 'px';

        for (const tabId in this.tabList) {
          const tab = this.tabList[tabId];

          tab.ref.width = width + 'px';
          tab.ref.left = width * index + 'px';
          index++;
        }
      },
      calculateContentHeight() {
        this.$nextTick(() => {
          if (Object.keys(this.tabList).length) {
            let height = this.tabList[this.activeTab].ref.$el.offsetHeight;

            this.contentHeight = height + 'px';
          }
        });
      },
      calculatePosition() {
        window.requestAnimationFrame(() => {
          if (this._destroyed) {
            return;
          }
  
          this.calculateIndicatorPos();
          this.calculateTabsWidthAndPosition();
          this.calculateContentHeight();
          this.checkNavigationScroll();
        });
      },
      debounceTransition() {
        window.clearTimeout(this.transitionControl);
        this.transitionControl = window.setTimeout(() => {
          this.calculatePosition();
          this.transitionOff = false;
        }, 200);
      },
      calculateOnWatch() {
        this.calculatePosition();
        this.debounceTransition();
      },
      calculateOnResize() {
        this.transitionOff = true;
        this.calculateOnWatch();
      },
      calculateScrollPos() {
        const { scrollLeft, scrollWidth, clientWidth } = this.$refs.tabsContainer;

        this.isNavigationOnStart = scrollLeft < 32;
        this.isNavigationOnEnd = scrollWidth - scrollLeft - 32 < clientWidth;
      },
      handleNavigationScroll() {
        window.requestAnimationFrame(() => {
          if (this._destroyed) {
            return;
          }

          this.calculateIndicatorPos();
          this.calculateScrollPos();
        });
      },
      checkNavigationScroll() {
        const { scrollWidth, clientWidth } = this.$refs.tabsContainer;

        this.hasNavigationScroll = scrollWidth > clientWidth;
      },
      setActiveTab(tabData) {
        this.hasIcons = !!tabData.icon || !!tabData.iconset || !!tabData.iconSrc;
        this.hasLabel = !!tabData.label;
        this.activeTab = tabData.id;
        this.activeTabNumber = this.getTabIndex(this.activeTab);
        this.calculatePosition();
        this.$emit('change', this.activeTabNumber);
      },
      navigationScrollLeft() {
        const { scrollLeft, clientWidth } = this.$refs.tabsContainer;

        this.$refs.tabsContainer.scrollLeft = Math.max(0, scrollLeft - clientWidth);
      },
      navigationScrollRight() {
        const { scrollLeft, clientWidth, scrollWidth } = this.$refs.tabsContainer;

        this.$refs.tabsContainer.scrollLeft = Math.min(scrollWidth, scrollLeft + clientWidth);
      }
    },
    activated() {
      this.calculateOnResize();
    },
    mounted() {
      this.$nextTick(() => {
        this.observeElementChanges();
        window.addEventListener('resize', this.calculateOnResize);

        if (Object.keys(this.tabList).length && !this.activeTab) {
          let firstTab = Object.keys(this.tabList)[0];

          this.setActiveTab(this.tabList[firstTab]);
        }
      });
    },
    beforeDestroy() {
      if (this.parentObserver) {
        this.parentObserver.disconnect();
      }

      window.removeEventListener('resize', this.calculateOnResize);

      this._destroyed = true;
    }
  };
</script>
