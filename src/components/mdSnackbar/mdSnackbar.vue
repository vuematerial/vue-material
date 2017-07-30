<template>
  <div class="md-snackbar" :class="[themeClass, classes]" :id="snackbarId" @mouseenter="pauseTimeout" @mouseleave="resumeTimeout">
    <div class="md-snackbar-container" ref="container">
      <div class="md-snackbar-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./mdSnackbar.scss"></style>

<script>
  import uniqueId from '../../core/utils/uniqueId';
  import transitionEndEventName from '../../core/utils/transitionEndEventName';
  import theme from '../../core/components/mdTheme/mixin';
  import manager from './manager';

  export default {
    name: 'md-snackbar',
    props: {
      id: [String, Number],
      mdPosition: {
        type: String,
        default: 'bottom center'
      },
      mdDuration: {
        type: [String, Number],
        default: 4000
      }
    },
    mixins: [theme],
    data() {
      return {
        snackbarId: this.id || 'snackbar-' + uniqueId(),
        removedSnackBarElementEventName: 'removedSnackBarElement',
        active: false,
        rootElement: {},
        snackbarElement: {},
        directionClass: null,
        closeTimeout: null,
        removedSnackBarElementEvent: null
      };
    },
    computed: {
      classes() {
        let cssClasses = {
          'md-active': this.active
        };

        this.directionClass = this.mdPosition.replace(/ /g, '-');

        cssClasses['md-position-' + this.directionClass] = true;

        return cssClasses;
      }
    },
    watch: {
      active(active) {
        const directionClass = 'md-has-toast-' + this.directionClass;
        const toastClass = 'md-has-toast';

        if (active) {
          document.body.classList.add(directionClass);
          document.body.classList.add(toastClass);
        } else {
          document.body.classList.remove(directionClass);
          document.body.classList.remove(toastClass);
        }
      }
    },
    methods: {
      removeElement() {
        // if we have the element and we don't want it active anymore, remove it
        if (document.body.contains(this.snackbarElement) && !this.active) {
          const activeRipple = this.snackbarElement.querySelector('.md-ripple.md-active');

          if (activeRipple) {
            activeRipple.classList.remove('md-active');
          }

          document.body.removeChild(this.snackbarElement);
        }
        this.$refs.container.dispatchEvent(this.removedSnackBarElementEvent);
      },
      open() {
        if (manager.current) {
          // we need to wait for the old element to finishing closing before we can open a new one
          this.$refs.container.removeEventListener(this.removedSnackBarElementEventName, this.showElementAndStartTimer);
          this.$refs.container.addEventListener(this.removedSnackBarElementEventName, this.showElementAndStartTimer);
          manager.current.close();
          return;
        }

        this.showElementAndStartTimer();
      },
      showElementAndStartTimer() {
        this.$refs.container.removeEventListener(this.removedSnackBarElementEventName, this.showElementAndStartTimer);
        manager.current = this;
        document.body.appendChild(this.snackbarElement);
        window.getComputedStyle(this.$refs.container).backgroundColor;
        this.active = true;
        this.$emit('open');
        this.closeTimeout = window.setTimeout(this.close, this.mdDuration);
        this.timeoutStartedAt = Date.now();
      },
      close() {
        //we set the flag to false here, because we need to inform the removeElement method that we really
        // want to remove the element - we're in closing action
        this.active = false;

        if (this.$refs.container) {
          const removeElement = () => {
            this.$refs.container.removeEventListener(transitionEndEventName, removeElement);
            this.removeElement();
          };

          manager.current = null;
          this.$emit('close');
          this.$refs.container.removeEventListener(transitionEndEventName, removeElement);
          this.$refs.container.addEventListener(transitionEndEventName, removeElement);
          window.clearTimeout(this.closeTimeout);
          this.pendingDuration = this.mdDuration;
        }
      },
      pauseTimeout() {
        this.pendingDuration = this.pendingDuration - (Date.now() - this.timeoutStartedAt);
        this.timeoutStartedAt = 0;
        window.clearTimeout(this.closeTimeout);
      },
      resumeTimeout() {
        this.timeoutStartedAt = Date.now();
        this.closeTimeout = window.setTimeout(this.close, this.pendingDuration);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.snackbarElement = this.$el;
        this.snackbarElement.parentNode.removeChild(this.snackbarElement);
        this.timeoutStartedAt = 0;
        this.pendingDuration = this.mdDuration;
      });
      this.removedSnackBarElementEvent = new Event(this.removedSnackBarElementEventName);
    },
    beforeDestroy() {
      window.clearTimeout(this.closeTimeout);
      this.removeElement();
    }
  };
</script>
