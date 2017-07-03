import mountTemplate from 'test/utils/mountTemplate'
import MdSwitch from './MdSwitch.vue'

test('should render the switch', async () => {
  const template = '<md-switch></md-switch>'
  const wrapper = await mountTemplate(MdSwitch, template)

  expect(wrapper.hasClass('md-switch')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-switch md-theme="alt"></md-switch>'
  const wrapper = await mountTemplate(MdSwitch, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
