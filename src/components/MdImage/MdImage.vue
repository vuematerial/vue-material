<template>
  <div class="md-image" :class="[$mdActiveTheme]">
    <slot />
  </div>
</template>

<style lang="scss">
  .md-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdImage',
    props: {
      mdSrc: String
    }
  })
</script>
