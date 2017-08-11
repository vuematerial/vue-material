import init from 'vue-material/material'
import MdDivider from './MdDivider'

export default Vue => {
  init(Vue)
  Vue.component(MdDivider.name, MdDivider)
}
