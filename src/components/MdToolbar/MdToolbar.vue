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

  .md-toolbar-container,
  .md-toolbar {
    width: 100%;
    min-height: $md-toolbar-height;
    display: flex;
    align-items: center;
    align-content: center;
    transition: $md-transition-default;
    transition-property: background-color, min-height;
    will-change: background-color, min-height;

    @include md-layout-small {
      min-height: $md-toolbar-height-landscape;
    }

    @include md-layout-xsmall {
      min-height: $md-toolbar-height-portrait;
    }
  }

  .md-toolbar {
    padding: 0 8px 0 16px;
    flex-flow: row wrap;
    position: relative;

    &.md-dense {
      min-height: $md-toolbar-height-dense;
    }

    &.md-medium,
    &.md-large {
      .md-toolbar-container {
        min-height: $md-toolbar-height;
      }
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
    align-self: flex-start;
  }
</style>
