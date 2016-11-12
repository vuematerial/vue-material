<template>
  <md-menu-item
    class="md-option"
    @click="selectOption"
    tabindex="-1">
    <span ref="item">
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
    data() {
      return {
        index: 0
      };
    },
    methods: {
      selectOption() {
        this.parentSelect.selectOption(this.value, this.$refs.item.textContent);
      },
      selectIfValueMatches() {
        if (this.value === this.parentSelect.value) {
          this.selectOption();
        }
      }
    },
    mounted() {
      this.parentSelect = getClosestVueParent(this.$parent, 'md-select');
      this.parentContent = getClosestVueParent(this.$parent, 'md-menu-content');

      this.$watch(() => {
        return this.parentSelect.value;
      }, this.selectIfValueMatches);

      this.selectIfValueMatches();
    }
  };
</script>
