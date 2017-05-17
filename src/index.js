import MdButton from 'components/mdButton/mdButton'

const plugin = (Vue, options = {}) => {
  Vue.component(MdButton.name, MdButton)
}

plugin.version = '__VERSION__'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
