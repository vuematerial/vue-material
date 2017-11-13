<template>
  <div class="note-block" :class="{ alert, tip, warning }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NoteBlock',
  props: {
    alert: Boolean,
    warning: Boolean,
    tip: Boolean
  }
}
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/factory";

  $note-background: md-get-palette-color(grey, 200);
  $note-border: md-get-palette-color(orange, A200);
  $alert-border: md-get-palette-color(red, A200);
  $warning-bg: md-get-palette-color(red, 100);
  $warning-border: md-get-palette-color(red, A200);
  $tip-border: md-get-palette-color(green, 500);

  .note-block {
    margin: 1.5em 0;
    padding: 8px 16px;
    background-color: $note-background;
    border-left: 4px solid $note-border;

    &.alert {
      border-left-color: $alert-border;
    }

    &.tip {
      border-left-color: $tip-border;
    }

    &.warning {
      background-color: $warning-bg;
      border-left-color: $warning-border;
      font-size: 15px;
    }
  }
</style>
