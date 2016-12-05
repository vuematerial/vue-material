<template>
  <div class="md-snackbar" :class="classes">
    <div class="md-snackbar-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" src="./mdSnackbar.scss"></style>

<script>
  import transitionEndEventName from '../../core/utils/transitionEndEventName';

  export default {
    props: {
      mdPosition: {
        type: String,
        default: 'bottom center'
      },
      mdDuration: {
        type: [String, Number],
        default: 4000
      }
    },
    data() {
      return {
        active: false,
        closeTimeout: null,
        positionClass: this.mdPosition.replace(/ /g, '-')
      };
    },
    computed: {
      classes() {
        let cssClasses = {
          'md-active': this.active
        };

        cssClasses['md-position-' + this.positionClass] = true;

        return cssClasses;
      }
    },
    methods: {
      removeSnackbar() {
        const snackbars = [...document.querySelectorAll('.md-snackbar')];
        const activeRipple = this.snackbarElement.querySelector('.md-ripple.md-active');

        snackbars.forEach((snackbar) => {
          if (snackbar.parentNode) {
            snackbar.parentNode.removeChild(snackbar);
          }
        });

        if (activeRipple) {
          activeRipple.classList.remove('md-active');
        }
      },
      open() {
        this.removeSnackbar();
        this.rootElement.appendChild(this.snackbarElement);
        this.rootElement.classList.add('md-has-toast-' + this.positionClass);

        window.getComputedStyle(this.snackbarElement).transition;
        this.closeTimeout = window.setTimeout(this.close, this.mdDuration);
        this.active = true;
        this.$emit('open');
      },
      close() {
        if (this.rootElement.contains(this.snackbarElement)) {
          window.clearTimeout(this.closeTimeout);
          this.active = false;
          this.rootElement.classList.remove('md-has-toast-' + this.positionClass);
          this.snackbarElement.removeEventListener(transitionEndEventName, this.removeSnackbar);
          this.snackbarElement.addEventListener(transitionEndEventName, this.removeSnackbar);
          this.$emit('close');
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.rootElement = this.$root.$el;
        this.snackbarElement = this.$el;
        this.removeSnackbar();
      });
    },
    beforeDestroy() {
      this.removeSnackbar();
    }
  };
</script>
