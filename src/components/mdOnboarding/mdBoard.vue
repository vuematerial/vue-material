<template>
  <div class="md-tab" :id="tabId" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  import uniqueId from '../../core/utils/uniqueId';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    props: {
      id: [String, Number],
      mdLabel: [String, Number],
      mdIcon: String,
      mdActive: Boolean,
      mdDisabled: Boolean,
      mdTooltip: String,
      mdTooltipDelay: {
        type: String,
        default: '0'
      },
      mdTooltipDirection: {
        type: String,
        default: 'bottom'
      }
    },
    data() {
      return {
        mounted: false,
        tabId: this.id || 'tab-' + uniqueId(),
        width: '0px',
        left: '0px'
      };
    },
    watch: {
      mdActive() {
        this.updateTabData();
      },
      mdDisabled() {
        this.updateTabData();
      },
      mdIcon() {
        this.updateTabData();
      },
      mdLabel() {
        this.updateTabData();
      },
      mdTooltip() {
        this.updateTabData();
      },
      mdTooltipDelay() {
        this.updateTabData();
      },
      mdTooltipDirection() {
        this.updateTabData();
      }
    },
    computed: {
      styles() {
        return {
          width: this.width,
          left: this.left
        };
      }
    },
    methods: {
      getTabData() {
        return {
          id: this.tabId,
          label: this.mdLabel,
          icon: this.mdIcon,
          active: this.mdActive,
          disabled: this.mdDisabled,
          tooltip: this.mdTooltip,
          tooltipDelay: this.mdTooltipDelay,
          tooltipDirection: this.mdTooltipDirection,
          ref: this
        };
      },
      updateTabData() {
        this.parentTabs.updateTab(this.getTabData());
      }
    },
    mounted() {
      let tabData = this.getTabData();

      this.parentTabs = getClosestVueParent(this.$parent, 'md-tabs');

      if (!this.parentTabs) {
        throw new Error('You must wrap the md-tab in a md-tabs');
      }

      this.mounted = true;
      this.parentTabs.updateTab(tabData);

      if (this.mdActive) {
        this.parentTabs.setActiveTab(tabData);
      }
    },
    beforeDestroy() {
      this.parentTabs.unregisterTab(this.getTabData());
    }
  };
</script>
