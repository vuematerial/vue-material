import 'regenerator-runtime/runtime'
import material from './material'
import * as MdComponents from './components'

let VueMaterial = Vue => {
  material(Vue)

  Object.values(MdComponents).forEach((MdComponent) => {
    Vue.use(MdComponent)
  })
}

VueMaterial.version = '__VERSION__'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueMaterial)
}

export default VueMaterial
