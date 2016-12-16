<template>
  <div class="md-list-expand" :style="{ 'margin-bottom': height }" :class="classes" ref="expand">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        height: 0,
        contentObserver: null,
        transitionOff: true
      };
    },
    computed: {
      classes() {
        return {
          'md-transition-off': this.transitionOff
        };
      }
    },
    methods: {
      calculatePadding() {
        this.height = -this.$el.offsetHeight + 'px';

        window.setTimeout(() => {
          this.transitionOff = false;
        });
      },
      recalculateAfterChildChange() {
        this.transitionOff = true;
        this.calculatePadding();
      },
      observeChildChanges() {
        this.contentObserver = new MutationObserver(this.recalculateAfterChildChange);
        this.contentObserver.observe(this.$refs.expand, {
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    },
    mounted() {
      this.calculatePadding();
      this.observeChildChanges();
    },
    beforeDestroy() {
      if (this.contentObserver) {
        this.contentObserver.disconnect();
      }
    }
  };
</script>
