import init from 'vue-material/material'
import MdSteppers from './MdSteppers'
import MdStepper from './MdStepper'

export default Vue => {
  init(Vue)
  Vue.component(MdSteppers.name, MdSteppers)
  Vue.component(MdStepper.name, MdStepper)
}
