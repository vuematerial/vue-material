import MdField from './MdField'
import MdInput from './MdInput'

export default Vue => {
  Vue.use(MdInput)
  Vue.component(MdField.name, MdField)
}
