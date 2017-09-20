export default (context, props) => {
  return {
    ...props,
    ...context.$options.components['router-link'].options.props
  }
}
