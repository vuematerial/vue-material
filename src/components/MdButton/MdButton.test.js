import VueRouter from 'vue-router'
import Vue from 'vue'
import mountTemplate from 'test/utils/mountTemplate'
import MdButton from './MdButton.vue'
import MdRipple from 'components/MdRipple/MdRipple.vue'

test('should render the theme class', async () => {
  const template = '<md-button md-theme="alt">Button</md-button>'
  const wrapper = await mountTemplate(MdButton, template)

  expect(wrapper.hasClass('md-button')).toBe(true)
  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
  expect(wrapper.is('button')).toBe(true)
  expect(wrapper.hasAttribute('type')).toBe(true)
  expect(wrapper.getAttribute('type')).toBe('button')
})

test('should render tag <button> with type "button"', async () => {
  const template = '<md-button>Button</md-button>'
  const wrapper = await mountTemplate(MdButton, template)

  wrapper.trigger('click')

  expect(wrapper.hasClass('md-button')).toBe(true)
  expect(wrapper.is('button')).toBe(true)
  expect(wrapper.hasAttribute('type')).toBe(true)
  expect(wrapper.getAttribute('type')).toBe('button')
})

test('should render tag <button> with type "submit"', async () => {
  const template = '<md-button type="submit">Button</md-button>'
  const wrapper = await mountTemplate(MdButton, template)

  expect(wrapper.hasClass('md-button')).toBe(true)
  expect(wrapper.is('button')).toBe(true)
  expect(wrapper.hasAttribute('type')).toBe(true)
  expect(wrapper.getAttribute('type')).toBe('submit')
})

test('should render tag <a> when a href is given', async () => {
  const template = '<md-button href="#test">Button</md-button>'
  const wrapper = await mountTemplate(MdButton, template)

  expect(wrapper.hasClass('md-button')).toBe(true)
  expect(wrapper.is('a')).toBe(true)
  expect(wrapper.hasAttribute('type')).toBe(false)
  expect(wrapper.hasAttribute('href')).toBe(true)
  expect(wrapper.getAttribute('href')).toBe('#test')
})

test('should render tag <a> when using "to" prop from vue-router', async () => {
  Vue.use(VueRouter)

  const router = new VueRouter({
    mode: 'history',
    routes: []
  })
  const rootRoute = '<md-button to="/">Root</md-button>'
  const testRoute = '<md-button to="/test">Test</md-button>'
  const rootWrapper = await mountTemplate(MdButton, rootRoute, { router })
  const testWrapper = await mountTemplate(MdButton, testRoute, { router })

  expect(rootWrapper.hasClass('router-link-active')).toBe(true)
  expect(testWrapper.hasClass('md-button')).toBe(true)
  expect(testWrapper.is('a')).toBe(true)
  expect(testWrapper.hasAttribute('type')).toBe(false)
  expect(rootWrapper.hasAttribute('href')).toBe(true)
  expect(rootWrapper.getAttribute('href')).toBe('/')
  expect(testWrapper.hasAttribute('href')).toBe(true)
  expect(testWrapper.getAttribute('href')).toBe('/test')
})

test('should render tag <button> when using "to" prop and vue-router is not configured', async () => {
  const template = '<md-button to="/test">Button</md-button>'
  const wrapper = await mountTemplate(MdButton, template)

  expect(wrapper.hasClass('md-button')).toBe(true)
  expect(wrapper.is('button')).toBe(true)
  expect(wrapper.hasAttribute('type')).toBe(true)
  expect(wrapper.getAttribute('type')).toBe('button')
  expect(wrapper.hasAttribute('href')).toBe(false)
})

test('should not render a ripple element if the button is disabled', async () => {
  const template = '<md-button disabled>Disabled</md-button>'
  const wrapper = await mountTemplate(MdButton, template)
  const ripple = wrapper.find(MdRipple)[0]

  expect(wrapper.hasClass('md-button')).toBe(true)
  expect(wrapper.is('button')).toBe(true)
  expect(wrapper.hasAttribute('type')).toBe(true)
  expect(wrapper.getAttribute('type')).toBe('button')
  expect(wrapper.hasAttribute('disabled')).toBe(true)
  expect(wrapper.getAttribute('disabled')).toBe('disabled')
  expect(ripple.hasClass('md-disabled')).toBe(true)
})

test('should not render a ripple element when md-ripple is false', async () => {
  const template = '<md-button :md-ripple="false">Disabled</md-button>'
  const wrapper = await mountTemplate(MdButton, template)
  const ripple = wrapper.find(MdRipple)[0]

  expect(wrapper.hasClass('md-button')).toBe(true)
  expect(wrapper.hasClass('md-ripple-off')).toBe(true)
  expect(wrapper.is('button')).toBe(true)
  expect(wrapper.hasAttribute('type')).toBe(true)
  expect(wrapper.getAttribute('type')).toBe('button')
  expect(ripple.hasClass('md-disabled')).toBe(true)
})
