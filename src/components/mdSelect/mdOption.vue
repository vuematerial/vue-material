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
    props: {
      value: [String, Boolean, Number]
    },
    data: () => ({
      parentSelect: {},
      check: false,
      index: 0
    }),
    computed: {
      isSelected() {
        return this.value && this.parentSelect.value && this.value.toString() === this.parentSelect.value.toString();
      },
      classes() {
        return {
          'md-selected': this.isSelected,
          'md-checked': this.check
        };
      }
    },
    methods: {
      selectOption(changed) {
        if (!this.parentSelect.multiple) {
          this.parentSelect.selectOption(this.value, this.$refs.item.textContent, changed);
        } else {
          this.check = !this.check;
        }
      },
      selectIfValueMatches() {
        if (this.isSelected) {
          this.selectOption(true);
        }
      }
    },
    watch: {
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

      this.parentSelect.options[this.index] = {};

      this.$watch(() => {
        return this.parentSelect.value;
      }, this.selectIfValueMatches);

      this.selectIfValueMatches();
    }
  };
</script>
