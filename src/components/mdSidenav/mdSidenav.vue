<template>
  <div class="md-sidenav" :class="[themeClass, classes]" @keyup.esc="close" tabindex="0">
    <div class="md-sidenav-content">
      <slot></slot>
    </div>

    <md-backdrop class="md-sidenav-backdrop" @close="close" ref="backdrop"></md-backdrop>
  </div>
</template>

<style lang="scss" src="./mdSidenav.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    data() {
      return {
        mdVisible: false
      };
    },
    mixins: [theme],
    props: {
      swipeable: Boolean,
      swipeThreshold: {
        type: Number,
        default: 15
      },
      swipeDistance: {
        type: Number,
        default: 100
      }
    },
    computed: {
      classes() {
        return this.mdVisible && 'md-active';
      }
    },
    methods: {
      show() {
        this.open();
      },
      open() {
        this.mdVisible = true;
        this.$el.focus();
        this.$emit('open');
      },
      close() {
        this.mdVisible = false;
        this.$el.blur();
        this.$emit('close');
      },
      toggle() {
        if (this.mdVisible) {
          this.close();
        } else {
          this.open();
        }
      },
      handleTouchStart(event) {
        const positionX = event.touches[0].clientX - this.mountedRect.left;
        const positionY = event.touches[0].clientY - this.mountedRect.top;

        if (positionX < 0 || positionX > this.mountedRect.left + this.mountedRect.width) {
          return;
        }

        if (positionY < 0 || positionY > this.mountedRect.top + this.mountedRect.height) {
          return;
        }

        if (positionX > this.swipeThreshold && !this.mdVisible) {
          return;
        }

        this.initialTouchPosition = positionX;
        this.canMove = true;
      },
      handleTouchEnd() {
        this.canMove = false;
        this.initialTouchPosition = null;
      },
      handleTouchMove(event) {
        if (!this.canMove) {
          return;
        }

        const positionX = event.touches[0].clientX;

        const difference = this.mdVisible
          ? this.initialTouchPosition - positionX
          : positionX - this.initialTouchPosition;

        const action = this.mdVisible
          ? 'close'
          : 'open';

        if (difference > this.swipeDistance) {
          this[action]();
        }
      }
    },
    mounted() {
      if (!this.swipeable) {
        return;
      }

      this.mountedRect = this.$refs.backdrop.$el.getBoundingClientRect();
      this.initialTouchPosition = null;
      this.canMove = false;

      document.addEventListener('touchstart', this.handleTouchStart);
      document.addEventListener('touchend', this.handleTouchEnd);
      document.addEventListener('touchmove', this.handleTouchMove);
    },
    destroyed() {
      if (!this.swipeable) {
        return;
      }

      document.removeEventListener('touchstart', this.handleTouchStart);
      document.removeEventListener('touchend', this.handleTouchEnd);
      document.removeEventListener('touchmove', this.handleTouchMove);
    }
  };
</script>
