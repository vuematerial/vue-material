<template>
  <i class="splash-icon" v-once>
    <slot />
  </i>
</template>

<style lang="scss" scoped>
  $container-size: 100px;
  $item-size: $container-size * .8;

  .splash-icon {
    width: $container-size;
    height: $container-size;
    margin-bottom: 32px;
    display: block;
    position: relative;

    > div {
      width: $item-size;
      height: $item-size;
    }
  }
</style>

<script>
  export default {
    name: 'SplashIcon'
  }
</script>
