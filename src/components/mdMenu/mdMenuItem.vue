<template>
  <md-list-item
    class="md-menu-item"
    :class="classes"
    @click="close"
    :disabled="disabled">
    <slot></slot>
  </md-list-item>
</template>

<script>
  export default {
    props: {
      disabled: Boolean
    },
    data() {
      return {
        index: 0
      };
    },
    computed: {
      classes() {
        return {
          'md-highlighted': this.checkHighlight()
        };
      }
    },
    methods: {
      close() {
        if (!this.disabled) {
          this.$emit('click');
          this.$parent.$parent.close();
        }
      },
      checkHighlight() {
        if (this.index === this.$parent.$parent.highlighted) {
          if (this.disabled) {
            if (this.$parent.$parent.oldHighlight > this.$parent.$parent.highlighted) {
              this.$parent.$parent.highlighted--;
            } else {
              this.$parent.$parent.highlighted++;
            }
          }

          return true;
        }

        return false;
      }
    },
    mounted() {
      if (!this.$parent.$el.classList.contains('md-list')) {
        this.$destroy();

        throw new Error('You must wrap the md-menu-item in a md-menu-content');
      }

      this.$parent.$parent.itemsAmount++;
      this.index = this.$parent.$parent.itemsAmount;
    }
  };
</script>
