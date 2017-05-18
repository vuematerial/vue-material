import VueMaterial from './material'
import './core/stylesheets/index.scss'

let plugin = (Vue) => {
  Vue.material = VueMaterial
  Vue.prototype.$material = VueMaterial
}

plugin.version = '__VERSION__'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
