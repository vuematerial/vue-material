<template>
  <div class="md-speed-dial" :class="[$mdActiveTheme]">
    <slot />
  </div>
</template>

<script>
import MdComponent from 'core/MdComponent'

export default new MdComponent({
  name: 'MdSpeedDial'
})
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-speed-dial {
    display: flex;
    flex-direction: column;
    align-items: center;

    &.md-active {
      .md-speed-dial-content .md-button {
        pointer-events: auto;
        opacity: 1;
        transform: translate3d(0, 0, 0) scale(1);
      }
    }

    .md-button {
      margin: 6px 0;
    }

    .md-speed-dial-content .md-button {
      pointer-events: none;
      opacity: 0;
      transform: translate3d(0, 50%, 0) scale(.8);
      transition: .3s $md-transition-default-timing;
      transition-property: opacity, transform;
      will-change: opacity, transform;

      @for $i from 0 through 5 {
        $num: 6 - $i;

        &:nth-child(#{$num}) {
          transition-delay: .1s * $num
        }
      }
    }
  }
</style>
