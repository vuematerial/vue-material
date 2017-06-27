import mountTemplate from 'test/utils/mountTemplate'
import MdToolbar from './MdToolbar.vue'

test('should render the content', async () => {
  const template = '<md-toolbar>Lorem ipsum</md-toolbar>'
  const wrapper = await mountTemplate(MdToolbar, template)

  expect(wrapper.hasClass('md-toolbar')).toBe(true)
  expect(wrapper.hasClass('md-elevation-4')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should apply elevation', async () => {
  const template = '<md-toolbar md-elevation="2">Lorem ipsum</md-toolbar>'
  const wrapper = await mountTemplate(MdToolbar, template)

  expect(wrapper.hasClass('md-toolbar')).toBe(true)
  expect(wrapper.hasClass('md-elevation-2')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-toolbar md-theme="alt">Lorem ipsum</md-toolbar>'
  const wrapper = await mountTemplate(MdToolbar, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
