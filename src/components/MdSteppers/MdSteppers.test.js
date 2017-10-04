import mountTemplate from 'test/utils/mountTemplate'
import MdSteppers from './MdSteppers.vue'

test('should render the steppers', async () => {
  const template = '<md-steppers>Lorem ipsum</md-steppers>'
  const wrapper = await mountTemplate(MdSteppers, template)

  expect(wrapper.hasClass('md-steppers')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-steppers md-theme="alt">Lorem ipsum</md-steppers>'
  const wrapper = await mountTemplate(MdSteppers, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
