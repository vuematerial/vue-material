import 'regenerator-runtime/runtime'
import Vue from 'vue'
import VueMaterial from 'src/material'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.use(VueMaterial)

Vue.component('transition', {
  render (createElement) {
    return createElement('div', this.$slots.default)
  }
})

function createAppEl () {
  const app = document.createElement('div')

  app.id = 'app'

  document.body.appendChild(app)
}

createAppEl()

process.on('unhandledRejection', () => {})
