import mountTemplate from 'test/utils/mountTemplate'
import MdEmptyState from './MdEmptyState.vue'

test('should render the emptystate', async () => {
  const template = '<md-empty-state>Lorem ipsum</md-empty-state>'
  const wrapper = await mountTemplate(MdEmptyState, template)

  expect(wrapper.hasClass('md-empty-state')).toBe(true)
  expect(wrapper.text().trim()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-empty-state md-theme="alt"></md-empty-state>'
  const wrapper = await mountTemplate(MdEmptyState, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
