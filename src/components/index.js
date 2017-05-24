import MdButton from './MdButton'
import MdRipple from './MdRipple'

export const MdComponents = {
  MdButton,
  MdRipple
}

export default {
  install (Vue) {
    Object.values(MdComponents).forEach((component) => {
      Vue.use(component)
    })
  }
}
