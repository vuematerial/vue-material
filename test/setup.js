import 'regenerator-runtime/runtime'
import Vue from 'vue'
import VueMaterial from 'src/material'
import 'jest-localstorage-mock'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.use(VueMaterial)

Vue.component('transition', {
  render (createElement)  {
    const defaultSlot = this.$slots.default

    if (defaultSlot) {
      return defaultSlot[0] && defaultSlot[0]
    }
    return null
  }
})

function createAppEl () {
  const app = document.createElement('div')

  app.id = 'app'

  document.body.appendChild(app)
}

createAppEl()

process.on('unhandledRejection', () => {
})
