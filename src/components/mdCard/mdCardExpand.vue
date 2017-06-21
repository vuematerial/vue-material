<template>
  <div class="md-card-expand"
    ref="expand">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'md-card-expand',
    data() {
      return {
        trigger: null,
        content: null
      };
    },
    methods: {
      toggle() {
        this.$refs.expand.classList.toggle('md-active');
      }
    },
    mounted() {
      window.setTimeout(() => {
        this.trigger = this.$el.querySelector('[md-expand-trigger]');
        this.content = this.$el.querySelector('.md-card-content');

        if (this.content) {
          this.trigger.addEventListener('click', this.toggle);
        }
      }, 200);
    },
    destroyed() {
      if (this.content) {
        this.trigger.removeEventListener('click', this.toggle);
      }
    }
  };
</script>
