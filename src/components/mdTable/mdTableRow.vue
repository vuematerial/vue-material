<template>
  <tr
    class="md-table-row"
    :class="classes"
    @click="autoSelect"
    @click.native="autoSelect">
    <md-table-cell
      v-if="hasSelection"
      class="md-table-selection">
      <md-checkbox
        v-model="checkbox"
        :disabled="isDisabled"
        @change="select"
        @change.native="select"/>
    </md-table-cell>

    <slot/>
  </tr>
</template>

<script>
  import getClosestVueParent from '../../core/utils/getClosestVueParent';
  import uniqueId from '../../core/utils/uniqueId';

  const transitionClass = 'md-transition-off';

  export default {
    name: 'md-table-row',
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
        index: 0,
        uuid: `mdrow_uuid_${uniqueId()}`
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
      setRowSelection(value, row) {
        this.parentTable.setRowSelection(value, row);
      },
      setHeadRowSelection() {
        if (this.hasSelection) {
          this.parentTable.$children[0].checkbox = this.parentTable.numberOfSelected > 0
            && this.parentTable.numberOfSelected === this.parentTable.numberOfRows;
        }
      },
      handleSingleSelection(value) {
        this.parentTable.setRowSelection(value, this.mdItem);
        this.setHeadRowSelection();
      },
      handleMultipleSelection(value) {
        if (this.parentTable.numberOfRows > 25) {
          this.parentTable.$el.classList.add(transitionClass);
        }

        this.parentTable.$children.forEach((row) => {
          row.checkbox = value;
        });

        this.parentTable.setMultipleRowSelection(value);
        this.setHeadRowSelection();

        window.setTimeout(() =>
          this.parentTable.$el.classList.remove(transitionClass),
          100);
      },
      select(value) {
        if (!this.hasSelection) {
          return;
        }

        if (this.headRow) {
          this.handleMultipleSelection(value);
        } else {
          this.handleSingleSelection(value);
        }

        this.parentTable.emitSelection();
        this.$emit(value ? 'selected' : 'deselected', value);
      },
      autoSelect() {
        if (this.mdAutoSelect && this.hasSelection) {
          this.checkbox = !this.checkbox;
          this.handleSingleSelection(this.checkbox);
          this.parentTable.emitSelection();
        }
      },
      startTableRow() {
        this.parentTable = getClosestVueParent(this.$parent, 'md-table');

        if (this.$el.parentNode.tagName.toLowerCase() === 'thead') {
          this.headRow = true;
        } else {
          if (!this.mdItem && this.mdSelection) {
            throw new Error('You should set the md-item property when using mdSelection. Example: <md-table-row md-selection :md-item="ITEM" ...>');
          }

          if (this.mdSelection) {
            this.parentTable.hasRowSelection = true;
          }
          this.parentTable.data.push(this.mdItem);
        }
      }
    },
    destroyed() {
      this.parentTable.removeRow(this.mdItem);
      this.setHeadRowSelection();
    },
    mounted() {
      this.startTableRow();
    }
  };
</script>
