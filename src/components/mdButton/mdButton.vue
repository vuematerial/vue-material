<template>
  <div class="md-button">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .md-button {
    min-width: 88px;
    height: 40px;
    padding: 0 8px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    transition: .3s ease;
  }
</style>

<script>
  export default {
    name: 'MdButton'
  }
</script>
