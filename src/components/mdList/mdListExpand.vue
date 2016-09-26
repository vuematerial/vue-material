<template>
  <div class="md-list-expand" :style="{ 'margin-bottom': height }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        height: 0
      };
    },
    methods: {
      calculatePadding() {
        this.height = -this.$el.offsetHeight + 'px';
      }
    },
    mounted() {
      this.calculatePadding();
    }
  };
</script>
