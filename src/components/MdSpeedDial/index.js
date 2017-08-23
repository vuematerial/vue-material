import init from 'vue-material/material'
import MdSpeedDial from './MdSpeedDial'

export default Vue => {
  init(Vue)
  Vue.component(MdSpeedDial.name, MdSpeedDial)
}
