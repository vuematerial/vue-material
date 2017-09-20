import { mount } from 'avoriaz'
import mountTemplate from 'test/utils/mountTemplate'
import MdPortal from './MdPortal.vue'

test('should render the portal element', async () => {
  const template = '<md-portal>Lorem ipsum</md-portal>'
  const wrapper = await mountTemplate(MdPortal, template)

  expect(document.body.contains(wrapper.vm.$el)).toBe(true)
})

test('should remove the portal element from destination before destroy', async () => {
  const template = '<md-portal>Lorem ipsum</md-portal>'
  const wrapper = await mountTemplate(MdPortal, template)
  const el = wrapper.vm.$el

  expect(document.body.contains(el)).toBe(true)

  wrapper.destroy()
  expect(document.body.contains(el)).toBe(false)
})
