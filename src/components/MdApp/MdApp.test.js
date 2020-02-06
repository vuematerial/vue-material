import mountTemplate from 'test/utils/mountTemplate'
import MdApp from './MdApp.vue'

test('should render the app', async () => {
  const template = '<md-app></md-app>'
  const wrapper = await mountTemplate(MdApp, template)

  expect(wrapper.classes('md-app')).toBe(true)
})
