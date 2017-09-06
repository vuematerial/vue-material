import mountTemplate from 'test/utils/mountTemplate'
import MdAvatar from './MdAvatar.vue'

test('should render the avatar', async () => {
  const template = '<md-avatar>Lorem ipsum</md-avatar>'
  const wrapper = await mountTemplate(MdAvatar, template)

  expect(wrapper.hasClass('md-avatar')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-avatar md-theme="alt">Lorem ipsum</md-avatar>'
  const wrapper = await mountTemplate(MdAvatar, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
