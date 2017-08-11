import init from 'vue-material/material'
import MdButton from './MdButton'

export default Vue => {
  init(Vue)
  Vue.component(MdButton.name, MdButton)
}
