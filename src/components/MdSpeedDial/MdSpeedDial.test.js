import mountTemplate from 'test/utils/mountTemplate'
import MdSpeedDial from './MdSpeedDial.vue'

test('should render the speeddial', async () => {
  const template = '<md-speed-dial>Lorem ipsum</md-speed-dial>'
  const wrapper = await mountTemplate(MdSpeedDial, template)

  expect(wrapper.hasClass('md-speed-dial')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-speed-dial md-theme="alt">Lorem ipsum</md-speed-dial>'
  const wrapper = await mountTemplate(MdSpeedDial, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})