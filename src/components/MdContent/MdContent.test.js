import mountTemplate from 'test/utils/mountTemplate'
import MdContent from './MdContent.vue'

test('should render the content', async () => {
  const template = '<md-content>Lorem ipsum</md-content>'
  const wrapper = await mountTemplate(MdContent, template)

  expect(wrapper.classes('md-content')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-content md-theme="alt">Lorem ipsum</md-content>'
  const wrapper = await mountTemplate(MdContent, template)

  expect(wrapper.classes('md-theme-alt')).toBe(true)
})
