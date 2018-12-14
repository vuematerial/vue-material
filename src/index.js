import material from './material'
import * as MdComponents from './components'

let VueMaterial = Vue => {
  material(Vue)

  Object.values(MdComponents).forEach((MdComponent) => {
    Vue.use(MdComponent)
  })
  Object.keys(MdComponents).forEach((key) => {
    if(MdComponents.hasOwnProperty(key)){
      Vue.use(MdComponents[key])
    }
  })
}

VueMaterial.version = '__VERSION__'

export default VueMaterial
