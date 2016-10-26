<template>
  <tr class="md-table-row" :class="classes">
    <td class="md-table-selection" v-if="$parent.mdRowSelection">
      <md-checkbox v-model="checkbox" @change="select"></md-checkbox>
    </td>

    <slot></slot>
  </tr>
</template>

<script>
  export default {
    data() {
      return {
        checkbox: false,
        index: 0
      };
    },
    computed: {
      classes() {
        return {
          'md-selected': this.checkbox
        };
      }
    },
    methods: {
      setSelectedRow(value, index) {
        let arrayIndex = this.$parent.selectedRows.indexOf(index);

        if (arrayIndex >= 0) {
          this.$parent.selectedRows.splice(arrayIndex, 1);
        }

        if (value) {
          this.$parent.selectedRows.push(index);
        }
      },
      handleSingleSelection(value) {
        this.setSelectedRow(value, this.index);
        this.$parent.$children[0].checkbox = this.$parent.selectedRows.length >= this.$parent.numberOfRows;
      },
      handleMultipleSelection(value) {
        this.$parent.$children.forEach((row, index) => {
          row.checkbox = value;
          this.setSelectedRow(value, index + 1);
        });
      },
      select(value) {
        if (this.$parent.mdRowSelection) {
          if (this.headRow) {
            this.handleMultipleSelection(value);
          } else {
            this.handleSingleSelection(value);
          }
        }
      }
    },
    mounted() {
      if (this.$el.parentNode.tagName.toLowerCase() === 'thead') {
        this.headRow = true;
      } else {
        this.$parent.numberOfRows++;
        this.index = this.$parent.numberOfRows;
      }
    }
  };
</script>
