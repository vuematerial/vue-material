<template>
  <div class="md-tabs" :class="tabClasses">
    <md-whiteframe :md-elevation="mdElevation || 0">
      <div class="md-tabs-navigation">
        <button
          v-for="(header, index) in tabs"
          type="button"
          class="md-tab-header"
          :class="{ 'md-active': activeTab === index }"
          @click="changeTab(index)"
          v-md-ink-ripple
          ref="tabHeader">
          <md-icon v-if="header.icon">{{ header.icon }}</md-icon>
          <span v-if="header.label">{{ header.label }}</span>
        </button>
        <span class="md-tab-indicator" ref="indicator"></span>
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
  import Vue from 'vue';

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
        activeTab: 0,
        tabs: []
      };
    },
    computed: {
      tabClasses() {
        return {
          'md-fixed': this.mdFixed,
          'md-centered': this.mdCentered || this.mdFixed,
          'md-has-icon': this.hasIcons,
          'md-has-label': this.hasLabel
        };
      }
    },
    methods: {
      calculateIndicatorPos() {
        let indicator = this.$refs.indicator;
        let tabsWidth = this.$el.offsetWidth;

        Vue.nextTick(() => {
          let activeTab = this.$refs.tabHeader[this.activeTab];
          let left = activeTab.offsetLeft;
          let right = tabsWidth - left - activeTab.offsetWidth;

          indicator.style.left = left + 'px';
          indicator.style.right = right + 'px';
        });
      },
      calculateTabPos(ref, index) {
        this.$refs.tabWrapper.style.left = -this.$refs.tabContent.offsetWidth * this.activeTab + 'px';
        ref.style.width = this.$refs.tabContent.offsetWidth + 'px';
        ref.style.left = this.$refs.tabContent.offsetWidth * index + 'px';
      },
      setVisibleTab(ref) {
        Vue.nextTick(() => {
          this.$refs.tabContent.style.height = ref.offsetHeight + 'px';
          ref.classList.add('md-active');
        });
      },
      changeTab(index) {
        this.tabs[this.activeTab].ref.classList.remove('md-active');
        this.activeTab = index;
        this.calculateIndicatorPos();
        this.calculateTabPos(this.tabs[this.activeTab].ref, this.activeTab);
        this.setVisibleTab(this.tabs[index].ref);
        this.$emit('change', index);
      },
      registerTab(options) {
        this.tabs.push(options);

        if (options.icon) {
          this.hasIcons = true;
        }

        if (options.label) {
          this.hasLabel = true;
        }

        if (options.active) {
          this.changeTab(this.tabs.length - 1);
        }

        this.calculateTabPos(this.tabs[this.tabs.length - 1].ref, this.tabs.length - 1);
      },
      recalculateTabPos() {
        window.requestAnimationFrame(() => {
          this.calculateIndicatorPos();

          this.tabs.forEach((tab, index) => {
            this.calculateTabPos(this.tabs[index].ref, index);
          });
        });
      }
    },
    mounted() {
      if (this.activeTab === 0) {
        this.changeTab(0);
      }

      window.addEventListener('resize', this.recalculateTabPos);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.recalculateTabPos);
    }
  };
</script>
