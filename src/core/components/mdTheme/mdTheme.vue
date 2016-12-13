<script>
  export default {
    props: {
      mdTag: String,
      mdName: {
        type: String,
        default: 'default'
      }
    },
    data: () => ({
      name: 'md-theme'
    }),
    render(render) {
      if (this.mdTag || this.$slots.default.length > 1) {
        return render(this.mdTag || 'div', {
          staticClass: 'md-theme'
        }, this.$slots.default);
      }

      return this.$slots.default[0];
    }
  };
</script>
