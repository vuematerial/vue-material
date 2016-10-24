<template>
  <div class="md-menu-item" @click="close">
    <div class="md-menu-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      close() {
        this.$emit('click');
        this.$parent.close();
      }
    },
    mounted() {
      if (!this.$parent.$el.classList.contains('md-menu-content')) {
        this.$destroy();

        throw new Error('You must wrap the md-menu-item in a md-menu-content');
      }
    }
  };
</script>
