import mountTemplate from 'test/utils/mountTemplate'
import MdBadge from './MdBadge.vue'
import MdBadgeStandalone from './MdBadgeStandalone.vue'

test('should render the badge', async () => {
  const template = '<md-badge md-content="3">Lorem ipsum</md-badge>'
  const wrapper = await mountTemplate(MdBadge, template)

  expect(wrapper.hasClass('md-badge-content')).toBe(true)
  const badges = wrapper.find(MdBadgeStandalone)
  expect(badges.length).toBe(1)
  const badge = badges[0]
  expect(badge.hasClass('md-badge')).toBe(true)
  const badgeContent = badge.text().trim();
  expect(badgeContent).toBe('3')
  const slotText = wrapper.text().replace(badgeContent, '').trim()
  expect(slotText).toBe('Lorem ipsum')
})

test('should render the badge', async () => {
  const template = '<md-badge md-content="3"></md-badge>'
  const wrapper = await mountTemplate(MdBadge, template)

  expect(wrapper.hasClass('md-badge')).toBe(true)
  expect(wrapper.text().trim()).toBe('3')
})
