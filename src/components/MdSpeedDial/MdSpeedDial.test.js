import mountTemplate from 'test/utils/mountTemplate'
import MdSpeedDial from './MdSpeedDial.vue'
import MdSpeedDialContent from './MdSpeedDialContent.vue'
import MdSpeedDialTarget from './MdSpeedDialTarget.vue'
import MdIcon from 'components/MdIcon/MdIcon.vue'
import MdButton from 'components/MdButton/MdButton.vue'

const componentList = {
  components: {
    MdIcon,
    MdButton,
    MdSpeedDialContent,
    MdSpeedDialTarget
  }
}

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

  const wrapper = await mountTemplate(MdSpeedDial, template, componentList)

  expect(wrapper.hasClass('md-with-hover')).toBe(true)
  expect(wrapper.hasClass('md-direction-top')).toBe(true)
  expect(wrapper.hasClass('md-effect-fling')).toBe(true)
})

test('should render a different class for md-direction', async () => {
  const template = `
    <md-speed-dial md-direction="bottom">
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

  const wrapper = await mountTemplate(MdSpeedDial, template, componentList)

  expect(wrapper.hasClass('md-with-hover')).toBe(true)
  expect(wrapper.hasClass('md-direction-bottom')).toBe(true)
  expect(wrapper.hasClass('md-effect-fling')).toBe(true)
})

test('should render a different class for md-effect', async () => {
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

  const wrapper = await mountTemplate(MdSpeedDial, template, componentList)

  expect(wrapper.hasClass('md-with-hover')).toBe(true)
  expect(wrapper.hasClass('md-direction-top')).toBe(true)
  expect(wrapper.hasClass('md-effect-scale')).toBe(true)
})

test('should render a different class for md-event', async () => {
  const template = `
    <md-speed-dial md-event="click">
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

  const wrapper = await mountTemplate(MdSpeedDial, template, componentList)

  expect(wrapper.hasClass('md-with-hover')).toBe(false)
  expect(wrapper.hasClass('md-direction-top')).toBe(true)
  expect(wrapper.hasClass('md-effect-fling')).toBe(true)
})

test('should toggle the content with click for md-event="click"', async () => {
  const template = `
    <md-speed-dial md-event="click">
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

  const wrapper = await mountTemplate(MdSpeedDial, template, componentList)
  const trigger = wrapper.find(MdSpeedDialTarget)[0]

  trigger.trigger('click')
  await wrapper.vm.$nextTick()
  expect(wrapper.hasClass('md-active')).toBe(true)

  trigger.trigger('click')
  await wrapper.vm.$nextTick()
  expect(wrapper.hasClass('md-active')).toBe(false)
})

test('should not toggle the content with click for md-event="hover"', async () => {
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

  const wrapper = await mountTemplate(MdSpeedDial, template, componentList)
  const trigger = wrapper.find(MdSpeedDialTarget)[0]

  trigger.trigger('click')
  await wrapper.vm.$nextTick()
  expect(wrapper.hasClass('md-active')).toBe(false)

  trigger.trigger('click')
  await wrapper.vm.$nextTick()
  expect(wrapper.hasClass('md-active')).toBe(false)
})

test('should add index attributes to content children', async () => {
  const template = `
    <md-speed-dial>
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  `

  const wrapper = await mountTemplate(MdSpeedDial, template, componentList)
  const content = wrapper.find(MdSpeedDialContent)[0]
  const children = Array.from(content.vm.$children)
  let lastIndex = children.length

  children.forEach(childNode => {
    const index = parseInt(childNode.$el.getAttribute('md-button-index'), 10)

    expect(typeof index).toBe('number')
    expect(lastIndex).toBeGreaterThan(index)
    lastIndex = index
  })
})

test('should all children have a raised class', async () => {
  const template = `
    <md-speed-dial>
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
  `

  const wrapper = await mountTemplate(MdSpeedDial, template, componentList)
  const content = wrapper.find(MdSpeedDialContent)[0]
  const children = Array.from(content.vm.$children)

  children.forEach(childNode => {
    expect(childNode.$el.classList.contains('md-raised')).toBe(true)
  })
})
