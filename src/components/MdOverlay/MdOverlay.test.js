import mountTemplate from 'test/utils/mountTemplate'
import MdOverlay from './MdOverlay.vue'

test('should render the overlay', async () => {
  const template = '<md-overlay md-active></md-overlay>'
  const wrapper = await mountTemplate(MdOverlay, template)

  expect(wrapper.hasClass('md-overlay')).toBe(true)
})

test('should render the overlay inside body tag', async () => {
  const template = `
    <div class="test-parent">
      <div class="test">
        <md-overlay></md-overlay>
      </div>
    </div>
  `
  const wrapper = await mountTemplate(MdOverlay, template)
  const overlay = wrapper.find(MdOverlay)[0]

  expect(overlay.vm.$el.parentNode.tagName.toLowerCase()).toBe('body')
})

test('should render the overlay inside parent element', async () => {
  const template = `
    <div class="test-parent">
      <div class="test">
        <md-overlay md-attach-to-parent></md-overlay>
      </div>
    </div>
  `
  const wrapper = await mountTemplate(MdOverlay, template)
  const overlay = wrapper.find(MdOverlay)[0]

  expect(overlay.vm.$el.parentNode.getAttribute('class')).toBe('test-parent')
})
