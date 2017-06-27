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

  .md-toolbar,
  .md-toolbar-row {
    width: 100%;
    min-height: $md-toolbar-height;
    display: flex;
    align-items: center;
    align-content: center;
    transition: .3s $md-transition-default-timing;
    transition-property: background-color, color, min-height;
    will-change: background-color, color, min-height;

    @include md-layout-small {
      min-height: $md-toolbar-height-landscape;
    }

    @include md-layout-xsmall {
      min-height: $md-toolbar-height-portrait;
    }
  }

  .md-toolbar {
    padding: 0 8px;
    flex-flow: row wrap;
    position: relative;

    &.md-dense {
      min-height: $md-toolbar-height-dense;
    }

    &.md-medium,
    &.md-large {
      .md-toolbar-row {
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

        .md-toolbar-row + .md-toolbar-row {
          min-height: 32px;
        }
      }
    }

    .md-toolbar-offset {
      margin-left: 48px;
    }

    .md-title {
      margin: 0;
      margin-left: 8px;
      overflow: hidden;
      font-weight: 400;
      letter-spacing: .02em;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: top
    }

    .md-button {
      &:last-child,
      + .md-button {
        margin-right: 0;
      }

      &:first-child {
        margin-left: 0;
      }
    }
  }

  .md-toolbar-row {
    align-self: flex-start;
  }

  .md-toolbar-section-start,
  .md-toolbar-section-end {
    display: flex;
    flex: 1;
  }

  .md-toolbar-section-start {
    justify-content: flex-start;
    order: 1;
  }

  .md-toolbar-section-end {
    justify-content: flex-end;
    order: 2;
  }
</style>
