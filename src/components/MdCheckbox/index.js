import init from 'vue-material/material'
import MdCheckbox from './MdCheckbox'

export default Vue => {
  init(Vue)
  Vue.component(MdCheckbox.name, MdCheckbox)
}
