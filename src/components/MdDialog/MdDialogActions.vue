<template>
  <div class="md-dialog-actions">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MdDialogActions'
}
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-dialog-actions {
    min-height: 52px;
    padding: 8px 8px 8px 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    &:before {
      height: 1px;
      position: absolute;
      top: -1px;
      right: 0;
      left: 0;
      content: " ";
    }

    .md-button {
      min-width: 64px;
      margin: 0;

      + .md-button {
        margin-left: 8px;
      }
    }
  }
</style>
