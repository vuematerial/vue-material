<template>
  <span class="md-tooltip" :class="classes" :style="style">
    <slot></slot>
  </span>
</template>

<style lang="scss" src="./mdTooltip.scss"></style>

<script>
  let onMouseEnter;
  let onMouseLeave;
  let targetElement;

  let calculateTooltipPosition = (scope) => {
    let position = scope.$parent.$el.getBoundingClientRect();

    switch (scope.mdDirection) {
      case 'top':
        scope.$el.style.top = position.top - scope.$el.offsetHeight + 'px';
        scope.$el.style.left = position.left + position.width / 2 + 'px';

        break;

      case 'right':
        scope.$el.style.top = position.top + 'px';
        scope.$el.style.left = position.left + position.width + 'px';

        break;

      case 'bottom':
        scope.$el.style.top = position.bottom + 'px';
        scope.$el.style.left = position.left + position.width / 2 + 'px';

        break;

      case 'left':
        scope.$el.style.top = position.top + 'px';
        scope.$el.style.left = position.left - scope.$el.offsetWidth + 'px';

        break;

      default:
        console.warn(`Invalid ${scope.mdDirection} option to md-direction option`);
    }
  };

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
    data() {
      return {
        active: false
      };
    },
    computed: {
      classes() {
        return {
          'md-active': this.active,
          'md-tooltip-top': this.mdDirection === 'top',
          'md-tooltip-right': this.mdDirection === 'right',
          'md-tooltip-bottom': this.mdDirection === 'bottom',
          'md-tooltip-left': this.mdDirection === 'left'
        };
      },
      style() {
        return {
          'transition-delay': this.mdDelay + 'ms'
        };
      }
    },
    watch: {
      mdDirection() {
        calculateTooltipPosition(this);
      }
    },
    mounted() {
      let tooltipElement = this.$el;
      let targetElement = tooltipElement.parentNode;

      onMouseEnter = () => {
        document.body.appendChild(tooltipElement);
        calculateTooltipPosition(this);
        this.active = true;
      };

      onMouseLeave = () => {
        let onTransitionEnd = () => {
          tooltipElement.removeEventListener('transitionend', onTransitionEnd);

          if (tooltipElement.parentNode && !tooltipElement.classList.contains('md-active')) {
            document.body.removeChild(tooltipElement);
          }
        };

        this.active = false;
        tooltipElement.removeEventListener('transitionend', onTransitionEnd);
        tooltipElement.addEventListener('transitionend', onTransitionEnd);
      };

      this.$el.parentNode.removeChild(this.$el);

      targetElement.addEventListener('mouseenter', onMouseEnter);
      targetElement.addEventListener('focus', onMouseEnter);
      targetElement.addEventListener('mouseleave', onMouseLeave);
      targetElement.addEventListener('blur', onMouseLeave);
    },
    beforeDestroy() {
      document.body.removeChild(this.$el);
      this.active = false;

      targetElement.removeEventListener('mouseenter', onMouseEnter);
      targetElement.removeEventListener('focus', onMouseEnter);
      targetElement.removeEventListener('mouseleave', onMouseLeave);
      targetElement.removeEventListener('blur', onMouseLeave);
    }
  };
</script>
