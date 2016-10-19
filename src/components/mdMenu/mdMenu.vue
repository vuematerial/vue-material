<template>
  <div class="md-menu">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdMenu.scss"></style>

<script>
  export default {
    props: {
      mdSize: {
        type: [Number, String],
        default: 1
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
      toggle() {
        if (this.active) {
          this.menuContent.classList.remove('md-active');
          document.body.removeChild(this.menuContent);
          this.active = false;
        } else {
          document.body.appendChild(this.menuContent);

          getComputedStyle(this.menuContent).display;
          this.menuContent.classList.add('md-active');
          this.active = true;
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
