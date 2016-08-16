<template>
  <div class="md-option" @click="selectOption" v-md-ink-ripple>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: [String, Boolean],
        required: true
      }
    },
    data() {
      return {
        parent: null
      };
    },
    methods: {
      selectOption() {
        if (this.$parent.$el.classList.contains('md-select')) {
          this.$parent.selectOption(this.value);
        } else {
          this.$parent.$parent.selectOption(this.value);
        }
      }
    },
    ready() {
      let parentClasses = this.$parent.$el.classList;

      this.parent = this.$parent;

      if (!parentClasses.contains('md-select') && !parentClasses.contains('md-option-group')) {
        this.$destroy();

        throw new Error('You should wrap the md-option in a md-select');
      }
    }
  };
</script>
