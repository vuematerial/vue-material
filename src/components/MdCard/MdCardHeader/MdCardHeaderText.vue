<template>
  <div class="md-card-header-text">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'MdCardHeaderText',
    data: () => ({
      parentClasses: null
    }),
    mounted () {
      this.parentClasses = this.$parent.$el.classList

      if (this.parentClasses.contains('md-card-header')) {
        this.parentClasses.add('md-card-header-flex')
      }
    },
    beforeDestroy () {
      this.parentClasses.remove('md-card-header-flex')
    }
  }
</script>
