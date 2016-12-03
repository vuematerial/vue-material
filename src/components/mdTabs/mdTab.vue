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
      mdDisabled: Boolean
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
          ref: this
        };
      },
      updateTabData() {
        this.parentTabs.updateTab(this.getTabData());
      }
    },
    mounted() {
      this.parentTabs = getClosestVueParent(this.$parent, 'md-tabs');

      if (!this.parentTabs) {
        throw new Error('You must wrap the md-tab in a md-tabs');
      }

      this.$nextTick(() => {
        this.mounted = true;
        this.parentTabs.registerTab(this.getTabData());

        if (this.mdActive) {
          this.parentTabs.activeTab = this.tabId;
        }
      });
    },
    beforeDestroy() {
      this.parentTabs.unregisterTab(this.getTabData());
    }
  };
</script>
