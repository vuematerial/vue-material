<template>
  <div class="md-card-actions" :class="`md-alignment-${mdAlignment}`">
    <slot></slot>
  </div>
</template>

<script>
  const cardActionsAlignments = ['left', 'right', 'space-between']

  export default {
    name: 'MdCardActions',
    props: {
      mdAlignment: {
        type: String,
        default: 'right',
        validator (value) {
          if (cardActionsAlignments.includes(value)) {
            return true
          }

          console.error(`The md-alignment prop is invalid. Given value: ${value}. Available options: ${cardActionsAlignments.join(', ')}.`)

          return false
        }
      }
    }
  }
</script>

<style lang="scss">
  .md-card-actions {
    padding: 8px;
    display: flex;
    align-items: center;

    &.md-alignment-right {
      justify-content: flex-end;
    }

    &.md-alignment-left {
      justify-content: flex-start;
    }

    &.md-alignment-space-between {
      justify-content: space-between;
    }

    .md-button {
      margin: 0;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      + .md-button {
        margin-left: 4px;
      }
    }
  }
</style>
