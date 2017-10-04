import material from 'vue-material/material'
import MdIcon from './MdIcon'

export default Vue => {
  material(Vue)
  Vue.component(MdIcon.name, MdIcon)
}
