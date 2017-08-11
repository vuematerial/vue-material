import init from 'vue-material/material'
import MdImage from './MdImage'

export default Vue => {
  init(Vue)
  Vue.component(MdImage.name, MdImage)
}
