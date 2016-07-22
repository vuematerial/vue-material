<template>
  <div class="md-whiteframe" :class="classes">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdWhiteframe.scss"></style>

<script>
  export default {
    props: {
      mdElevation: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      classes() {
        let numberedElevation = parseInt(this.mdElevation, 10);

        if (!isNaN(numberedElevation) && typeof numberedElevation === 'number') {
          return `md-whiteframe-${ numberedElevation }dp`;
        } else if (this.mdElevation.indexOf('dp') > -1) {
          return `md-whiteframe-${ this.mdElevation }`;
        }
      }
    }
  };
</script>
