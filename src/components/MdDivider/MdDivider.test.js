import Vue from 'vue'
import mountTemplate from 'test/utils/mountTemplate'
import MdDivider from './MdDivider.vue'

test('should render the divider', async () => {
  const template = '<md-divider></md-divider>'
  const wrapper = await mountTemplate(MdDivider, template)

  expect(wrapper.hasClass('md-divider')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-divider md-theme="alt"></md-divider>'
  const wrapper = await mountTemplate(MdDivider, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})

test('should render a <li> tag when inside lists', async () => {
  Vue.component('MdList', {
    template: '<div><slot /></div>'
  })
  const template = `
    <md-list>
      <md-divider></md-divider>
    </md-list>`
  const wrapper = await mountTemplate(MdDivider, template)
  const divider = wrapper.find(MdDivider)[0]

  expect(divider.vm.$el.tagName.toLowerCase()).toBe('li')
})

test('should render a <hr> tag when inside any other element', async () => {
  const template = `<md-divider></md-divider>`
  const wrapper = await mountTemplate(MdDivider, template)
  const divider = wrapper.find(MdDivider)[0]

  expect(divider.vm.$el.tagName.toLowerCase()).toBe('hr')
})
