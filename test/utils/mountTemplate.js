import Vue from 'vue'
import { mount } from 'avoriaz'

export default async (component, template, options = {}) => {
  const newComponent = Vue.component(`${component.name}-test`, {
    template,
    components: {
      [component.name]: component
    }
  })
  const wrapper = mount(newComponent, options)

  await Vue.nextTick()

  return Promise.resolve(wrapper)
}
