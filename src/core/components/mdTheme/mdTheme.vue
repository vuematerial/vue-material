<script>
  export default {
    name: 'md-theme',
    props: {
      mdTag: String,
      mdName: {
        type: String,
        default: 'default'
      }
    },
    render(createElement) {
      if (this.mdTag || this.$slots.default.length > 1) {
        return createElement(this.mdTag || 'div', {
          staticClass: this.$material.prefix + this.mdName
        }, this.$slots.default);
      }

      return this.$slots.default[0];
    },
    watch: {
      mdName(value) {
        this.$material.useTheme(value);
      }
    },
    beforeMount() {
      const localTheme = this.mdName;

      if (localTheme) {
        this.$material.useTheme(localTheme);
      }
    }
  };
</script>
