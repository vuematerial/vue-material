<template>
  <div class="md-menu">
    <slot></slot>

    <md-backdrop class="md-menu-backdrop md-transparent md-active" ref="backdrop" @close="close"></md-backdrop>
  </div>
</template>

<style lang="scss" src="./mdMenu.scss"></style>

<script>
  import transitionEndEventName from '../../core/utils/transitionEndEventName';
  import getInViewPosition from '../../core/utils/getInViewPosition';

  export default {
    props: {
      mdSize: {
        type: [Number, String],
        default: 0
      },
      mdDirection: {
        type: String,
        default: 'bottom right'
      },
      mdAlignTrigger: {
        type: Boolean,
        default: false
      },
      mdOffsetX: {
        type: [Number, String],
        default: 0
      },
      mdOffsetY: {
        type: [Number, String],
        default: 0
      },
      mdCloseOnSelect: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      active: false
    }),
    watch: {
      mdSize(current, previous) {
        if (current >= 1 && current <= 7) {
          this.removeLastSizeMenuContentClass(previous);
          this.addNewSizeMenuContentClass(current);
        }
      },
      mdDirection(current, previous) {
        this.removeLastDirectionMenuContentClass(previous);
        this.addNewDirectionMenuContentClass(current);
      },
      mdAlignTrigger(trigger) {
        this.handleAlignTriggerClass(trigger);
      }
    },
    methods: {
      validateMenu() {
        if (!this.menuContent) {
          this.$destroy();

          throw new Error('You must have a md-menu-content inside your menu.');
        }

        if (!this.menuTrigger) {
          this.$destroy();

          throw new Error('You must have an element with a md-menu-trigger attribute inside your menu.');
        }
      },
      removeLastSizeMenuContentClass(size) {
        this.menuContent.classList.remove('md-size-' + size);
      },
      removeLastDirectionMenuContentClass(direction) {
        this.menuContent.classList.remove('md-direction-' + direction.replace(/ /g, '-'));
      },
      addNewSizeMenuContentClass(size) {
        this.menuContent.classList.add('md-size-' + size);
      },
      addNewDirectionMenuContentClass(direction) {
        this.menuContent.classList.add('md-direction-' + direction.replace(/ /g, '-'));
      },
      handleAlignTriggerClass(trigger) {
        if (trigger) {
          this.menuContent.classList.add('md-align-trigger');
        }
      },
      getPosition(vertical, horizontal) {
        let menuTriggerRect = this.menuTrigger.getBoundingClientRect();

        let top = vertical === 'top'
          ? menuTriggerRect.top + menuTriggerRect.height - this.menuContent.offsetHeight
          : menuTriggerRect.top;

        let left = horizontal === 'left'
          ? menuTriggerRect.left - this.menuContent.offsetWidth + menuTriggerRect.width
          : menuTriggerRect.left;

        top += parseInt(this.mdOffsetY, 10);
        left += parseInt(this.mdOffsetX, 10);

        if (this.mdAlignTrigger) {
          if (vertical === 'top') {
            top -= menuTriggerRect.height + 11;
          } else {
            top += menuTriggerRect.height + 11;
          }
        }

        return { top, left };
      },
      calculateMenuContentPos() {
        let position;

        if (!this.mdDirection) {
          position = this.getPosition('bottom', 'right');
        } else {
          position = this.getPosition.apply(this, this.mdDirection.trim().split(' '));
        }

        position = getInViewPosition(this.menuContent, position);

        this.menuContent.style.top = position.top + window.pageYOffset + 'px';
        this.menuContent.style.left = position.left + window.pageXOffset + 'px';
      },
      recalculateOnResize() {
        window.requestAnimationFrame(this.calculateMenuContentPos);
      },
      open() {
        if (document.body.contains(this.menuContent)) {
          document.body.removeChild(this.menuContent);
        }

        document.body.appendChild(this.menuContent);
        document.body.appendChild(this.backdropElement);
        window.addEventListener('resize', this.recalculateOnResize);

        this.calculateMenuContentPos();

        getComputedStyle(this.menuContent).top;
        this.menuContent.classList.add('md-active');
        this.menuContent.focus();
        this.active = true;
        this.$emit('open');
      },
      close() {
        let close = (event) => {
          if (this.menuContent && event.target === this.menuContent) {
            let activeRipple = this.menuContent.querySelector('.md-ripple.md-active');

            this.menuContent.removeEventListener(transitionEndEventName, close);
            this.menuTrigger.focus();
            this.active = false;

            if (activeRipple) {
              activeRipple.classList.remove('md-active');
            }

            document.body.removeChild(this.menuContent);
            document.body.removeChild(this.backdropElement);
            window.removeEventListener('resize', this.recalculateOnResize);
          }
        };

        this.menuContent.addEventListener(transitionEndEventName, close);
        this.menuContent.classList.remove('md-active');
        this.$emit('close');
      },
      toggle() {
        if (this.active) {
          this.close();
        } else {
          this.open();
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.menuTrigger = this.$el.querySelector('[md-menu-trigger]');
        this.menuContent = this.$el.querySelector('.md-menu-content');
        this.backdropElement = this.$refs.backdrop.$el;
        this.validateMenu();
        this.handleAlignTriggerClass(this.mdAlignTrigger);
        this.addNewSizeMenuContentClass(this.mdSize);
        this.addNewDirectionMenuContentClass(this.mdDirection);
        this.$el.removeChild(this.$refs.backdrop.$el);
        this.menuContent.parentNode.removeChild(this.menuContent);
        this.menuTrigger.addEventListener('click', this.toggle);
      });
    },
    beforeDestroy() {
      if (document.body.contains(this.menuContent)) {
        document.body.removeChild(this.menuContent);
        document.body.removeChild(this.backdropElement);
      }

      this.menuTrigger.removeEventListener('click', this.toggle);
      window.removeEventListener('resize', this.recalculateOnResize);
    }
  };
</script>
