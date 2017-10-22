import material from 'vue-material/material'
import MdField from './MdField'
import MdFile from './MdFile'
import MdIcon from 'components/MdIcon'
import MdInput from './MdInput'
import MdSelect from './MdSelect'
import MdTextarea from './MdTextarea'

export default Vue => {
  material(Vue)
  Vue.component(MdField.name, MdField)
  Vue.use(MdFile)
  Vue.use(MdIcon)
  Vue.use(MdInput)
  Vue.use(MdSelect)
  Vue.use(MdTextarea)
}
