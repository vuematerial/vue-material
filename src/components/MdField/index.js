import init from 'vue-material/material'
import MdField from './MdField'
import MdInput from './MdInput'
import MdTextarea from './MdTextarea'

export default Vue => {
  init(Vue)
  Vue.use(MdInput)
  Vue.use(MdTextarea)
  Vue.component(MdField.name, MdField)
}
