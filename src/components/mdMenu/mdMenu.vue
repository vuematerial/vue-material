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
      mdCloseOnSelect: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        browserMargin: 8,
        active: false
      };
    },
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
        this.menuContent.classList.remove('md-direction-' + direction.replace(' ', '-'));
      },
      addNewSizeMenuContentClass(size) {
        this.menuContent.classList.add('md-size-' + size);
      },
      addNewDirectionMenuContentClass(direction) {
        this.menuContent.classList.add('md-direction-' + direction.replace(' ', '-'));
      },
      getBottomRightPos() {
        let menuTriggerRect = this.menuTrigger.getBoundingClientRect();
        let position = {
          top: menuTriggerRect.top,
          left: menuTriggerRect.left
        };

        position = getInViewPosition(this.menuContent, position);

        return position;
      },
      getBottomLeftPos() {
        let menuTriggerRect = this.menuTrigger.getBoundingClientRect();
        let position = {
          top: menuTriggerRect.top,
          left: menuTriggerRect.left - this.menuContent.offsetWidth + menuTriggerRect.width
        };

        position = getInViewPosition(this.menuContent, position);

        return position;
      },
      getTopRightPos() {
        let menuTriggerRect = this.menuTrigger.getBoundingClientRect();
        let position = {
          top: menuTriggerRect.top + menuTriggerRect.height - this.menuContent.offsetHeight,
          left: menuTriggerRect.left
        };

        position = getInViewPosition(this.menuContent, position);

        return position;
      },
      getTopLeftPos() {
        let menuTriggerRect = this.menuTrigger.getBoundingClientRect();
        let position = {
          top: menuTriggerRect.top + menuTriggerRect.height - this.menuContent.offsetHeight,
          left: menuTriggerRect.left - this.menuContent.offsetWidth + menuTriggerRect.width
        };

        position = getInViewPosition(this.menuContent, position);

        return position;
      },
      calculateMenuContentPos() {
        let position;

        switch (this.mdDirection) {
          case 'bottom left':
            position = this.getBottomLeftPos();

            break;

          case 'top right':
            position = this.getTopRightPos();

            break;

          case 'top left':
            position = this.getTopLeftPos();

            break;

          default:
            position = this.getBottomRightPos();
        }

        this.menuContent.style.top = position.top + 'px';
        this.menuContent.style.left = position.left + 'px';
      },
      recalculateOnResize() {
        window.requestAnimationFrame(this.calculateMenuContentPos);
      },
      open() {
        if (this.rootElement.contains(this.menuContent)) {
          this.rootElement.removeChild(this.menuContent);
        }

        this.rootElement.appendChild(this.menuContent);
        this.rootElement.appendChild(this.backdropElement);
        window.addEventListener('resize', this.recalculateOnResize);

        this.calculateMenuContentPos();

        getComputedStyle(this.menuContent).top;
        this.menuContent.classList.add('md-active');
        this.menuContent.focus();
        this.active = true;
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

            this.rootElement.removeChild(this.menuContent);
            this.rootElement.removeChild(this.backdropElement);
            window.removeEventListener('resize', this.recalculateOnResize);
          }
        };

        this.menuContent.addEventListener(transitionEndEventName, close);
        this.menuContent.classList.remove('md-active');
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
        this.rootElement = this.$root.$el;
        this.menuTrigger = this.$el.querySelector('[md-menu-trigger]');
        this.menuContent = this.$el.querySelector('.md-menu-content');
        this.backdropElement = this.$refs.backdrop.$el;
        this.validateMenu();
        this.addNewSizeMenuContentClass(this.mdSize);
        this.addNewDirectionMenuContentClass(this.mdDirection);
        this.$el.removeChild(this.$refs.backdrop.$el);
        this.menuContent.parentNode.removeChild(this.menuContent);
        this.menuTrigger.addEventListener('click', this.toggle);
      });
    }
  };
</script>
