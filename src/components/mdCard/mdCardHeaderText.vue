<template>
  <div class="md-card-header-text" v-once>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.parentClasses = this.$parent.$el.classList;

      if (this.parentClasses.contains('md-card-header')) {
        this.insideParent = true;
        this.parentClasses.add('md-card-header-flex');
      }
    },
    destroyed() {
      this.parentClasses.remove('md-card-header-flex');
    }
  };
</script>
