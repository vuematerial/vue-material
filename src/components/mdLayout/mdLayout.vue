<style lang="scss" src="./mdLayout.scss"></style>

<script>
  export default {
    props: {
      mdTag: {
        type: String,
        default: 'div'
      },
      mdRow: Boolean,
      mdRowXsmall: Boolean,
      mdRowSmall: Boolean,
      mdRowMedium: Boolean,
      mdRowLarge: Boolean,
      mdRowXlarge: Boolean,
      mdColumn: Boolean,
      mdColumnXsmall: Boolean,
      mdColumnSmall: Boolean,
      mdColumnMedium: Boolean,
      mdColumnLarge: Boolean,
      mdColumnXlarge: Boolean,
      mdGutter: [Number, Boolean],
      mdFlex: [Number, Boolean]
    },
    computed: {
      classes() {
        let classes = {
          'md-row': this.mdRow,
          'md-row-xsmall': this.mdRowXsmall,
          'md-row-small': this.mdRowSmall,
          'md-row-medium': this.mdRowMedium,
          'md-row-large': this.mdRowLarge,
          'md-row-xlarge': this.mdRowXlarge,
          'md-column': this.mdColumn,
          'md-column-xsmall': this.mdColumnXsmall,
          'md-column-small': this.mdColumnSmall,
          'md-column-medium': this.mdColumnMedium,
          'md-column-large': this.mdColumnLarge,
          'md-column-xlarge': this.mdColumnXlarge
        };

        if (this.mdGutter) {
          if (typeof this.mdGutter === 'boolean') {
            classes['md-gutter-8'] = true;
          } else {
            classes['md-gutter-' + this.mdGutter] = true;
          }
        }

        if (this.mdFlex) {
          if (typeof this.mdFlex === 'boolean') {
            classes['md-flex'] = true;
          } else {
            classes['md-flex-' + this.mdFlex] = true;
          }
        }

        return classes;
      }
    },
    render(createElement) {
      return createElement(this.mdTag, {
        staticClass: 'md-layout',
        class: this.classes
      }, this.$slots.default);
    }
  };
</script>
