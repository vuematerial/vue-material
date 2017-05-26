import MdButton from './MdButton'
import MdPaper from './MdPaper'
import MdRipple from './MdRipple'

export const MdComponents = {
  MdButton,
  MdPaper,
  MdRipple
}

export default {
  install (Vue) {
    Object.values(MdComponents).forEach((component) => {
      Vue.use(component)
    })
  }
}
