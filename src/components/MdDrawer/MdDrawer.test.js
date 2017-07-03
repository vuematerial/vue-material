import mountTemplate from 'test/utils/mountTemplate'
import MdDrawer from './MdDrawer.vue'

test('should render the drawer', async () => {
  const template = '<md-drawer>Lorem ipsum</md-drawer>'
  const wrapper = await mountTemplate(MdDrawer, template)

  expect(wrapper.hasClass('md-drawer')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum ')
})

test('should render the theme class', async () => {
  const template = '<md-drawer md-theme="alt">Lorem ipsum</md-drawer>'
  const wrapper = await mountTemplate(MdDrawer, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
