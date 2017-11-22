<template>
  <div class="note-block" :class="[{ alert, tip, warning }, $mdActiveTheme]">
    <slot />
  </div>
</template>

<script>
  import MdComponent from 'vue-material/core/MdComponent'

  export default MdComponent({
    name: 'NoteBlock',
    props: {
      alert: Boolean,
      warning: Boolean,
      tip: Boolean
    }
  })
</script>

<style lang="scss" scoped>
  @import "~vue-material/components/MdAnimation/variables";
  @import "~vue-material/theme/engine";

  $note-border: md-get-palette-color(orange, A200);
  $alert-border: md-get-palette-color(red, A200);
  $tip-border: md-get-palette-color(green, 500);

  .note-block {
    margin: 1.5em 0;
    padding: 8px 16px;
    overflow: hidden;
    border-left: 4px solid $note-border;

    &.alert {
      border-left-color: $alert-border;
    }

    &.tip {
      border-left-color: $tip-border;
    }

    &.warning {
      font-size: 15px;
    }
  }
</style>
