import material from 'vue-material/material'
import MdSteppers from './MdSteppers'
import MdStepper from './MdStepper'

export default Vue => {
  material(Vue)
  Vue.component(MdSteppers.name, MdSteppers)
  Vue.component(MdStepper.name, MdStepper)
}
