const plugin = (Vue, options = {}) => {

}

plugin.version = '__VERSION__'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
