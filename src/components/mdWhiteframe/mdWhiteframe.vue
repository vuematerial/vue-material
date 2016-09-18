<template>
  <div class="md-whiteframe" :class="classes">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdWhiteframe.scss"></style>

<script>
  export default {
    props: {
      mdElevation: [String, Number]
    },
    data() {
      return {
        elevation: this.mdElevation === 0 ? 0 : this.mdElevation || 1
      };
    },
    watch: {
      mdElevation() {
        this.elevation = this.mdElevation;
      }
    },
    computed: {
      classes() {
        let numberedElevation = parseInt(this.elevation, 10);
        let elevationClass = 'md-whiteframe-';

        if (!isNaN(numberedElevation) && typeof numberedElevation === 'number') {
          elevationClass += numberedElevation;
          elevationClass += 'dp';
        } else if (this.elevation.indexOf('dp') > -1) {
          elevationClass += this.elevation;
        }

        return elevationClass;
      }
    }
  };
</script>
