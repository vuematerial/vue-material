import material from 'vue-material/material'
import MdRadio from './MdRadio'

export default Vue => {
  material(Vue)
  Vue.component(MdRadio.name, MdRadio)
}
