import material from 'vue-material/material'
import MdHighlightText from './MdHighlightText'

export default Vue => {
  material(Vue)
  Vue.component(MdHighlightText.name, MdHighlightText)
}
