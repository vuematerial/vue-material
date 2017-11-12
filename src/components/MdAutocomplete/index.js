import material from 'vue-material/material'
import MdAutocomplete from './MdAutocomplete'

export default Vue => {
  material(Vue)
  Vue.component(MdAutocomplete.name, MdAutocomplete)
}