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

          throw new Error('You should have a md-menu-content inside your menu.');
        }

        if (!this.menuTrigger) {
          this.$destroy();

          throw new Error('You should have an element with a md-menu-trigger attribute inside your menu.');
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
      calculateMenuContentPos() {
        let menuTriggerRect = this.menuTrigger.getBoundingClientRect();
        let margin = 8;
        let top;
        let left;
        let origin;

        switch (this.mdDirection) {
          case 'bottom left':
            top = menuTriggerRect.top;
            left = menuTriggerRect.left - this.menuContent.offsetWidth + menuTriggerRect.width;
            origin = 'right top';

            if (left <= margin) {
              left = margin;
              origin = 'center top';
            }

            if (top <= margin) {
              top = margin;
              origin = 'right center';
            }

            if (left <= margin && top <= margin) {
              origin = 'center';
            }

            break;

          case 'top right':
            top = menuTriggerRect.top + menuTriggerRect.height - this.menuContent.offsetHeight;
            left = menuTriggerRect.left;
            origin = 'left bottom';

            if (left <= margin) {
              left = margin;
              origin = 'center bottom';
            }

            if (top <= margin) {
              top = margin;
              origin = 'left center';
            }

            if (left <= margin && top <= margin) {
              origin = 'center';
            }

            break;

          case 'top left':
            top = menuTriggerRect.top + menuTriggerRect.height - this.menuContent.offsetHeight;
            left = menuTriggerRect.left - this.menuContent.offsetWidth + menuTriggerRect.width;
            origin = 'right bottom';

            if (left <= margin) {
              left = margin;
              origin = 'center bottom';
            }

            if (top <= margin) {
              top = margin;
              origin = 'right center';
            }

            if (left <= margin && top <= margin) {
              origin = 'center';
            }

            break;

          default:
            top = menuTriggerRect.top;
            left = menuTriggerRect.left;
            origin = 'left top';

            if (left <= margin) {
              left = margin;
              origin = 'center top';
            }

            if (top <= margin) {
              top = margin;
              origin = 'left center';
            }

            if (left <= margin && top <= margin) {
              origin = 'center';
            }
        }

        this.menuContent.style.transformOrigin = origin;
        this.menuContent.style.top = top + 'px';
        this.menuContent.style.left = left + 'px';
      },
      open() {
        document.body.appendChild(this.menuContent);
        document.addEventListener('click', this.closeOnOffClick);

        this.calculateMenuContentPos();

        getComputedStyle(this.menuContent).top;
        this.menuContent.classList.add('md-active');
        this.active = true;
      },
      close() {
        transitionEnd(this.menuContent).bind(() => {
          document.body.removeChild(this.menuContent);
          document.removeEventListener('click', this.closeOnOffClick);
          transitionEnd(this.menuContent).unbind();
          this.active = false;
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
