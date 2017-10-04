<template>
  <div class="md-card-expand">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'MdCardExpand',
    inject: ['MdCard']
  }
</script>

<style lang="scss">
  .md-card-expand {
    overflow: hidden;

    .md-card-actions {
      position: relative;
      z-index: 2;
    }

    .md-card-expand-content {
      position: relative;
      z-index: 1;
    }
  }
</style>
