import Vue from 'vue'
import { mount } from 'avoriaz'

export default async (component, template, options = {}) => {
  const wrapper = mount(Vue.component(`${component.name}-test`, {
    template,
    components: {
      [component.name]: component
    }
  }), options)

  await Vue.nextTick()

  return Promise.resolve(wrapper)
}
