<template>
  <div class="grid-layout">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .grid-layout {
    margin: 0 -16px;
    display: flex;
    flex-wrap: wrap;
  }

  .grid-layout-item {
    padding: 24px 16px;
    flex: 0 0 33%;
  }
</style>

<script>
export default {
  name: 'GridLayout'
}
</script>
