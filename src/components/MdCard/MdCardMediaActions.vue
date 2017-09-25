<template>
  <div class="md-card-media-actions">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'MdCardMediaActions'
  }
</script>

<style lang="scss">
  .md-card-media-actions {
    padding: 16px;
    display: flex;
    justify-content: space-between;

    .md-card-media {
      $size: 240px;

      max-width: $size;
      max-height: $size;
      flex: 1;
    }

    .md-card-actions {
      margin-left: 16px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .md-button + .md-button {
        margin: 8px 0 0;
      }
    }
  }
</style>
