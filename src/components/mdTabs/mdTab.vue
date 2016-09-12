<template>
  <div class="md-tab" ref="tab">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      mdLabel: String,
      mdIcon: String,
      mdActive: Boolean
    },
    mounted() {
      if (!this.$parent.$el.classList.contains('md-tabs')) {
        this.$destroy();

        throw new Error('You should wrap the md-tab in a md-tabs');
      }

      this.$parent.registerTab({
        label: this.mdLabel,
        icon: this.mdIcon,
        active: this.mdActive,
        ref: this.$refs.tab
      });
    }
  };
</script>
