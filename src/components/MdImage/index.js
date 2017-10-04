import material from 'vue-material/material'
import MdImage from './MdImage'

export default Vue => {
  material(Vue)
  Vue.component(MdImage.name, MdImage)
}
