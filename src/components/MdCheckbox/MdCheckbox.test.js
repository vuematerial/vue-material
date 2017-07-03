import mountTemplate from 'test/utils/mountTemplate'
import MdCheckbox from './MdCheckbox.vue'

test('should render the checkbox', async () => {
  const template = '<md-checkbox></md-checkbox>'
  const wrapper = await mountTemplate(MdCheckbox, template)

  expect(wrapper.hasClass('md-checkbox')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-checkbox md-theme="alt"></md-checkbox>'
  const wrapper = await mountTemplate(MdCheckbox, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
