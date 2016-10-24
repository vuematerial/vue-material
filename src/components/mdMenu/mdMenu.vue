<template>
  <div class="md-menu">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdMenu.scss"></style>

<script>
  import 'transitionEnd';

  let transitionEnd = window.transitionEnd;

  export default {
    props: {
      mdSize: {
        type: [Number, String],
        default: 0
      },
      mdDirection: {
        type: String,
        default: 'bottom right'
      }
    },
    data() {
      return {
        margin: 16,
        active: false
      };
    },
    watch: {
      mdSize(current, previous) {
        this.removeLastMenuContentClass(previous);
        this.addNewMenuContentClass();
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
      removeLastMenuContentClass(size) {
        this.menuContent.classList.remove('md-size-' + size);
      },
      addNewMenuContentClass() {
        this.menuContent.classList.add('md-size-' + this.mdSize);
      },
      closeOnOffClick(event) {
        if (!this.$el.contains(event.target)) {
          this.close();
        }
      },
      getBottomRightPos() {
        let menuTriggerRect = this.menuTrigger.getBoundingClientRect();
        let position = {
          top: menuTriggerRect.top,
          left: menuTriggerRect.left,
          origin: 'left top'
        };

        if (position.left <= this.margin) {
          position.left = this.margin;
          position.origin = 'center top';
        }

        if (position.top <= this.margin) {
          position.top = this.margin;
          position.origin = 'left center';
        }

        if (position.left <= this.margin && position.top <= this.margin) {
          position.origin = 'center';
        }

        return position;
      },
      getBottomLeftPos() {
        let menuTriggerRect = this.menuTrigger.getBoundingClientRect();
        let position = {
          top: menuTriggerRect.top,
          left: menuTriggerRect.left - this.menuContent.offsetWidth + menuTriggerRect.width,
          origin: 'right top'
        };

        if (position.left <= this.margin) {
          position.left = this.margin;
          position.origin = 'center top';
        }

        if (top <= this.margin) {
          position.top = this.margin;
          position.origin = 'right center';
        }

        if (position.left <= this.margin && top <= this.margin) {
          position.origin = 'center';
        }

        return position;
      },
      getTopRightPos() {
        let menuTriggerRect = this.menuTrigger.getBoundingClientRect();
        let position = {
          top: menuTriggerRect.top + menuTriggerRect.height - this.menuContent.offsetHeight,
          left: menuTriggerRect.left,
          origin: 'left bottom'
        };

        if (position.left <= this.margin) {
          position.left = this.margin;
          position.origin = 'center bottom';
        }

        if (top <= this.margin) {
          top = this.margin;
          position.origin = 'left center';
        }

        if (position.left <= this.margin && position.top <= this.margin) {
          position.origin = 'center';
        }

        return position;
      },
      getTopLeftPos() {
        let menuTriggerRect = this.menuTrigger.getBoundingClientRect();
        let position = {
          top: menuTriggerRect.top + menuTriggerRect.height - this.menuContent.offsetHeight,
          left: menuTriggerRect.left - this.menuContent.offsetWidth + menuTriggerRect.width,
          origin: 'right bottom'
        };

        if (position.left <= this.margin) {
          position.left = this.margin;
          position.origin = 'center bottom';
        }

        if (position.top <= this.margin) {
          position.top = this.margin;
          position.origin = 'right center';
        }

        if (position.left <= this.margin && position.top <= this.margin) {
          position.origin = 'center';
        }

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

        this.menuContent.style.transformOrigin = position.origin;
        this.menuContent.style.top = position.top + 'px';
        this.menuContent.style.left = position.left + 'px';
      },
      recalculateOnResize() {
        window.requestAnimationFrame(this.calculateMenuContentPos);
      },
      open() {
        document.body.appendChild(this.menuContent);
        document.addEventListener('click', this.closeOnOffClick);
        window.addEventListener('resize', this.recalculateOnResize);

        this.calculateMenuContentPos();

        getComputedStyle(this.menuContent).top;
        this.menuContent.classList.add('md-active');
        this.active = true;
      },
      close() {
        transitionEnd(this.menuContent).bind(() => {
          document.body.removeChild(this.menuContent);
          document.removeEventListener('click', this.closeOnOffClick);
          window.removeEventListener('resize', this.recalculateOnResize);

          this.active = false;
          transitionEnd(this.menuContent).unbind();
        });

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
      this.menuTrigger = this.$el.querySelector('[md-menu-trigger]');
      this.menuContent = this.$el.querySelector('.md-menu-content');
      this.validateMenu();
      this.addNewMenuContentClass();

      this.menuContent.parentNode.removeChild(this.menuContent);
      this.menuTrigger.addEventListener('click', this.toggle);
    }
  };
</script>
