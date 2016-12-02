<template>
  <div class="md-tab" :id="tabId" ref="tab">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      id: [String, Number],
      mdLabel: [String, Number],
      mdIcon: String,
      mdActive: Boolean,
      mdDisabled: Boolean
    },
    data() {
      let id;

      if (!this.id) {
        id = 'tab-' + Math.random().toString(36).substr(2, 10);
      }

      return {
        tabId: this.id || id
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
    methods: {
      updateTabData() {
        this.$parent.updateTabData({
          id: this.tabId,
          label: this.mdLabel,
          icon: this.mdIcon,
          active: this.mdActive,
          disabled: this.mdDisabled,
          ref: this.$refs.tab
        });
      }
    },
    mounted() {
      if (!this.$parent.$el.classList.contains('md-tabs')) {
        this.$destroy();

        throw new Error('You should wrap the md-tab in a md-tabs');
      }

      this.$parent.registerTab({
        id: this.tabId,
        label: this.mdLabel,
        icon: this.mdIcon,
        active: this.mdActive,
        disabled: this.mdDisabled,
        ref: this.$refs.tab
      });
    }
  };
</script>
