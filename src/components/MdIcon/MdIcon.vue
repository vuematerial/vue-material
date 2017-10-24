<template>
  <md-svg-loader class="md-icon md-icon-image" :md-src="mdSrc" :class="[$mdActiveTheme]" v-if="mdSrc" @md-loaded="$emit('md-loaded')" />
  <i class="md-icon md-icon-font" :class="[$mdActiveTheme]" v-else>
    <slot />
  </i>
</template>

<script>
  import MdComponent from 'core/MdComponent'
  import MdSvgLoader from 'components/MdSvgLoader/MdSvgLoader'

  export default new MdComponent({
    name: 'MdIcon',
    components: {
      MdSvgLoader
    },
    props: {
      mdSrc: String
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "./mixins";

  $icon-size: 24px;

  .md-icon {
    @include md-icon-size($icon-size);
    margin: auto;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    &.md-size-2x {
      @include md-icon-size($icon-size * 2);
    }

    &.md-size-3x {
      @include md-icon-size($icon-size * 3);
    }

    &.md-size-4x {
      @include md-icon-size($icon-size * 4);
    }

    &.md-size-5x {
      @include md-icon-size($icon-size * 5);
    }
  }

  .md-icon-image {
    svg {
      height: 100%;
      flex: 1;
      transition: fill .4s $md-transition-default-timing;
    }
  }

  .md-icon {
    transition: color .4s $md-transition-default-timing;
    direction: ltr;
    font-family: "Material Icons";
    font-feature-settings: "liga";
    font-style: normal;
    letter-spacing: normal;
    line-height: 1;
    text-rendering: optimizeLegibility;
    text-transform: none;
    word-wrap: normal;
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
