import mountTemplate from 'test/utils/mountTemplate'
import MdInput from './MdInput.vue'

test('should render the input', async () => {
  const template = '<md-input></md-input>'
  const wrapper = await mountTemplate(MdInput, template)

  expect(wrapper.hasClass('md-input')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-input md-theme="alt"></md-input>'
  const wrapper = await mountTemplate(MdInput, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
