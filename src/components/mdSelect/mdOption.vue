<template>
  <md-menu-item
    class="md-option"
    @click="selectOption"
    tabindex="-1">
    <md-checkbox v-model="check" v-if="parentSelect.multiple">
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
    methods: {
      selectOption() {
        if (!this.parentSelect.multiple) {
          this.parentSelect.selectOption(this.value, this.$refs.item.textContent);
        } else {
          this.check = !this.check;
        }
      },
      selectIfValueMatches() {
        if (this.value === this.parentSelect.value) {
          this.selectOption();
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
