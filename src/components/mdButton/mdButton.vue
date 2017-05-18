<template>
  <div class="md-button" :class="[$mdActiveTheme]">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  @import '~components/MdAnimation/variables';

  $md-button-min-width: 88px;
  $md-button-height: 36px;
  $md-button-radius: 2px;

  .md-button {
    min-width: $md-button-min-width;
    height: $md-button-height;
    margin: 6px 8px;
    padding: 0 8px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    user-select: none;
    cursor: pointer;
    outline: none;
    background: none;
    border: 0;
    border-radius: $md-button-radius;
    transition: $md-transition-default;
    color: currentColor;
    font-family: inherit;
    font-size: 14px;
    font-style: inherit;
    font-variant: inherit;
    font-weight: 500;
    letter-spacing: inherit;
    line-height: $md-button-height;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    vertical-align: top;
    white-space: nowrap;

    &:focus {
      outline: none;
    }

    &::-moz-focus-inner {
      border:0;
    }
  }
</style>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdButton'
  })
</script>
