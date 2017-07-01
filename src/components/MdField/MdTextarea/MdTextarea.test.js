import mountTemplate from 'test/utils/mountTemplate'
import MdTextarea from './MdTextarea.vue'

test('should render the input', async () => {
  const template = '<md-textarea></md-textarea>'
  const wrapper = await mountTemplate(MdTextarea, template)

  expect(wrapper.hasClass('md-textarea')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-textarea md-theme="alt"></md-textarea>'
  const wrapper = await mountTemplate(MdTextarea, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
