import material from 'vue-material/material'
import MdToolbar from './MdToolbar'

export default Vue => {
  material(Vue)
  Vue.component(MdToolbar.name, MdToolbar)
}
