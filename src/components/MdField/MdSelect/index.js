import material from 'vue-material/material'
import MdSelect from './MdSelect'
import MdOption from './MdOption'
import MdOptgroup from './MdOptgroup'

export default Vue => {
  material(Vue)
  Vue.component(MdSelect.name, MdSelect)
  Vue.component(MdOption.name, MdOption)
  Vue.component(MdOptgroup.name, MdOptgroup)
}
