import material from 'vue-material/material'
import MdProgressBar from './MdProgressBar/MdProgressBar'
import MdProgressSpinner from './MdProgressSpinner/MdProgressSpinner'

export default Vue => {
  material(Vue)
  Vue.component(MdProgressBar.name, MdProgressBar)
  Vue.component(MdProgressSpinner.name, MdProgressSpinner)
}
