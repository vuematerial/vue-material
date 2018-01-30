import material from './material'
import * as MdComponents from './components'

let VueMaterial = Vue => {
  material(Vue)

  Object.values(MdComponents).forEach((MdComponent) => {
    Vue.use(MdComponent)
  })
}

VueMaterial.version = '__VERSION__'

export default VueMaterial
