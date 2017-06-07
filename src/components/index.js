import MdButton from './MdButton'
import MdElevation from './MdElevation'
import MdIcon from './MdIcon'
import MdImage from './MdImage'
import MdContent from './MdContent'
import MdRipple from './MdRipple'
import MdToolbar from './MdToolbar'

export const MdComponents = {
  MdButton,
  MdElevation,
  MdIcon,
  MdImage,
  MdContent,
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
