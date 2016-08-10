<template>
  <li class="md-option" @click="selectOption" v-md-ink-ripple>
    <slot></slot>
  </li>
</template>

<script>
  export default {
    props: {
      value: {
        type: [String, Boolean],
        required: true
      }
    },
    methods: {
      selectOption() {
        this.$parent.selectOption(this.value);
      }
    },
    ready() {
      if (!this.$parent.$el.classList.contains('md-select')) {
        this.$destroy();

        throw new Error('You should wrap the md-option in a md-select');
      }
    }
  };
</script>
