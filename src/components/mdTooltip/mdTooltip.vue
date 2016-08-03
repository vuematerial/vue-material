<template>
  <span class="md-tooltip" :class="classes" :style="style" transition="md-active">
    <slot></slot>
  </span>
</template>

<style lang="scss" src="./mdTooltip.scss"></style>

<script>
  let registeredMouseEnter;
  let registeredMouseLeave;

  let calculateTooltipPosition = (scope) => {
    let position = scope.parent.getBoundingClientRect();

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
        created: true
      };
    },
    computed: {
      classes() {
        return {
          'md-tooltip-created': this.created,
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
    attached() {
      this.parent = this.$el.parentNode;
    },
    ready() {
      calculateTooltipPosition(this);
      this.created = false;
      this.$remove();

      this.parent.addEventListener('mouseenter', registeredMouseEnter = () => {
        this.$appendTo(this.parent);
        calculateTooltipPosition(this);
      });

      this.parent.addEventListener('mouseleave', registeredMouseLeave = () => {
        this.$remove();
      });
    },
    beforeDestroy() {
      this.$remove();
      this.parent.removeEventListener('mouseenter', registeredMouseEnter);
      this.parent.removeEventListener('mouseleave', registeredMouseLeave);
    }
  };
</script>
