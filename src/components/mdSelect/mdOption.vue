<template>
  <md-menu-item
    class="md-option"
    :class="classes"
    @click="selectOption"
    tabindex="-1">
    <md-checkbox class="md-primary" v-model="check" v-if="parentSelect.multiple">
      <span ref="item">
        <slot></slot>
      </span>
    </md-checkbox>

    <span ref="item" v-else>
      <slot></slot>
    </span>
  </md-menu-item>
</template>

<script>
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    name: 'md-option',
    props: {
      value: [String, Boolean, Number, Object]
    },
    data: () => ({
      parentSelect: {},
      check: false,
      index: 0
    }),
    computed: {
      isSelected() {
        if (this.value && this.parentSelect.value) {
          let thisValue = this.value.toString();

          if (this.parentSelect.multiple) {
            return this.parentSelect.value.indexOf(thisValue) >= 0;
          }

          return this.value && this.parentSelect.value && thisValue === this.parentSelect.value.toString();
        }

        return false;
      },
      classes() {
        return {
          'md-selected': this.isSelected,
          'md-checked': this.check
        };
      }
    },
    methods: {
      isMultiple() {
        return this.parentSelect.multiple;
      },
      setParentOption() {
        if (!this.isMultiple()) {
          this.parentSelect.selectOption(this.value, this.$refs.item.textContent, this.$el);
        } else {
          this.check = !this.check;
        }
      },
      selectOption($event) {
        if (this.disabled) {
          return;
        }
        this.setParentOption();
        this.$emit('selected', $event);
      }
    },
    watch: {
      isSelected(selected) {
        if (this.isMultiple()) {
          this.check = selected;
        }
      },
      check(check) {
        if (check) {
          this.parentSelect.selectMultiple(this.index, this.value, this.$refs.item.textContent);
        } else {
          this.parentSelect.selectMultiple(this.index);
        }
      }
    },
    mounted() {
      this.parentSelect = getClosestVueParent(this.$parent, 'md-select');
      this.parentContent = getClosestVueParent(this.$parent, 'md-menu-content');

      if (!this.parentSelect) {
        throw new Error('You must wrap the md-option in a md-select');
      }

      this.parentSelect.optionsAmount++;
      this.index = this.parentSelect.optionsAmount;

      this.parentSelect.multipleOptions[this.index] = {};
      this.parentSelect.options[this.index] = this;

      if (this.isMultiple() && this.parentSelect.value.indexOf(this.value) >= 0 || this.parentSelect.value === this.value) {
        this.setParentOption();
      }
    },
    beforeDestroy() {
      if (this.parentSelect) {
        this.parentSelect.removeChild(this.index);
        // delete this.parentSelect.options[this.index];
        // delete this.parentSelect.multipleOptions[this.index];
        // delete this.parentSelect.selectedValue[this.index];
      }
    }
  };
</script>
