<template>
  <div class="md-badge" :class="[$mdActiveTheme]">
    <slot />
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdBadgeStandalone'
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-badge {
    position: absolute;
    transition: .3s $md-transition-default-timing;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -4px;
    font-size: 10px;
    font-style: normal;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    color: #fff;
    pointer-events: none;
    z-index: 11;
    .md-list-item-content & {
      position: relative;
      top: 0;
      bottom: 0;
      right: 0;
    }
    &.md-dense {
      width: 18px;
      height: 18px;
      font-size: 8px;
    }
    &.md-square {
      width: auto;
      border-radius: 3px;
      height: 18px;
      padding: 0 4px;
    }
  }
</style>
