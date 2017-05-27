import MdButton from './MdButton'
import MdIcon from './MdIcon'
import MdImage from './MdImage'
import MdPaper from './MdPaper'
import MdRipple from './MdRipple'
import MdToolbar from './MdToolbar'

export const MdComponents = {
  MdButton,
  MdIcon,
  MdImage,
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
