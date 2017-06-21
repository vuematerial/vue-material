import Vue from 'vue'
import { mount } from 'avoriaz'

export default (component, template, options = {}) => {
  return mount(Vue.component(`${component.name}-test`, {
    template,
    components: {
      [component.name]: component
    }
  }), options)
}
