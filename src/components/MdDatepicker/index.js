import material from 'vue-material/material'
import MdDatepicker from './MdDatepicker'
import MdDateInput from './MdDateInput'

export default Vue => {
  material(Vue)
  Vue.component(MdDatepicker.name, MdDatepicker)
  Vue.component(MdDateInput.name, MdDateInput)
}
