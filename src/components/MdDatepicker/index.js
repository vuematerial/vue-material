import init from 'vue-material/material'
import MdDatepicker from './MdDatepicker'

export default Vue => {
  init(Vue)
  Vue.component(MdDatepicker.name, MdDatepicker)
}