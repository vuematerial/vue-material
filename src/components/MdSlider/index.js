import material from 'vue-material/material'
import MdSlider from './MdSlider'

export default Vue => {
  material(Vue)
  Vue.component(MdSlider.name, MdSlider)
}