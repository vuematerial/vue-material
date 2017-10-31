<template>
  <transition name="md-table-alternate-header">
    <div class="md-table-alternate-header">
      <slot />
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'MdTableAlternateHeader'
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-table-alternate-header {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
    will-change: opacity, transform;
  }

  .md-table-alternate-header-enter,
  .md-table-alternate-header-leave-active {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  .md-table-alternate-header-enter-active {
    transition: .3s $md-transition-default-timing;
  }

  .md-table-alternate-header-leave-active {
    transition: .2s $md-transition-leave-timing;
  }
</style>
