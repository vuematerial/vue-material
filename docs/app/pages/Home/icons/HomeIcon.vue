<template>
  <i class="home-icon">
    <slot />
  </i>
</template>

<script>
  export default {
    name: 'HomeIcon'
  }
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdLayout/mixins";

  $container-size: 100px;
  $item-size: $container-size * .8;

  .home-icon {
    width: $container-size;
    height: $container-size;
    margin-bottom: 32px;
    display: block;
    position: relative;

    @include md-layout-xsmall {
      margin: 0 auto 32px;
    }

    > div {
      width: $item-size;
      height: $item-size;
    }
  }
</style>
