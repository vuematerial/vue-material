import mountTemplate from 'test/utils/mountTemplate'
import MdTextarea from './MdTextarea.vue'

test('should render the input', async () => {
  const template = '<md-input></md-input>'
  const wrapper = await mountTemplate(MdTextarea, template)

  expect(wrapper.hasClass('md-input')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-input md-theme="alt"></md-input>'
  const wrapper = await mountTemplate(MdTextarea, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
