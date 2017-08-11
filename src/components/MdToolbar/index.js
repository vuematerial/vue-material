import init from 'vue-material/material'
import MdToolbar from './MdToolbar'

export default Vue => {
  init(Vue)
  Vue.component(MdToolbar.name, MdToolbar)
}
