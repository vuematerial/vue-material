<template>
  <div class="md-toolbar" :class="[$mdActiveTheme, `md-elevation-${mdElevation}`]">
    <slot />
  </div>
</template>

<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdToolbar',
    props: {
      mdElevation: {
        type: [String, Number],
        default: 4
      }
    }
  })
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";
  @import "~components/MdLayout/mixins";
  @import "~components/MdElevation/mixins";

  $md-toolbar-height: 64px;
  $md-toolbar-height-portrait: 56px;
  $md-toolbar-height-landscape: 48px;
  $md-toolbar-height-dense: 48px;

  .md-toolbar {
    min-height: $md-toolbar-height;
    padding: 0 8px 0 16px;
    display: flex;
    align-items: center;
    align-content: center;
    flex-flow: row wrap;
    position: relative;
    transition: $md-transition-default;
    transform: translate3D(0, 0, 0);

    @include md-layout-small {
      min-height: $md-toolbar-height-landscape;
    }

    @include md-layout-xsmall {
      min-height: $md-toolbar-height-portrait;
    }

    &.md-dense {
      min-height: $md-toolbar-height-dense;
    }

    &.md-medium {
      min-height: 88px;
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

  .md-toolbar-container {
    width: 100%;
    min-height: $md-toolbar-height;
    display: flex;
    align-items: center;
    align-content: center;
    align-self: flex-start;
  }
</style>
