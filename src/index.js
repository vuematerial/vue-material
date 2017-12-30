import 'regenerator-runtime/runtime'
import material from './material'
import * as MdComponents from './components'

let VueMaterial = (Vue, option) => {
  material(Vue)

  // Vue material design work with theming of rtl support
  if (option && option.mdRtl){
    Vue.material.theming.rtlSupport = option.mdRtl;
    //console.log('Vue Material Design run with RTL support');
  }

  Object.values(MdComponents).forEach((MdComponent) => {
    Vue.use(MdComponent)
  })
}

VueMaterial.version = '__VERSION__'

export default VueMaterial
