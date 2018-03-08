import material from 'vue-material/material'
import MdRipple from './MdRipple'
import MdWave from './MdWave'

export default Vue => {
  material(Vue)
  Vue.component(MdRipple.name, MdRipple)
  Vue.component(MdWave.name, MdWave)
}
