<template>
  <div class="md-card-header">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'MdCardHeader'
  }
</script>

<style lang="scss">
  .md-card-header {
    padding: 16px;

    &:first-child {
      > .md-title:first-child,
      > .md-card-header-text > .md-title:first-child {
        margin-top: 8px;
      }
    }

    &:last-child {
      margin-bottom: 8px;
    }

    &.md-card-header-flex {
      display: flex;
      justify-content: space-between;
    }

    + .md-card-content {
      padding-top: 0;
    }

    + .md-card-actions:not(:last-child) {
      padding: 0 8px;
    }

    > img {
      border-radius: 50%;
    }

    > img,
    .md-avatar {
      margin-right: 16px;
      float: left;

      ~ .md-title {
        font-size: 14px;
      }

      ~ .md-title,
      ~ .md-subhead {
        font-weight: 500;
        line-height: 20px;
      }
    }

    .md-button {
      margin: 0;

      &:last-child {
        margin-right: -4px;
      }

      + .md-button {
        margin-left: 8px;
      }
    }

    .md-card-header-text {
      flex: 1;
    }

    .md-card-media {
      $size: 80px;

      width: $size;
      height: $size;
      margin-left: 16px;
      flex: 0 0 $size;

      &.md-medium {
        $size: 120px;

        width: $size;
        height: $size;
        flex: 0 0 $size;
      }

      &.md-big {
        $size: 160px;

        width: $size;
        height: $size;
        flex: 0 0 $size;
      }
    }
  }
</style>
