<template>
  <md-svg-loader class="md-icon" :md-src="mdSrc" :class="[$mdActiveTheme]" />
</template>

<style lang="scss">
  $icon-size: 24px;

  @mixin icon-size($size: $icon-size) {
    width: $size;
    min-width: $size;
    height: $size;
  }

  .md-icon {
    @include icon-size();
    margin: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    fill: currentColor;
    text-rendering: optimizeLegibility;
    vertical-align: middle;

    &.md-size-2x {
      @include icon-size($icon-size * 2);
    }

    &.md-size-3x {
      @include icon-size($icon-size * 3);
    }

    &.md-size-4x {
      @include icon-size($icon-size * 4);
    }

    &.md-size-5x {
      @include icon-size($icon-size * 5);
    }

    svg {
      width: 100%;
      height: 100%;
      flex: 1;
    }
  }

  img.md-icon {
    user-select: none;
    -webkit-user-drag: none;
  }
</style>

<script lang="babel">
  import MdComponent from 'core/MdComponent'
  import MdSvgLoader from 'core/MdSvgLoader'

  export default new MdComponent({
    name: 'MdIcon',
    components: {
      MdSvgLoader
    },
    props: {
      mdSrc: {
        type: String,
        required: true
      }
    }
  })
</script>
