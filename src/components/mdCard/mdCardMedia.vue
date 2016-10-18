<template>
  <div class="md-card-media" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      mdRatio: String
    },
    computed: {
      classes() {
        return {
          'md-16-9': this.mdRatio === '16:9' || this.mdRatio === '16/9',
          'md-4-3': this.mdRatio === '4:3' || this.mdRatio === '4/3',
          'md-1-1': this.mdRatio === '1:1' || this.mdRatio === '1/1'
        };
      }
    }
  };
</script>
