<template>
  <div
    class="md-menu-content"
    @keydown.esc.prevent="close"
    @keydown.tab.prevent="close"
    @keydown.up.prevent="highlightItem(highlighted - 1)"
    @keydown.down.prevent="highlightItem(highlighted + 1)"
    @keydown.enter.prevent="fireClick"
    @keydown.space.prevent="fireClick"
    tabindex="-1">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        highlighted: false,
        itemsAmount: 0
      };
    },
    methods: {
      close() {
        this.highlighted = false;
        this.$parent.close();
      },
      highlightItem(factor) {
        if (factor >= 1 && factor <= this.itemsAmount) {
          this.highlighted = factor;
        } else {
          this.highlighted = 1;
        }
      },
      fireClick() {
        if (this.highlighted > 0) {
          this.$children[this.highlighted - 1].$el.click();
        }
      }
    },
    mounted() {
      if (!this.$parent.$el.classList.contains('md-menu')) {
        this.$destroy();

        throw new Error('You must wrap the md-menu-content in a md-menu');
      }
    }
  };
</script>
