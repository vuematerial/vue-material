<template>
  <tr class="md-table-row" :class="classes" @click="autoSelect">
    <md-table-cell class="md-table-selection" v-if="hasSelection">
      <md-checkbox v-model="checkbox" :disabled="isDisabled" @change="select"></md-checkbox>
    </md-table-cell>

    <slot></slot>
  </tr>
</template>

<script>
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  const transitionClass = 'md-transition-off';

  export default {
    props: {
      mdAutoSelect: Boolean,
      mdSelection: Boolean,
      mdItem: Object
    },
    data() {
      return {
        parentTable: {},
        headRow: false,
        checkbox: false,
        index: 0
      };
    },
    computed: {
      isDisabled() {
        return !this.mdSelection && !this.headRow;
      },
      hasSelection() {
        return this.mdSelection || this.headRow && this.parentTable.hasRowSelection;
      },
      classes() {
        return {
          'md-selected': this.checkbox
        };
      }
    },
    watch: {
      mdItem(newValue, oldValue) {
        this.parentTable.data[this.index] = this.mdItem;
        this.handleMultipleSelection(newValue === oldValue);
      }
    },
    methods: {
      setSelectedRow(value, index) {
        if (value) {
          this.parentTable.selectedRows[index] = this.parentTable.data[index];
          ++this.parentTable.numberOfSelected;
        } else {
          delete this.parentTable.selectedRows[index];
          --this.parentTable.numberOfSelected;
        }
      },
      handleSingleSelection(value) {
        this.setSelectedRow(value, this.index - 1);
        this.parentTable.$children[0].checkbox = this.parentTable.numberOfSelected === this.parentTable.numberOfRows;
      },
      handleMultipleSelection(value) {
        if (this.parentTable.numberOfRows > 25) {
          this.parentTable.$el.classList.add(transitionClass);
        }

        this.parentTable.$children.forEach((row, index) => {
          row.checkbox = value;

          if (!row.headRow) {
            this.setSelectedRow(value, index - 1);
          }
        });

        if (value) {
          this.parentTable.numberOfSelected = this.parentTable.numberOfRows;
        } else {
          this.parentTable.numberOfSelected = 0;
        }

        window.setTimeout(() => this.parentTable.$el.classList.remove(transitionClass));
      },
      select(value) {
        if (this.hasSelection) {
          if (this.headRow) {
            this.handleMultipleSelection(value);
          } else {
            this.handleSingleSelection(value);
          }

          this.parentTable.emitSelection();
        }
      },
      autoSelect() {
        if (this.mdAutoSelect && this.hasSelection) {
          this.checkbox = !this.checkbox;
          this.handleSingleSelection(this.checkbox);
          this.parentTable.emitSelection();
        }
      }
    },
    mounted() {
      this.parentTable = getClosestVueParent(this.$parent, 'md-table');

      if (this.$el.parentNode.tagName.toLowerCase() === 'thead') {
        this.headRow = true;
      } else {
        this.parentTable.numberOfRows++;
        this.index = this.parentTable.numberOfRows;

        if (this.mdSelection) {
          this.parentTable.hasRowSelection = true;
        }

        if (this.mdItem) {
          this.parentTable.data.push(this.mdItem);
        }
      }
    }
  };
</script>
