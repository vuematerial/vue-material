import init from 'vue-material/material'
import MdIcon from './MdIcon'

export default Vue => {
  init(Vue)
  Vue.component(MdIcon.name, MdIcon)
}
