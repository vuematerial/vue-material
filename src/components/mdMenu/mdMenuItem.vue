<template>
  <md-list-item
    class="md-menu-item"
    @click="close"
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
    name: 'md-menu-item',
    props: {
      href: String,
      target: String,
      disabled: Boolean,
      listIndex: {
        type: Number,
        default: -1
      },
      manualHighlight: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      parentContent: {},
      index: 0,
      highlighted: false
    }),
    computed: {
      classes() {
        return {
          'md-highlighted': this.highlighted
        };
      },
      getHighlight() {
        if (!this.manualHighlight) {
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

            this.highlighted = true;
            return true;
          }

          this.highlighted = false;
          return false;
        }
      }
    },
    methods: {
      close($event) {
        if (!this.parentMenu.mdManualToggle) {
          if (!this.disabled) {
            if (this.parentMenu.mdCloseOnSelect) {
              this.parentContent.close();
            }

            this.$emit('click', $event);
            this.$emit('selected', $event);
          }
        } else if (!this.disabled) {
          this.$emit('click', $event);
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

      if (this.listIndex === -1) {
        this.parentContent.itemListCount++;
        this.index = this.parentContent.itemListCount;
      } else {
        this.index = this.listIndex + 1;
      }
    }
  };
</script>
