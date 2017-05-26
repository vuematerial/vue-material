import MdButton from './MdButton'
import MdPaper from './MdPaper'
import MdRipple from './MdRipple'
import MdToolbar from './MdToolbar'

export const MdComponents = {
  MdButton,
  MdPaper,
  MdRipple,
  MdToolbar
}

export default {
  install (Vue) {
    Object.values(MdComponents).forEach((component) => {
      Vue.use(component)
    })
  }
}
