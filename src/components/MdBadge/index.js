import material from 'vue-material/material'
import MdBadge from './MdBadge'

export default Vue => {
  material(Vue)
  Vue.component(MdBadge.name, MdBadge)
}