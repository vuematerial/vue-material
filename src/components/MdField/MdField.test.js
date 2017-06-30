import mountTemplate from 'test/utils/mountTemplate'
import MdField from './MdField.vue'

test('should render the field', async () => {
  const template = '<md-field>Lorem ipsum</md-field>'
  const wrapper = await mountTemplate(MdField, template)

  expect(wrapper.hasClass('md-field')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-field md-theme="alt">Lorem ipsum</md-field>'
  const wrapper = await mountTemplate(MdField, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
