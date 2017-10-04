import material from 'vue-material/material'
import MdRipple from './MdRipple'

export default Vue => {
  material(Vue)
  Vue.component(MdRipple.name, MdRipple)
}
