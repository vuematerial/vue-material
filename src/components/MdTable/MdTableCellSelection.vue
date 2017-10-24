<template>
  <td class="md-table-cell md-table-cell-selection" v-if="mdSelectable">
    <div class="md-table-cell-container">
      <md-checkbox v-model="isSelected" :disabled="!mdSelectable" @change="onChange" />
    </div>
  </td>
</template>

<script>
  export default {
    name: 'MdTableCellSelection',
    props: {
      value: Boolean,
      mdRowId: [Number, String],
      mdSelectable: Boolean
    },
    inject: ['MdTable'],
    data: () => ({
      isSelected: false
    }),
    watch: {
      value () {
        this.isSelected = this.value
      }
    },
    methods: {
      onChange () {
        this.$emit('input', this.isSelected)
      }
    }
  }
</script>

<style lang="scss">
  .md-table-cell-selection {
    width: 66px;

    + th {
      .md-table-head-label {
        padding-left: 0;
      }
    }

    + td {
      .md-table-cell-container {
        padding-left: 0;
      }
    }

    .md-table-cell-container {
      padding-right: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .md-checkbox {
      margin: 0;

      .md-checkbox-container {
        width: 18px;
        min-width: 18px;
        height: 18px;

        &:after {
          top: -1px;
          left: 4px;
          transform: rotate(45deg) scale3D(.1, .1, 1);
        }
      }
    }
  }
</style>
