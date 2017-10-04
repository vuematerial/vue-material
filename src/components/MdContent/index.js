import material from 'vue-material/material'
import MdContent from './MdContent'

export default Vue => {
  material(Vue)
  Vue.component(MdContent.name, MdContent)
}
