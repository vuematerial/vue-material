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
      mdHideXsmall: Boolean,
      mdHideSmall: Boolean,
      mdHideMedium: Boolean,
      mdHideLarge: Boolean,
      mdHideXlarge: Boolean,
      mdGutter: [Number, Boolean],
      mdFlex: [Number, Boolean],
      mdFlexXsmall: Number,
      mdFlexSmall: Number,
      mdFlexMedium: Number,
      mdFlexLarge: Number,
      mdFlexXlarge: Number
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
          'md-flex-xsmall': this.mdFlexXsmall,
          'md-flex-small': this.mdFlexSmall,
          'md-flex-medium': this.mdFlexMedium,
          'md-flex-large': this.mdFlexLarge,
          'md-flex-xlarge': this.mdFlexXlarge
        };

        if (this.mdGutter) {
          if (typeof this.mdGutter === 'boolean') {
            classes['md-gutter-8'] = true;
          } else {
            classes['md-gutter-' + this.mdGutter] = true;
          }
        }

        this.generateFlexClasses('', 'mdFlex', classes);
        this.generateFlexClasses('xsmall', 'mdFlexXsmall', classes);
        this.generateFlexClasses('small', 'mdFlexSmall', classes);
        this.generateFlexClasses('medium', 'mdFlexMedium', classes);
        this.generateFlexClasses('large', 'mdFlexLarge', classes);
        this.generateFlexClasses('xlarge', 'mdFlexXlarge', classes);

        return classes;
      }
    },
    methods: {
      generateFlexClasses(size, name, object) {
        if (size) {
          size = '-' + size;
        }

        if (this[name]) {
          if (typeof this[name] === 'boolean') {
            object['md-flex' + size] = true;
          } else {
            object['md-flex-' + size + this[name]] = true;
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
