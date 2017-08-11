import init from 'vue-material/material'
import MdRadio from './MdRadio'

export default Vue => {
  init(Vue)
  Vue.component(MdRadio.name, MdRadio)
}
