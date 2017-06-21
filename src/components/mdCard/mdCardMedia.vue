<template>
  <div class="md-card-media" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'md-card-media',
    props: {
      mdRatio: String,
      mdMedium: Boolean,
      mdBig: Boolean
    },
    computed: {
      classes() {
        let classes = {};

        if (this.mdRatio) {
          let ratio = [];

          if (this.mdRatio.indexOf(':') !== -1) {
            ratio = this.mdRatio.split(':');
          } else if (this.mdRatio.indexOf('/') !== -1) {
            ratio = this.mdRatio.split('/');
          }

          if (ratio.length === 2) {
            classes['md-' + ratio[0] + '-' + ratio[1]] = true;
          }
        }

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
