<template>
  <div class="md-avatar" :class="[$mdActiveTheme]">
    <slot />
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdAvatar'
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  $md-avatar-size: 40px;
  $md-avatar-large-size: 64px;
  $md-avatar-large-icon: 40px;
  $md-avatar-small-size: 24px;
  $md-avatar-small-icon: 16px;

  .md-avatar {
    width: $md-avatar-size;
    min-width: $md-avatar-size;
    height: $md-avatar-size;
    margin: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    user-select: none;
    position: relative;
    border-radius: $md-avatar-size;
    transition: $md-transition-default;
    transition-property: color, background-color;
    will-change: color, background-color;
    font-size: 24px;
    letter-spacing: -.05em;
    vertical-align: middle;

    &.md-large {
      min-width: $md-avatar-large-size;
      min-height: $md-avatar-large-size;
      border-radius: $md-avatar-large-size;
      font-size: $md-avatar-large-icon - 8px;

      .md-icon {
        font-size: $md-avatar-large-icon !important;
      }
    }

    &.md-small {
      width: $md-avatar-small-size;
      min-width: $md-avatar-small-size;
      height: $md-avatar-small-size;
      border-radius: $md-avatar-small-size;
      font-size: $md-avatar-small-icon - 2px;

      .md-icon {
        font-size: $md-avatar-small-icon !important;
      }
    }

    .md-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    img {
      width: 100%;
      height: 100%;
      display: block;
    }

    .md-ripple {
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }
</style>
