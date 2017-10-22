import { mount } from 'avoriaz'
import mountTemplate from 'test/utils/mountTemplate'
import MdPortal from './MdPortal'

test('should render the portal element inside body', async () => {
  const template = '<md-portal>Lorem ipsum</md-portal>'
  const wrapper = await mountTemplate(MdPortal, template)
  const portalEl = wrapper.vm.$el

  expect(document.body.childNodes).toContain(portalEl)
})

test('should remove the portal element from destination before destroy', async () => {
  const template = '<md-portal>Lorem ipsum</md-portal>'
  const wrapper = await mountTemplate(MdPortal, template)
  const portalEl = wrapper.vm.$el

  expect(document.body.childNodes).toContain(portalEl)

  wrapper.destroy()
  expect(document.body.childNodes).not.toContain(portalEl)
})

test('should render on a custom target', async () => {
  const targetTemplate = `
    <div>
      <div>
        <div>
          <div class="target"></div>
        </div>
      </div>
    </div>
  `
  await mountTemplate(MdPortal, targetTemplate, {
    attachToDocument: true
  })
  const targetEl = document.querySelector('.target')
  const portalWrapper = mount(MdPortal, {
    propsData: {
      mdTarget: targetEl
    }
  })
  const portalEl = portalWrapper.vm.$el

  expect(document.body.childNodes).not.toContain(portalEl)
  expect(targetEl.contains(portalEl)).toBe(true)
})

test('should re render after target change', async () => {
  const targetTemplate = `
    <div>
      <div>
        <div>
          <div class="target"></div>
        </div>
      </div>
    </div>
  `
  await mountTemplate(MdPortal, targetTemplate)
  const portalWrapper = mount(MdPortal, {
    attachToDocument: true
  })
  const targetEl = document.querySelector('.target')
  const portalEl = portalWrapper.vm.$el

  expect(document.body.childNodes).toContain(portalEl)

  portalWrapper.setProps({
    mdTarget: targetEl
  })
  portalWrapper.vm.$nextTick()
  expect(document.body.childNodes).not.toContain(portalEl)
  expect(targetEl.contains(portalEl)).toBe(true)
})
