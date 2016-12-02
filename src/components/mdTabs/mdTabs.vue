<template>
  <div class="md-tabs" :class="tabClasses">
    <md-whiteframe :md-elevation="mdElevation">
      <div class="md-tabs-navigation" :class="navigationClasses" ref="tabNavigation">
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
          </div>
        </button>

        <span class="md-tab-indicator" :class="indicatorClasses" ref="indicator"></span>
      </div>
    </md-whiteframe>

    <div class="md-tabs-content" ref="tabContent">
      <div class="md-tabs-wrapper" ref="tabWrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./mdTabs.scss"></style>

<script>
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
    data: () => ({
      tabList: {},
      activeTab: null,
      activeTabNumber: 0,
      transitionControl: null
    }),
    computed: {
      tabClasses() {
        return {
          'md-no-transition': !this.mdDynamicHeight
        };
      },
      navigationClasses() {
        return {
          'md-fixed': this.mdFixed,
          'md-right': !this.mdCentered && this.mdRight,
          'md-centered': this.mdCentered || this.mdFixed,
          'md-has-icon': this.hasIcons,
          'md-has-label': this.hasLabel
        };
      },
      indicatorClasses() {
        let toLeft = this.lastIndicatorNumber > this.activeTabNumber;

        this.lastIndicatorNumber = this.activeTabNumber;

        return {
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
        this.$forceUpdate();
      },
      unregisterTab(tabData) {
        console.log(tabData);
      },
      updateTab(tabData) {
        this.registerTab(tabData);
      },
      observeElementChanges() {
        this.contentObserver = new MutationObserver(throttle(this.debounceTransition, 50));
        this.navigationObserver = new MutationObserver(throttle(this.debounceTransition, 50));
        this.contentObserver.observe(this.$refs.tabContent, {
          childList: true,
          attributes: true,
          characterData: true,
          subtree: true,
          attributeOldValue: true,
          characterDataOldValue: true
        });
        this.navigationObserver.observe(this.$refs.tabNavigation, {
          attributes: true
        });
      },
      getTabIndex(id) {
        let idList = Object.keys(this.tabList);

        return idList.indexOf(id);
      },
      debounceTransition() {
        window.clearTimeout(this.transitionControl);
        this.transitionControl = window.setTimeout(() => {
          this.calculateIndicatorPos();
          this.$refs.indicator.classList.remove('md-transition-off');
        }, 200);
      },
      calculateIndicatorPos() {
        let tabsWidth = this.$el.offsetWidth;
        let activeTab = this.$refs.tabHeader[this.activeTabNumber];
        let left = activeTab.offsetLeft;
        let right = tabsWidth - left - activeTab.offsetWidth;

        this.$refs.indicator.style.left = left + 'px';
        this.$refs.indicator.style.right = right + 'px';
      },
      calculatePosition() {
        window.requestAnimationFrame(() => {
          this.calculateIndicatorPos();
        });
      },
      onWindowResize() {
        this.$refs.indicator.classList.add('md-transition-off');
        this.calculatePosition();
        this.debounceTransition();
      },
      setActiveTab(tabData) {
        this.hasIcons = !!tabData.icon;
        this.hasLabel = !!tabData.label;
        this.activeTab = tabData.id;
        this.activeTabNumber = this.getTabIndex(this.activeTab);
        this.calculatePosition();
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.observeElementChanges();
        window.addEventListener('resize', this.onWindowResize);

        if (!this.activeTab) {
          let firstTab = Object.keys(this.tabList)[0];

          this.setActiveTab(this.tabList[firstTab]);
        }
      });
    },
    beforeDestroy() {
      this.contentObserver.disconnect();
      window.removeEventListener('resize', this.onWindowResize);
    }
  };
</script>
