<template>
  <div class="md-ink-ripple" v-if="mounted || !disabled">
    <div class="md-ripple" :class="classes" :style="styles" ref="ripple"></div>
  </div>
</template>

<style lang="scss" src="./mdInkRipple.scss"></style>

<script>
  export default {
    props: {
      mdDisabled: Boolean
    },
    data: () => ({
      mounted: false,
      rippleElement: null,
      parentElement: null,
      parentDimensions: {
        width: null,
        height: null,
        top: null,
        left: null
      },
      awaitingComplete: false,
      hasCompleted: false,
      fadeOut: false,
      active: false
    }),
    computed: {
      classes() {
        return {
          'md-fadeout': this.fadeOut,
          'md-active': this.active
        };
      },
      styles() {
        return {
          width: this.parentDimensions.width,
          height: this.parentDimensions.height,
          top: this.parentDimensions.top,
          left: this.parentDimensions.left
        };
      },
      disabled() {
        return this.mdDisabled || !this.$material.inkRipple;
      }
    },
    watch: {
      disabled(disabled) {
        if (!disabled) {
          this.init();
        } else {
          this.destroy();
        }
      }
    },
    methods: {
      checkAvailablePositions(element) {
        const availablePositions = ['relative', 'absolute', 'fixed'];

        return availablePositions.indexOf(getComputedStyle(element).position) > -1;
      },
      getClosestPositionedParent(element) {
        const parent = element.parentNode;

        if (!element || !parent || parent.tagName.toLowerCase() === 'body') {
          return false;
        }

        if (this.checkAvailablePositions(element)) {
          return element;
        }

        return this.getClosestPositionedParent(element.parentNode);
      },
      getParentSize() {
        const parent = this.parentElement;

        return Math.round(Math.max(parent.offsetWidth, parent.offsetHeight)) + 'px';
      },
      getClickPosition(event) {
        const rect = this.parentElement.getBoundingClientRect();
        const top = event.pageY - rect.top - this.$refs.ripple.offsetHeight / 2 - document.body.scrollTop + 'px';
        const left = event.pageX - rect.left - this.$refs.ripple.offsetWidth / 2 - document.body.scrollLeft + 'px';

        return {
          top,
          left
        };
      },
      setDimensions() {
        const size = this.getParentSize();

        this.parentDimensions.width = size;
        this.parentDimensions.height = size;
      },
      setPositions(event) {
        const positions = this.getClickPosition(event);

        this.parentDimensions.top = positions.top;
        this.parentDimensions.left = positions.left;
      },
      clearState() {
        this.active = false;
        this.fadeOut = false;
        this.hasCompleted = false;
        this.setDimensions();
        window.clearTimeout(this.awaitingComplete);
        document.body.removeEventListener('mouseup', this.endRipple);
      },
      startRipple(event) {
        window.requestAnimationFrame(() => {
          this.clearState();
          this.awaitingComplete = window.setTimeout(() => {
            this.hasCompleted = true;
          }, 400);

          document.body.addEventListener('mouseup', this.endRipple);

          this.setPositions(event);

          window.setTimeout(() => {
            this.active = true;
          });
        });
      },
      endRipple() {
        if (this.hasCompleted) {
          this.fadeOut = true;
        } else {
          this.awaitingComplete = window.setTimeout(() => {
            this.fadeOut = true;
          }, 200);
        }

        document.body.removeEventListener('mouseup', this.endRipple);
      },
      registerMouseEvent() {
        this.parentElement.addEventListener('mousedown', this.startRipple);
      },
      unregisterMouseEvent() {
        if (this.parentElement) {
          this.parentElement.removeEventListener('mousedown', this.startRipple);
          document.body.removeEventListener('mouseup', this.endRipple);
        }
      },
      init() {
        this.rippleElement = this.$el;
        this.parentElement = this.getClosestPositionedParent(this.$el.parentNode);

        if (!this.parentElement) {
          this.$destroy();
        } else {
          this.rippleElement.parentNode.removeChild(this.rippleElement);
          this.parentElement.appendChild(this.rippleElement);
          this.registerMouseEvent();
          this.setDimensions();
        }
      },
      destroy() {
        if (this.rippleElement && this.rippleElement.parentNode) {
          this.unregisterMouseEvent();
          this.rippleElement.parentNode.removeChild(this.rippleElement);
        }
      }
    },
    mounted() {
      window.setTimeout(() => {
        if (!this.disabled) {
          this.init();
        } else {
          this.destroy();
        }

        this.$nextTick(() => {
          this.mounted = true;
        });
      }, 100);
    },
    beforeDestroy() {
      this.destroy();
    }
  };
</script>
