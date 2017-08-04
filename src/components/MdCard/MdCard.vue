<template>
  <div class="md-card" :class="[$mdActiveTheme, cardClasses]">
    <slot></slot>
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdCard',
    props: {
      mdWithHover: Boolean
    },
    computed: {
      cardClasses () {
        return {
          'md-with-hover': this.mdWithHover
        }
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdElevation/mixins";

  $md-card-radius: 2px;

  .md-card {
    @include md-elevation(2);
    overflow: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    border-radius: $md-card-radius;
    transition: .3s $md-transition-default-timing;
    transition-property: color, background-color;
    will-change: color, background-color;

    &.md-with-hover {
      cursor: pointer;
      transition: .3s $md-transition-stand-timing;
      transition-property: background-color, box-shadow;
      will-change: background-color, box-shadow;

      &:hover {
        z-index: 2;
        @include md-elevation(8);
      }
    }
  }
</style>
