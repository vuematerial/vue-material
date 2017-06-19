<style lang="scss" src="./mdLayout.scss"></style>

<script>
  export default {
    name: 'md-layout',
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
      mdHideXsmall: Boolean,
      mdHideSmall: Boolean,
      mdHideMedium: Boolean,
      mdHideLarge: Boolean,
      mdHideXlarge: Boolean,
      mdHideXsmallAndUp: Boolean,
      mdHideSmallAndUp: Boolean,
      mdHideMediumAndUp: Boolean,
      mdHideLargeAndUp: Boolean,
      mdHideXlargeAndUp: Boolean,
      mdGutter: [String, Number, Boolean],
      mdAlign: String,
      mdAlignXsmall: String,
      mdAlignSmall: String,
      mdAlignMedium: String,
      mdAlignLarge: String,
      mdAlignXlarge: String,
      mdVerticalAlign: String,
      mdVerticalAlignXsmall: String,
      mdVerticalAlignSmall: String,
      mdVerticalAlignMedium: String,
      mdVerticalAlignLarge: String,
      mdVerticalAlignXlarge: String,
      mdFlex: [String, Number, Boolean],
      mdFlexXsmall: [String, Number, Boolean],
      mdFlexSmall: [String, Number, Boolean],
      mdFlexMedium: [String, Number, Boolean],
      mdFlexLarge: [String, Number, Boolean],
      mdFlexXlarge: [String, Number, Boolean],
      mdFlexOffset: [String, Number, Boolean],
      mdFlexOffsetXsmall: [String, Number, Boolean],
      mdFlexOffsetSmall: [String, Number, Boolean],
      mdFlexOffsetMedium: [String, Number, Boolean],
      mdFlexOffsetLarge: [String, Number, Boolean],
      mdFlexOffsetXlarge: [String, Number, Boolean]
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
          'md-column-xlarge': this.mdColumnXlarge,
          'md-hide-xsmall': this.mdHideXsmall,
          'md-hide-small': this.mdHideSmall,
          'md-hide-medium': this.mdHideMedium,
          'md-hide-large': this.mdHideLarge,
          'md-hide-xlarge': this.mdHideXlarge,
          'md-hide-xsmall-and-up': this.mdHideXsmallAndUp,
          'md-hide-small-and-up': this.mdHideSmallAndUp,
          'md-hide-medium-and-up': this.mdHideMediumAndUp,
          'md-hide-large-and-up': this.mdHideLargeAndUp,
          'md-hide-xlarge-and-up': this.mdHideXlargeAndUp
        };

        if (this.mdGutter) {
          if (typeof this.mdGutter === 'boolean') {
            classes['md-gutter'] = true;
          } else if (this.mdGutter) {
            classes['md-gutter-' + this.mdGutter] = true;
          }
        }

        /* Flex */
        this.generatePropClasses('md-flex', '', 'mdFlex', classes);
        this.generatePropClasses('md-flex', 'xsmall', 'mdFlexXsmall', classes);
        this.generatePropClasses('md-flex', 'small', 'mdFlexSmall', classes);
        this.generatePropClasses('md-flex', 'medium', 'mdFlexMedium', classes);
        this.generatePropClasses('md-flex', 'large', 'mdFlexLarge', classes);
        this.generatePropClasses('md-flex', 'xlarge', 'mdFlexXlarge', classes);

        /* Flex Offset */
        this.generatePropClasses('md-flex-offset', '', 'mdFlexOffset', classes);
        this.generatePropClasses('md-flex-offset', 'xsmall', 'mdFlexOffsetXsmall', classes);
        this.generatePropClasses('md-flex-offset', 'small', 'mdFlexOffsetSmall', classes);
        this.generatePropClasses('md-flex-offset', 'medium', 'mdFlexOffsetMedium', classes);
        this.generatePropClasses('md-flex-offset', 'large', 'mdFlexOffsetLarge', classes);
        this.generatePropClasses('md-flex-offset', 'xlarge', 'mdFlexOffsetXlarge', classes);

        /* Horizontal Alignment */
        this.generatePropClasses('md-align', '', 'mdAlign', classes);
        this.generatePropClasses('md-align', 'xsmall', 'mdAlignXsmall', classes);
        this.generatePropClasses('md-align', 'small', 'mdAlignSmall', classes);
        this.generatePropClasses('md-align', 'medium', 'mdAlignMedium', classes);
        this.generatePropClasses('md-align', 'large', 'mdAlignLarge', classes);
        this.generatePropClasses('md-align', 'xlarge', 'mdAlignXlarge', classes);

        /* Vertical Alignment */
        this.generatePropClasses('md-vertical-align', '', 'mdVerticalAlign', classes);
        this.generatePropClasses('md-vertical-align', 'xsmall', 'mdVerticalAlignXsmall', classes);
        this.generatePropClasses('md-vertical-align', 'small', 'mdVerticalAlignSmall', classes);
        this.generatePropClasses('md-vertical-align', 'medium', 'mdVerticalAlignMedium', classes);
        this.generatePropClasses('md-vertical-align', 'large', 'mdVerticalAlignLarge', classes);
        this.generatePropClasses('md-vertical-align', 'xlarge', 'mdVerticalAlignXlarge', classes);

        return classes;
      }
    },
    methods: {
      generatePropClasses(prop, size, name, object) {
        if (size) {
          size = '-' + size;
        }

        if (this[name]) {
          if (typeof this[name] === 'boolean') {
            if (!this[name]) {
              object[prop + size + '-none'] = true;
            } else {
              object[prop + size] = true;
            }
          } else {
            object[prop + size + '-' + this[name]] = true;
          }
        }
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
