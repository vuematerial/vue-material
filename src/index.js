import 'regenerator-runtime/runtime'
import material from './material'
import * as MdComponents from './components'

let VueMaterial = (Vue, option) => {
  material(Vue)

  Object.values(MdComponents).forEach((MdComponent) => {
    Vue.use(MdComponent)
  })
}

VueMaterial.version = '__VERSION__'

export default VueMaterial
