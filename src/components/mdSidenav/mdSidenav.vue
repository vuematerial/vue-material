<template>
  <div class="md-sidenav" :class="classes" @keyup.esc="close" tabindex="0">
    <div class="md-sidenav-content">
      <slot></slot>
    </div>

    <div class="md-backdrop" @click="close"></div>
  </div>
</template>

<style lang="scss" src="./mdSidenav.scss"></style>

<script>
  export default {
    data() {
      return {
        mdVisible: false
      };
    },
    computed: {
      classes() {
        return this.mdVisible && 'md-active';
      }
    },
    methods: {
      show() {
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
          this.show();
        }
      }
    }
  };
</script>
