<template>
  <div class="md-list-expand" :style="{ 'margin-bottom': height }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        height: null
      };
    },
    watch: {
      '$el.offsetHeight': function() {
        console.log(this);
      }
    },
    mounted() {
      this.height = -this.$el.offsetHeight + 'px';
    }
  };
</script>
