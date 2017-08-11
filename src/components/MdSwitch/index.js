import init from 'vue-material/material'
import MdSwitch from './MdSwitch'

export default Vue => {
  init(Vue)
  Vue.component(MdSwitch.name, MdSwitch)
}
