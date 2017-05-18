import Vue from 'vue'
import VueMaterial from 'vue-material'
import MdButton from 'components/MdButton'
import App from './App'

Vue.use(VueMaterial)
Vue.use(MdButton)
Vue.config.productionTip = false

const root = new Vue({
  name: 'root',
  render: mount => mount(App)
})

root.$mount('#docs')
