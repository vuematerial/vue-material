import init from 'vue-material/material'
import MdDrawer from './MdDrawer'

export default Vue => {
  init(Vue)
  Vue.component(MdDrawer.name, MdDrawer)
}
