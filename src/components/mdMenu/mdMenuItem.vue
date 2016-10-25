<template>
  <div
    class="md-menu-item"
    :class="classes"
    @click="close">
    <div class="md-menu-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        index: 0
      };
    },
    computed: {
      classes() {
        return {
          'md-highlighted': this.index === this.$parent.highlighted
        };
      }
    },
    methods: {
      close() {
        this.$emit('click');
        this.$parent.close();
      }
    },
    mounted() {
      if (!this.$parent.$el.classList.contains('md-menu-content')) {
        this.$destroy();

        throw new Error('You must wrap the md-menu-item in a md-menu-content');
      }

      this.$parent.itemsAmount++;
      this.index = this.$parent.itemsAmount;
    }
  };
</script>
