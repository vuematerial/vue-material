<template>
  <div class="md-snackbar" :class="classes" :id="snackbarId">
    <div class="md-snackbar-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" src="./mdSnackbar.scss"></style>

<script>
  import uniqueId from '../../core/utils/uniqueId';
  import transitionEndEventName from '../../core/utils/transitionEndEventName';
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
    data() {
      return {
        snackbarId: this.id || 'snackbar-' + uniqueId(),
        active: false,
        rootElement: {},
        snackbarElement: {},
        closeTimeout: null
      };
    },
    computed: {
      classes() {
        let cssClasses = {
          'md-active': this.active
        };

        cssClasses['md-position-' + this.mdPosition.replace(/ /g, '-')] = true;

        return cssClasses;
      }
    },
    methods: {
      open() {
        if (manager.current) {
          manager.current.close();
        }

        manager.current = this;
        this.rootElement.appendChild(this.snackbarElement);
        window.getComputedStyle(this.snackbarElement).backgroundColor;
        this.active = true;
        this.$emit('open');
        //this.closeTimeout = window.setTimeout(this.close, this.mdDuration);
      },
      close() {
        const removeElement = () => {
          this.snackbarElement.removeEventListener(transitionEndEventName, removeElement);

          if (this.rootElement.contains(this.snackbarElement)) {
            this.rootElement.removeChild(this.snackbarElement);
          }
        };

        manager.current = null;
        this.active = false;
        this.$emit('close');
        this.snackbarElement.removeEventListener(transitionEndEventName, removeElement);
        this.snackbarElement.addEventListener(transitionEndEventName, removeElement);
        window.clearTimeout(this.closeTimeout);
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
      this.close();
    }
  };
</script>
