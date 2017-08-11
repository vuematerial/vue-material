import init from 'vue-material/material'
import MdRipple from './MdRipple'

export default Vue => {
  init(Vue)
  Vue.component(MdRipple.name, MdRipple)
}
