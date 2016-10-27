<template>
  <tr class="md-table-row" :class="classes" @click.stop="autoSelect">
    <md-table-cell class="md-table-selection" v-if="$parent.mdRowSelection">
      <md-checkbox v-model="checkbox" @change="select"></md-checkbox>
    </md-table-cell>

    <slot></slot>
  </tr>
</template>

<script>
  const transitionClass = 'md-transition-off';

  export default {
    props: {
      mdAutoSelect: Boolean
    },
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
        if (value) {
          this.$parent.selectedRows[index] = value;
          ++this.$parent.numberOfSelected;
        } else {
          delete this.$parent.selectedRows[index];
          --this.$parent.numberOfSelected;
        }
      },
      handleSingleSelection(value) {
        this.setSelectedRow(value, this.index);
        this.$parent.$children[0].checkbox = this.$parent.numberOfSelected === this.$parent.numberOfRows;
      },
      handleMultipleSelection(value) {
        if (this.$parent.numberOfRows > 25) {
          this.$parent.$el.classList.add(transitionClass);
        }

        this.$parent.$children.forEach((row) => {
          row.checkbox = value;
        });

        if (value) {
          /*this.$parent.selectedRows = {}; //and so on, this can be lazly created the first time or on component boot*/
          this.$parent.numberOfSelected = this.$parent.numberOfRows;
        } else {
          /*this.$parent.selectedRows = {};*/
          this.$parent.numberOfSelected = 0;
        }

        window.setTimeout(() => this.$parent.$el.classList.remove(transitionClass));
      },
      select(value) {
        if (this.$parent.mdRowSelection) {
          if (this.headRow) {
            this.handleMultipleSelection(value);
          } else {
            this.handleSingleSelection(value);
          }
        }
      },
      autoSelect() {
        if (this.mdAutoSelect) {
          this.checkbox = !this.checkbox;
          this.handleSingleSelection(this.checkbox);
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
