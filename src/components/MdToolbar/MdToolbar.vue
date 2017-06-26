<template>
  <div class="md-toolbar" :class="[$mdActiveTheme]">
    <slot />
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdToolbar'
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-toolbar {
    min-height: 64px;
    padding: 0 8px 0 16px;
    display: flex;
    align-items: center;
    align-content: center;
    flex-flow: row wrap;
    position: relative;
    transition: $md-transition-default;
    transform: translate3D(0, 0, 0);

    &.md-dense {
      min-height: 48px;
    }

    &.md-medium {
      min-height: 88px;

      &.md-dense {
        min-height: 72px;
      }
    }

    &.md-large {
      min-height: 128px;
      align-content: inherit;

      &.md-dense {
        min-height: 96px;
      }
    }

    .md-title {
      margin: 0;
      font-size: 20px;
      font-weight: 400;
    }
  }
</style>
