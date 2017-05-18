import Vue from 'vue'
import VueMaterial from 'vue-material'
import MdButton from 'components/MdButton'
import App from './App'

Vue.use(VueMaterial, {
  theming: {
    enabled: false,
    theme: 'default'
  }
})
Vue.use(MdButton)
Vue.config.productionTip = false
// Vue.material.theming.enabled = false

const root = new Vue({
  name: 'root',
  render: mount => mount(App)
})

root.$mount('#docs')
