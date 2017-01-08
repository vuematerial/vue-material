<template>
  <div class="md-list-expand" :style="styles" :class="classes" ref="expand">
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
      },
      styles() {
        return {
          'margin-bottom': this.height
        };
      }
    },
    methods: {
      calculatePadding() {
        window.requestAnimationFrame(() => {
          this.height = -this.$el.offsetHeight - 48 + 'px';

          window.setTimeout(() => {
            this.transitionOff = false;
          });
        });
      },
      recalculateAfterChange() {
        this.transitionOff = true;
        this.calculatePadding();
      },
      observeChildChanges() {
        this.contentObserver = new MutationObserver(this.recalculateAfterChange);
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
      window.addEventListener('resize', this.recalculateAfterChange);
    },
    beforeDestroy() {
      if (this.contentObserver) {
        this.contentObserver.disconnect();
      }

      window.removeEventListener('resize', this.recalculateAfterChange);
    }
  };
</script>
