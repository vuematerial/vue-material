import material from 'vue-material/material'
import MdDatepicker from './MdDatepicker'

export default Vue => {
  material(Vue)
  Vue.component(MdDatepicker.name, MdDatepicker)
}