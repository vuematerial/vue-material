<template>
  <div class="md-dialog-container" :class="classes" @keyup.esc="mdEscToClose && close()" tabindex="0">
    <div class="md-dialog" ref="dialog" :style="styles" :class="dialogClasses">
      <slot></slot>
    </div>

    <md-backdrop class="md-dialog-backdrop" :class="classes" v-if="mdBackdrop" ref="backdrop" @close="mdClickOutsideToClose && close()"></md-backdrop>
  </div>
</template>

<style lang="scss" src="./mdDialog.scss"></style>

<script>
  import transitionEndEventName from '../../core/utils/transitionEndEventName';

  export default {
    props: {
      mdClickOutsideToClose: {
        type: Boolean,
        default: true
      },
      mdEscToClose: {
        type: Boolean,
        default: true
      },
      mdBackdrop: {
        type: Boolean,
        default: true
      },
      mdOpenFrom: String,
      mdCloseTo: String,
      mdFullscreen: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      active: false,
      transitionOff: false,
      dialogTransform: ''
    }),
    computed: {
      classes() {
        return {
          'md-active': this.active
        };
      },
      dialogClasses() {
        return {
          'md-fullscreen': this.mdFullscreen,
          'md-transition-off': this.transitionOff,
          'md-with-reference': this.mdOpenFrom || this.mdCloseTo
        };
      },
      styles() {
        return {
          transform: this.dialogTransform
        };
      }
    },
    methods: {
      removeDialog() {
        if (this.rootElement.contains(this.dialogElement)) {
          this.$el.parentNode.removeChild(this.$el);
        }
      },
      calculateDialogPos(ref) {
        const reference = document.querySelector(ref);

        if (reference) {
          const openFromRect = reference.getBoundingClientRect();
          const dialogRect = this.dialogInnerElement.getBoundingClientRect();
          const widthInScale = openFromRect.width / dialogRect.width;
          const heightInScale = openFromRect.height / dialogRect.height;
          let distance = {
            top: -(dialogRect.top - openFromRect.top),
            left: -(dialogRect.left - openFromRect.left)
          };

          if (openFromRect.top > dialogRect.top + dialogRect.height) {
            distance.top = openFromRect.top - dialogRect.top;
          }

          if (openFromRect.left > dialogRect.left + dialogRect.width) {
            distance.left = openFromRect.left - dialogRect.left;
          }

          this.dialogTransform = `translate3D(${distance.left}px, ${distance.top}px, 0) scale(${widthInScale}, ${heightInScale})`;
        }
      },
      open() {
        this.rootElement.appendChild(this.dialogElement);
        this.transitionOff = true;
        this.calculateDialogPos(this.mdOpenFrom);

        window.setTimeout(() => {
          this.dialogElement.focus();
          this.transitionOff = false;
          this.active = true;
        });
      },
      close() {
        if (this.rootElement.contains(this.dialogElement)) {
          let cleanElement = () => {
            this.dialogInnerElement.removeEventListener(transitionEndEventName, cleanElement);
            this.$root.$el.removeChild(this.dialogElement);

            this.dialogTransform = '';
          };

          this.dialogTransform = '';
          this.calculateDialogPos(this.mdCloseTo);

          window.setTimeout(() => {
            this.active = false;
            this.dialogInnerElement.addEventListener(transitionEndEventName, cleanElement);
          });
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.rootElement = this.$root.$el;
        this.dialogElement = this.$el;
        this.dialogInnerElement = this.$refs.dialog;
        this.removeDialog();
      });
    },
    beforeDestroy() {
      this.removeDialog();
    }
  };
</script>
