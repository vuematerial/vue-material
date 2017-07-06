import MdRouterLinkProps from 'core/MdRouterLinkProps'
import MdButton from './MdButton'

export default Vue => {
  const props = new MdRouterLinkProps(Vue)

  MdButton.props = {
    ...MdButton.props,
    ...props
  }

  Vue.component(MdButton.name, MdButton)
}
