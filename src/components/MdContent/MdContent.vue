<script>
  import MdComponent from 'core/MdComponent'

  export default new MdComponent({
    name: 'MdContent',
    props: {
      mdTag: {
        type: String,
        default: 'div'
      }
    },
    render (createElement) {
      return createElement(this.mdTag, {
        staticClass: 'md-content',
        class: [this.$mdActiveTheme],
        attrs: this.$attrs,
        on: this.$listeners
      }, this.$slots.default)
    }
  })
</script>
