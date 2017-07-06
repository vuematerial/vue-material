export default Vue => {
  let props = Vue.options.components['router-link'].options.props

  return {
    ...props,
    to: {
      type: props.to.type
    }
  }
}
