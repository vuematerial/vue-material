import Test from './components/test.vue'

const plugin = (Vue, options = {}) => {
  Vue.component(Test.name, Test)
}

plugin.version = '__VERSION__'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
