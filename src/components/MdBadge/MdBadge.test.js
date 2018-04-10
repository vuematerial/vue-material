import mountTemplate from 'test/utils/mountTemplate'
import MdBadge from './MdBadge.vue'

test('should render the badge', async () => {
  const template = '<md-badge>Lorem ipsum</md-badge>'
  const wrapper = await mountTemplate(MdBadge, template)

  expect(wrapper.hasClass('md-badge')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})
