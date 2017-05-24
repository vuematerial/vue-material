<template>
  <div class="md-button" :class="[$mdActiveTheme]">
    <span class="md-button-content">
      <slot />
    </span>

    <md-ripple :md-disabled="!mdRipple" />
  </div>
</template>

<style lang="scss">
  @import '~components/MdAnimation/variables';
  @import '~components/MdElevation/index';

  $md-button-min-width: 88px;
  $md-button-height: 36px;
  $md-button-radius: 2px;
  $md-button-font-size: 14px;

  $md-button-dense-height: 32px;

  .md-button {
    min-width: $md-button-min-width;
    height: $md-button-height;
    margin: 6px 8px;
    padding: 0 8px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    user-select: none;
    outline: none;
    border: 0;
    border-radius: $md-button-radius;
    transition: $md-transition-default;
    font: inherit;
    font-size: $md-button-font-size;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;

    &:active {
      outline: none;
    }

    &:hover:not([disabled]) {
      cursor: pointer;
    }

    &::-moz-focus-inner {
      padding: 0;
      border: 0;
    }

    &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      transition: $md-transition-default;
      content: " ";
    }

    &.md-dense {
      height: $md-button-dense-height;
      font-size: 13px;
    }

    &.md-raised:not([disabled]) {
      @include md-elevation(2);

      &:active {
        @include md-elevation(6);
      }
    }

    + .md-button {
      margin-left: 0;
    }
  }

  .md-button-content {
    position: relative;
    z-index: 2;
  }
</style>

<script>
  import MdUseRipple from 'core/MdUseRipple'

  export default new MdUseRipple({
    name: 'MdButton'
  })
</script>
