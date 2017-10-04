import material from 'vue-material/material'
import MdButton from './MdButton'

export default Vue => {
  material(Vue)
  Vue.component(MdButton.name, MdButton)
}
