import init from 'vue-material/material'
import MdSnackbar from './MdSnackbar'

export default Vue => {
  init(Vue)
  Vue.component(MdSnackbar.name, MdSnackbar)
}
