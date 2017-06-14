import MdButton from './MdButton'
import MdContent from './MdContent'
import MdElevation from './MdElevation'
import MdIcon from './MdIcon'
import MdImage from './MdImage'
import MdLayout from './MdLayout'
import MdRipple from './MdRipple'
import MdToolbar from './MdToolbar'

export const MdComponents = {
  MdButton,
  MdContent,
  MdElevation,
  MdIcon,
  MdImage,
  MdLayout,
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
