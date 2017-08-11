import init from 'vue-material/material'
import MdSubheader from './MdSubheader'

export default Vue => {
  init(Vue)
  Vue.component(MdSubheader.name, MdSubheader)
}
