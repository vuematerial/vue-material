import init from 'vue-material/material'
import MdTooltip from './MdTooltip'

export default Vue => {
  init(Vue)
  Vue.component(MdTooltip.name, MdTooltip)
}