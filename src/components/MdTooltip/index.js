import material from 'vue-material/material'
import MdTooltip from './MdTooltip'

export default Vue => {
  material(Vue)
  Vue.component(MdTooltip.name, MdTooltip)
}
