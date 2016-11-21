<template>
  <span class="md-tooltip" :class="classes" :style="style">
    <slot></slot>
  </span>
</template>

<style lang="scss" src="./mdTooltip.scss"></style>

<script>
  import transitionEndEventName from '../../core/utils/transitionEndEventName';
  import getInViewPosition from '../../core/utils/getInViewPosition';

  export default {
    props: {
      mdDirection: {
        type: String,
        default: 'bottom'
      },
      mdDelay: {
        type: String,
        default: '0'
      }
    },
    data: () => ({
      active: false,
      transitionOff: false,
      topPosition: false,
      leftPosition: false
    }),
    computed: {
      classes() {
        return {
          'md-active': this.active,
          'md-transition-off': this.transitionOff,
          'md-tooltip-top': this.mdDirection === 'top',
          'md-tooltip-right': this.mdDirection === 'right',
          'md-tooltip-bottom': this.mdDirection === 'bottom',
          'md-tooltip-left': this.mdDirection === 'left'
        };
      },
      style() {
        return {
          'transition-delay': this.mdDelay + 'ms',
          top: this.topPosition + 'px',
          left: this.leftPosition + 'px'
        };
      }
    },
    watch: {
      mdDirection() {
        this.calculateTooltipPosition();
      }
    },
    methods: {
      calculateTooltipPosition() {
        let position = this.parentElement.getBoundingClientRect();
        let cssPosition = {};

        switch (this.mdDirection) {
          case 'top':
            cssPosition.top = position.top - this.$el.offsetHeight;
            cssPosition.left = position.left + position.width / 2;

            break;

          case 'right':
            cssPosition.top = position.top;
            cssPosition.left = position.left + position.width;

            break;

          case 'bottom':
            cssPosition.top = position.bottom;
            cssPosition.left = position.left + position.width / 2;

            break;

          case 'left':
            cssPosition.top = position.top;
            cssPosition.left = position.left - this.$el.offsetWidth;

            break;

          default:
            console.warn(`Invalid ${this.mdDirection} option to md-direction option`);
        }

        cssPosition = getInViewPosition(this.tooltipElement, cssPosition);

        this.topPosition = cssPosition.top;
        this.leftPosition = cssPosition.left;
      },
      open() {
        document.body.appendChild(this.tooltipElement);
        getComputedStyle(this.tooltipElement).top;
        this.transitionOff = true;
        this.calculateTooltipPosition();

        window.setTimeout(() => {
          this.transitionOff = false;
          this.active = true;
        }, 10);
      },
      close() {
        let cleanupElements = () => {
          this.tooltipElement.removeEventListener(transitionEndEventName, cleanupElements);

          if (this.tooltipElement.parentNode && !this.tooltipElement.classList.contains('md-active')) {
            document.body.removeChild(this.tooltipElement);
          }
        };

        this.active = false;
        this.tooltipElement.removeEventListener(transitionEndEventName, cleanupElements);
        this.tooltipElement.addEventListener(transitionEndEventName, cleanupElements);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.tooltipElement = this.$el;
        this.parentElement = this.tooltipElement.parentNode;

        this.$el.parentNode.removeChild(this.$el);

        this.parentElement.addEventListener('mouseenter', this.open);
        this.parentElement.addEventListener('focus', this.open);
        this.parentElement.addEventListener('mouseleave', this.close);
        this.parentElement.addEventListener('blur', this.close);
      });
    },
    beforeDestroy() {
      this.active = false;

      if (this.$el.parentNode) {
        document.body.removeChild(this.$el);
      }

      if (this.parentElement) {
        this.parentElement.removeEventListener('mouseenter', this.open);
        this.parentElement.removeEventListener('focus', this.open);
        this.parentElement.removeEventListener('mouseleave', this.close);
        this.parentElement.removeEventListener('blur', this.close);
      }
    }
  };
</script>
