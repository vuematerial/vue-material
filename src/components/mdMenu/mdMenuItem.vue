<template>
  <md-list-item
    class="md-menu-item"
    @click.native="close"
    :class="classes"
    :href="href"
    :target="target"
    :disabled="disabled">
    <slot></slot>
  </md-list-item>
</template>

<script>
  import getClosestVueParent from '../../core/utils/getClosestVueParent';
  import 'element.scrollintoviewifneeded-polyfill';

  export default {
    props: {
      href: String,
      target: String,
      disabled: Boolean
    },
    data: () => ({
      parentContent: {},
      index: 0
    }),
    computed: {
      classes() {
        return {
          'md-highlighted': this.highlighted
        };
      },
      highlighted() {
        if (this.index === this.parentContent.highlighted) {
          if (this.disabled) {
            if (this.parentContent.oldHighlight > this.parentContent.highlighted) {
              this.parentContent.highlighted--;
            } else {
              this.parentContent.highlighted++;
            }
          }

          if (this.index === 1) {
            this.parentContent.$el.scrollTop = 0;
          } else if (this.index === this.parentContent.itemsAmount) {
            this.parentContent.$el.scrollTop = this.parentContent.$el.scrollHeight;
          } else {
            this.$el.scrollIntoViewIfNeeded(false);
          }

          return true;
        }

        return false;
      }
    },
    methods: {
      close($event) {
        if (!this.disabled) {
          if (this.parentMenu.mdCloseOnSelect) {
            this.parentContent.close();
          }

          this.$emit('selected', $event);
        }
      }
    },
    mounted() {
      this.parentContent = getClosestVueParent(this.$parent, 'md-menu-content');
      this.parentMenu = getClosestVueParent(this.$parent, 'md-menu');

      if (!this.parentContent) {
        this.$destroy();

        throw new Error('You must wrap the md-menu-item in a md-menu-content');
      }

      this.parentContent.itemsAmount++;
      this.index = this.parentContent.itemsAmount;
    }
  };
</script>
