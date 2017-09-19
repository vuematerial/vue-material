import mountTemplate from 'test/utils/mountTemplate'
import MdSpeedDial from './MdSpeedDial.vue'
import MdSpeedDialContent from './MdSpeedDialContent.vue'
import MdSpeedDialTarget from './MdSpeedDialTarget.vue'
import MdButton from '../MdButton/MdButton.vue'

test('should render the speed dial', async () => {
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

test('should render the default classes', async () => {
  const template = `
    <md-speed-dial>
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  `

  const wrapper = await mountTemplate(MdSpeedDial, template)

  expect(wrapper.hasClass('md-with-hover')).toBe(true)
  expect(wrapper.hasClass('md-direction-bottom')).toBe(true)
  expect(wrapper.hasClass('md-effect-fling')).toBe(true)
})

test('should render a different class for md-direction', async () => {
  const template = `
    <md-speed-dial md-direction="top">
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  `

  const wrapper = await mountTemplate(MdSpeedDial, template)

  expect(wrapper.hasClass('md-with-hover')).toBe(true)
  expect(wrapper.hasClass('md-direction-top')).toBe(true)
  expect(wrapper.hasClass('md-effect-fling')).toBe(true)
})

test('should render a different class for md-direction', async () => {
  const template = `
    <md-speed-dial md-effect="scale">
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  `

  const wrapper = await mountTemplate(MdSpeedDial, template)

  expect(wrapper.hasClass('md-with-hover')).toBe(true)
  expect(wrapper.hasClass('md-direction-bottom')).toBe(true)
  expect(wrapper.hasClass('md-effect-scale')).toBe(true)
})
