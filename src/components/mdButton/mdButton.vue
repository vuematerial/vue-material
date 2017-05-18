<template>
  <div class="md-button" :class="[$mdActiveTheme]">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .md-button {
    min-width: 88px;
    height: 36px;
    padding: 0 8px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    transition: .3s ease;
  }
</style>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdButton'
  })
</script>
