import mountTemplate from 'test/utils/mountTemplate'
import MdProgressSpinner from './MdProgressSpinner.vue'

test('should render the progress', async () => {
  const template = '<md-progress-spinner md-mode="indeterminate"></md-progress-spinner>'
  const wrapper = await mountTemplate(MdProgressSpinner, template)

  expect(wrapper.hasClass('md-progress-spinner')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-progress-spinner md-theme="alt"></md-progress-spinner>'
  const wrapper = await mountTemplate(MdProgressSpinner, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
