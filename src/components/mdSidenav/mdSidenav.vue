<template>
  <div class="md-sidenav" :class="classes" @keyup.esc="hide" tabindex="0">
    <div class="md-sidenav-content">
      <slot></slot>
    </div>

    <div class="md-backdrop" @click="hide"></div>
  </div>
</template>

<style lang="scss" src="./mdSidenav.scss"></style>

<script>
  export default {
    props: {
      mdVisible: Boolean
    },
    computed: {
      classes() {
        return this.mdVisible && 'md-active';
      }
    },
    watch: {
      mdVisible(value) {
        if (value) {
          this.$el.focus();
        } else {
          this.$el.blur();
        }
      }
    },
    methods: {
      show() {
        this.mdVisible = true;
      },
      hide() {
        this.mdVisible = false;
      },
      toggle() {
        this.mdVisible = !this.visible;
      }
    }
  };
</script>
