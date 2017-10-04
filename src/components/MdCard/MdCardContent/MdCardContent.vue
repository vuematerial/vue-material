<template>
  <div class="md-card-content">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'MdCardContent'
  }
</script>

<style lang="scss">
  .md-card-content {
    padding: 16px;
    font-size: 14px;
    line-height: 22px;

    &:last-of-type {
      padding-bottom: 24px;
    }
  }
</style>
