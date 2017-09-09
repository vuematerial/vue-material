<template>
  <li class="md-list-item md-list-item-expand" :class="classes">
    <div class="md-list-item-container md-button">
      <slot></slot>

      <md-icon class="md-list-expand-indicator">keyboard_arrow_down</md-icon>
    </div>

    <md-button type="button" class="md-button-ghost" @click="toggleExpandList" :disabled="disabled"></md-button>

    <div class="md-list-expand" ref="expand" :class="expandClasses" :style="expandStyles">
      <slot name="expand"></slot>
    </div>
  </li>
</template>

<script>
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    name: 'md-list-item',
    props: {
      disabled: Boolean,
      mdExpandMultiple: Boolean
    },
    data() {
      return {
        parentList: false,
        active: false,
        height: 0,
        contentObserver: null,
        transitionOff: true
      };
    },
    computed: {
      classes() {
        return {
          'md-disabled': this.disabled,
          'md-active': this.active
        };
      },
      expandClasses() {
        return {
          'md-transition-off': this.transitionOff
        };
      },
      expandStyles() {
        return {
          'margin-bottom': this.height
        };
      }
    },
    methods: {
      resetSiblings() {
        this.parentList.$children.forEach((child) => {
          if (child.$el !== this.$el && child.$el.classList.contains('md-list-item-expand')) {
            child.active = false;
          }
        });
      },
      calculatePadding() {
        window.requestAnimationFrame(() => {
          if (this._destroyed) {
            return;
          }

          this.height = -this.$refs.expand.scrollHeight + 'px';

          window.setTimeout(() => {
            this.transitionOff = false;
          });
        });
      },
      toggleExpandList($event) {
        if (!this.mdExpandMultiple) {
          this.resetSiblings();
        }

        this.calculatePadding();
        this.active = !this.active;
        this.$emit('click', $event);
      },
      recalculateAfterChange() {
        this.transitionOff = true;
        this.calculatePadding();
      },
      observeChildChanges() {
        this.contentObserver = new MutationObserver(this.recalculateAfterChange);
        this.contentObserver.observe(this.$refs.expand, {
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.parentList = getClosestVueParent(this.$parent, 'md-list');
        this.calculatePadding();
        this.observeChildChanges();
        window.addEventListener('resize', this.recalculateAfterChange);
      });
    },
    beforeDestroy() {
      if (this.contentObserver) {
        this.contentObserver.disconnect();
      }

      window.removeEventListener('resize', this.recalculateAfterChange);

      this._destroyed = true;
    }
  };
</script>
