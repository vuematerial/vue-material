import material from 'vue-material/material'
import MdExtractColor from './MdExtractColor'

export default Vue => {
  material(Vue)
  Vue.component(MdExtractColor.name, MdExtractColor)
}
