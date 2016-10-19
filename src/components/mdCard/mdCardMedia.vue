<template>
  <div class="md-card-media" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      mdRatio: String,
      mdMedium: Boolean,
      mdBig: Boolean
    },
    computed: {
      classes() {
        let classes = {
          'md-16-9': this.mdRatio === '16:9' || this.mdRatio === '16/9',
          'md-4-3': this.mdRatio === '4:3' || this.mdRatio === '4/3',
          'md-1-1': this.mdRatio === '1:1' || this.mdRatio === '1/1'
        };

        if (this.mdMedium || this.mdBig) {
          classes = {
            'md-medium': this.mdMedium,
            'md-big': this.mdBig
          };
        }

        return classes;
      }
    }
  };
</script>
