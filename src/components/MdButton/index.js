import MdButton from './MdButton'

export default Vue => {
  const routerLinkProps = Vue.options.components['router-link'].options.props

  delete routerLinkProps.to.required

  MdButton.props = {
    ...MdButton.props,
    ...routerLinkProps
  }

  Vue.component(MdButton.name, MdButton)
}
