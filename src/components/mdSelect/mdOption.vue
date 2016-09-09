<template>
  <div
    class="md-option"
    :class="classes"
    @click="selectOption"
    @mouseenter="setHighlight"
    @keydown.enter="selectOption"
    v-md-ink-ripple
    tabindex="-1">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
  import 'element.scrollintoviewifneeded-polyfill';

  export default {
    props: {
      value: [String, Boolean, Number]
    },
    data() {
      return {
        index: 0
      };
    },
    computed: {
      classes() {
        return {
          'md-highlighted': this.hasHighlight()
        };
      }
    },
    watch: {
      classes() {
        if (this.hasHighlight()) {
          this.$el.focus();
          this.$el.scrollIntoViewIfNeeded(false);
        }
      }
    },
    methods: {
      setHighlight() {
        this.$parent.highlightOption(this.index);
      },
      hasHighlight() {
        return this.index === this.$parent.highlighted;
      },
      selectOption() {
        if (this.hasHighlight()) {
          if (this.$parent.$el.classList.contains('md-select')) {
            this.$parent.selectOption(this.value);
          } else {
            this.$parent.$parent.selectOption(this.value);
          }
        }
      }
    },
    mounted() {
      let parentClasses = this.$parent.$el.classList;

      if (!parentClasses.contains('md-select')) {
        this.$destroy();

        throw new Error('You should wrap the md-option in a md-select');
      }

      this.$parent.optionsAmount++;
      this.index = this.$parent.optionsAmount;
    }
  };
</script>
