<template>
  <div class="md-card-expand" ref="expand">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    methods: {
      setContentMargin() {
        this.content.style.marginTop = -this.content.offsetHeight + 'px';
      },
      toggle() {
        this.$refs.expand.classList.toggle('md-active');
      },
      onWindowResize() {
        window.requestAnimationFrame(this.setContentMargin);
      }
    },
    mounted() {
      window.setTimeout(() => {
        this.trigger = this.$el.querySelector('[md-expand-trigger]');
        this.content = this.$el.querySelector('.md-card-content');

        if (this.content) {
          this.setContentMargin();

          this.trigger.addEventListener('click', this.toggle);
          window.addEventListener('resize', this.onWindowResize);
        }
      }, 200);
    },
    destroyed() {
      if (this.content) {
        this.trigger.removeEventListener('click', this.toggle);
        window.removeEventListener('resize', this.onWindowResize);
      }
    }
  };
</script>
