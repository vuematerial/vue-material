<template>
  <div class="md-menu-content" @keydown.esc="close" tabindex="-1">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    methods: {
      close() {
        this.$parent.close();
      }
    },
    mounted() {
      if (!this.$parent.$el.classList.contains('md-menu')) {
        this.$destroy();

        throw new Error('You must wrap the md-menu-content in a md-menu');
      }
    }
  };
</script>
