<template>
  <div class="md-tabs" :class="[themeClass, tabClasses]">
    <md-whiteframe md-tag="nav" class="md-tabs-navigation" :md-elevation="mdElevation" :class="navigationClasses" ref="tabNavigation">
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
          <md-icon v-if="header.icon">{{ header.icon }}</md-icon>
          <span v-if="header.label">{{ header.label }}</span>
          <md-tooltip v-if="header.tooltip" :md-direction="header.tooltipDirection" :md-delay="header.tooltipDelay">{{ header.tooltip }}</md-tooltip>
        </div>
      </button>

      <span class="md-tab-indicator" :class="indicatorClasses" ref="indicator"></span>
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
    props: {
      mdFixed: Boolean,
      mdCentered: Boolean,
      mdRight: Boolean,
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
          'md-centered': this.mdCentered || this.mdFixed
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
        this.tabList[tabData.id] = tabData;
      },
      unregisterTab(tabData) {
        delete this.tabList[tabData.id];
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
          const left = activeTab.offsetLeft;
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
          this.calculateIndicatorPos();
          this.calculateTabsWidthAndPosition();
          this.calculateContentHeight();
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
      setActiveTab(tabData) {
        this.hasIcons = !!tabData.icon;
        this.hasLabel = !!tabData.label;
        this.activeTab = tabData.id;
        this.activeTabNumber = this.getTabIndex(this.activeTab);
        this.calculatePosition();
        this.$emit('change', this.activeTabNumber);
      }
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
    }
  };
</script>
