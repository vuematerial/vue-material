<template>
  <div
    class="md-menu-content"
    @keydown.esc.prevent="close"
    @keydown.tab.prevent="close"
    @keydown.up.prevent="highlightItem('up')"
    @keydown.down.prevent="highlightItem('down')"
    @keydown.enter="fireClick"
    @keydown.space="fireClick"
    tabindex="-1">
    <md-list>
      <slot></slot>
    </md-list>
  </div>
</template>

<script>
  export default {
    name: 'md-menu-content',
    data() {
      return {
        oldHighlight: false,
        highlighted: false,
        itemsAmount: 0
      };
    },
    methods: {
      close() {
        this.highlighted = false;
        this.$parent.close();
      },
      highlightItem(direction) {
        this.oldHighlight = this.highlighted;

        if (direction === 'up') {
          if (this.highlighted === 1) {
            this.highlighted = this.itemsAmount;
          } else {
            this.highlighted--;
          }
        }

        if (direction === 'down') {
          if (this.highlighted === this.itemsAmount) {
            this.highlighted = 1;
          } else {
            this.highlighted++;
          }
        }
      },
      fireClick() {
        if (this.highlighted > 0) {
          this.getOptions()[this.highlighted - 1].$el.click();
        }
      },
      getOptions() {
        return this.$children[0].$children.filter((child) => {
          return child.$el.classList.contains('md-option');
        });
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
