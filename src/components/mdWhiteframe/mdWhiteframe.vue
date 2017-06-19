<style lang="scss" src="./mdWhiteframe.scss"></style>

<script>
  export default {
    name: 'md-whiteframe',
    props: {
      mdElevation: {
        type: [String, Number],
        default: 1
      },
      mdTag: {
        type: String,
        default: 'div'
      }
    },
    computed: {
      classes() {
        let numberedElevation = parseInt(this.mdElevation, 10);
        let elevationClass = 'md-whiteframe-';

        if (!isNaN(numberedElevation) && typeof numberedElevation === 'number') {
          elevationClass += numberedElevation;
          elevationClass += 'dp';
        } else if (this.mdElevation.indexOf('dp') > -1) {
          elevationClass += this.mdElevation;
        }

        return elevationClass;
      }
    },
    render(createElement) {
      return createElement(this.mdTag, {
        staticClass: 'md-whiteframe',
        class: this.classes
      }, this.$slots.default);
    }
  };
</script>
