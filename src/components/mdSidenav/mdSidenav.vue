<template>
  <div class="md-sidenav" :class="[themeClass, classes]" @keyup.esc="close" tabindex="0">
    <div class="md-sidenav-content">
      <slot></slot>
    </div>

    <md-backdrop class="md-sidenav-backdrop" @close="close"></md-backdrop>
  </div>
</template>

<style lang="scss" src="./mdSidenav.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    data() {
      return {
        mdVisible: false
      };
    },
    mixins: [theme],
    computed: {
      classes() {
        return this.mdVisible && 'md-active';
      }
    },
    methods: {
      show() {
        this.open();
      },
      open() {
        this.mdVisible = true;
        this.$el.focus();
        this.$emit('open');
      },
      close() {
        this.mdVisible = false;
        this.$el.blur();
        this.$emit('close');
      },
      toggle() {
        if (this.mdVisible) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  };
</script>
