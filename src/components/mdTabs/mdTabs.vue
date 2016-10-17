<template>
  <div class="md-tabs" :class="tabClasses">
    <md-whiteframe :md-elevation="elevation || 0">
      <div class="md-tabs-navigation">
        <button
          v-for="header in tabs"
          :key="header.id"
          type="button"
          class="md-tab-header"
          :class="getHeaderClass(header)"
          :disabled="header.disabled"
          @click="changeTab(header.id)"
          v-md-ink-ripple="header.disabled"
          ref="tabHeader">
          <div class="md-tab-header-container">
            <md-icon v-if="header.icon">{{ header.icon }}</md-icon>
            <span v-if="header.label">{{ header.label }}</span>
          </div>
        </button>

        <span class="md-tab-indicator" :class="indicatorClass" ref="indicator"></span>
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
  export default {
    props: {
      mdFixed: Boolean,
      mdCentered: Boolean,
      mdElevation: [String, Number]
    },
    data() {
      return {
        hasIcons: false,
        hasLabel: false,
        elevation: this.mdElevation,
        activeTab: '',
        activeTabNumber: 0,
        tabs: {}
      };
    },
    watch: {
      mdFixed() {
        let transitionCounter = 0;
        let transitionInterval = window.setInterval(() => {
          transitionCounter++;

          window.requestAnimationFrame(() => {
            this.calculateIndicatorPos(true);
          });

          if (transitionCounter > 200) {
            window.clearInterval(transitionInterval);
          }
        }, 1);

        this.recalculateAllTabsPos();
      },
      mdCentered() {
        this.recalculateAllTabsPos();
      },
      mdElevation() {
        this.elevation = this.mdElevation;
      }
    },
    computed: {
      tabClasses() {
        return {
          'md-fixed': this.mdFixed,
          'md-centered': this.mdCentered || this.mdFixed,
          'md-has-icon': this.hasIcons,
          'md-has-label': this.hasLabel
        };
      },
      indicatorClass() {
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
      calculateIndicatorPos(recalculate) {
        let indicator = this.$refs.indicator;
        let tabsWidth = this.$el.offsetWidth;

        if (recalculate) {
          indicator.classList.add('md-transition-off');
        }

        this.$nextTick(() => {
          let activeTab = this.$refs.tabHeader[this.activeTabNumber];
          let left = activeTab.offsetLeft;
          let right = tabsWidth - left - activeTab.offsetWidth;

          indicator.style.left = left + 'px';
          indicator.style.right = right + 'px';

          if (recalculate) {
            window.setTimeout(() => {
              indicator.classList.remove('md-transition-off');
            }, 100);
          }
        });
      },
      calculateTabPos(ref, index) {
        this.$refs.tabWrapper.style.transform = 'translate3D(' + -this.$refs.tabContent.offsetWidth * this.activeTabNumber + 'px, 0, 0)';
        ref.style.width = this.$refs.tabContent.offsetWidth + 'px';
        ref.style.left = this.$refs.tabContent.offsetWidth * index + 'px';
      },
      setVisibleTab(ref) {
        this.$refs.tabContent.style.height = ref.offsetHeight + 'px';
        ref.classList.add('md-active');
      },
      changeTab(tabId) {
        let idList = Object.keys(this.tabs);
        let id = tabId || idList[0];
        let index = idList.indexOf(id);

        this.tabs[this.activeTab || id].ref.classList.remove('md-active');
        this.activeTab = id;
        this.activeTabNumber = index;

        this.$nextTick(() => {
          this.calculateIndicatorPos();
          this.calculateTabPos(this.tabs[id].ref, index);
          this.setVisibleTab(this.tabs[id].ref);
        });

        this.$emit('change', index);
      },
      handleTabData(data) {
        let idList = Object.keys(this.tabs);
        let index = idList.indexOf(data.id);

        this.hasIcons = !!data.icon;
        this.hasLabel = !!data.label;

        if (!data.disabled) {
          if (data.active) {
            this.changeTab(data.id);
          }
        } else {
          this.changeTab(idList[index + 1]);
        }
      },
      registerTab(data) {
        this.tabs[data.id] = data;
        this.handleTabData(data);
        this.calculateTabPos(this.tabs[data.id].ref, Object.keys(this.tabs).length - 1);
      },
      updateTabData(data) {
        this.tabs[data.id] = data;
        this.handleTabData(data);
        this.$forceUpdate();
        this.recalculateAllTabsPos();
      },
      recalculateAllTabsPos(transitionOff) {
        if (typeof transitionOff === 'undefined') {
          transitionOff = true;
        }

        window.requestAnimationFrame(() => {
          this.calculateIndicatorPos(!transitionOff);

          Object.keys(this.tabs).forEach((tab, index) => {
            this.calculateTabPos(this.tabs[tab].ref, index);
          });
        });
      }
    },
    mounted() {
      if (!this.activeTab) {
        this.changeTab();
      }

      window.addEventListener('resize', this.recalculateAllTabsPos);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.recalculateAllTabsPos);
    }
  };
</script>
