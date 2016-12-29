<template>
  <div class="md-snackbar" :class="[themeClass, classes]" :id="snackbarId">
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
        active: false,
        rootElement: {},
        snackbarElement: {},
        directionClass: null,
        closeTimeout: null
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
        if (this.rootElement.contains(this.snackbarElement)) {
          const activeRipple = this.snackbarElement.querySelector('.md-ripple.md-active');

          if (activeRipple) {
            activeRipple.classList.remove('md-active');
          }

          this.rootElement.removeChild(this.snackbarElement);
        }
      },
      open() {
        if (manager.current) {
          manager.current.close();
        }

        manager.current = this;
        this.rootElement.appendChild(this.snackbarElement);
        window.getComputedStyle(this.$refs.container).backgroundColor;
        this.active = true;
        this.$emit('open');
        this.closeTimeout = window.setTimeout(this.close, this.mdDuration);
      },
      close() {
        if (this.$refs.container) {
          const removeElement = () => {
            this.$refs.container.removeEventListener(transitionEndEventName, removeElement);
            this.removeElement();
          };

          manager.current = null;
          this.active = false;
          this.$emit('close');
          this.$refs.container.removeEventListener(transitionEndEventName, removeElement);
          this.$refs.container.addEventListener(transitionEndEventName, removeElement);
          window.clearTimeout(this.closeTimeout);
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.rootElement = this.$root.$el;
        this.snackbarElement = this.$el;
        this.snackbarElement.parentNode.removeChild(this.snackbarElement);
      });
    },
    beforeDestroy() {
      window.clearTimeout(this.closeTimeout);
      this.removeElement();
    }
  };
</script>
