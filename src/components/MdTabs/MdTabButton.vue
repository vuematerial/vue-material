<script>
import MdRouterLinkProps from 'core/MdRouterLinkProps'

export default {
  name: 'MdTabButton',
  render (createElement) {
    let tabAttrs = {
      staticClass: 'md-tab-button',
      attrs: this.$attrs,
      on: this.$listeners
    }
    let tag = 'button'

    if (this.href) {
      tag = 'a'
    } else if (this.$router && this.to) {
      this.$options.props = MdRouterLinkProps(this, this.$options.props)

      tag = 'router-link'
      tabAttrs.props = this.$props
      delete tabAttrs.props.type
      delete tabAttrs.attrs.type
      delete tabAttrs.props.href
      delete tabAttrs.attrs.href
    }

    return createElement(tag, tabAttrs, this.$slots.default)
  }
}
</script>
