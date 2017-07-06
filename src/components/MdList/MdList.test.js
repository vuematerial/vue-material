import mountTemplate from 'test/utils/mountTemplate'
import MdList from './MdList.vue'

test('should render the list', async () => {
  const template = '<md-list>Lorem ipsum</md-list>'
  const wrapper = await mountTemplate(MdList, template)

  expect(wrapper.hasClass('md-list')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-list md-theme="alt">Lorem ipsum</md-list>'
  const wrapper = await mountTemplate(MdList, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})
