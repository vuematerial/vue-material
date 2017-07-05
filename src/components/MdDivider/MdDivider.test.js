import mountTemplate from 'test/utils/mountTemplate'
import MdDivider from './MdDivider.vue'

test('should render the divider', async () => {
  const template = '<md-divider></md-divider>'
  const wrapper = await mountTemplate(MdDivider, template)

  expect(wrapper.hasClass('md-divider')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-divider md-theme="alt">Lorem ipsum</md-divider>'
  const wrapper = await mountTemplate(MdDivider, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
