import 'regenerator-runtime/runtime'
import setup from './material'
import * as MdComponents from './components'

let VueMaterial = Vue => {
  setup(Vue)

  Object.values(MdComponents).forEach((MdComponent) => {
    Vue.use(MdComponent)
  })
}

VueMaterial.version = '__VERSION__'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueMaterial)
}

export default VueMaterial
