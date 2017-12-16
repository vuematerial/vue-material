<template>
  <div class="md-card-actions" :class="setClassName" >
    <slot />
  </div>
</template>

<script>
  import MdPropValidator from 'core/utils/MdPropValidator'

  const alignments = ['left', 'right', 'space-between']

  export default {
    name: 'MdCardActions',
    props: {
      mdAlignment: {
        type: String,
        default: 'right',
        ...MdPropValidator('md-alignment', alignments)
      },
      mdRtl:{
        type: Boolean,
        default: false
      }
    },
    computed:{
      setClassName() /* string */{
        let classesName = `md-alignment-${this.mdAlignment}`;
        if (this.mdRtl) {
          classesName += ' md-rtl-support-action-buttons'
        }
        return classesName;
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
