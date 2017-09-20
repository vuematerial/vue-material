import mountTemplate from 'test/utils/mountTemplate'
import mockConsole from 'test/utils/mockConsole'
import MdCard from './MdCard.vue'
import MdCardActions from './MdCardActions.vue'
import MdCardContent from './MdCardContent.vue'
import MdCardHeader from './MdCardHeader.vue'
import MdCardHeaderText from './MdCardHeaderText.vue'
import MdCardMedia from './MdCardMedia.vue'
import MdCardMediaActions from './MdCardMediaActions.vue'

const cardComponents = {
  components: {
    MdCardActions,
    MdCardContent,
    MdCardHeader,
    MdCardHeaderText,
    MdCardMedia,
    MdCardMediaActions
  }
}

test('should render the content', async () => {
  const template = '<md-card>Lorem ipsum</md-card>'
  const wrapper = await mountTemplate(MdCard, template)

  expect(wrapper.hasClass('md-card')).toBe(true)
  expect(wrapper.text()).toBe('Lorem ipsum')
})

test('should render the theme class', async () => {
  const template = '<md-card md-theme="alt">Lorem ipsum</md-card>'
  const wrapper = await mountTemplate(MdCard, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})

test('should render the actions', async () => {
  const template = `
    <md-card>
      <md-card-actions></md-card-actions>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const actions = wrapper.find(MdCardActions)[0]

  expect(actions.hasClass('md-card-actions')).toBe(true)
  expect(actions.hasClass('md-alignment-right')).toBe(true)
})

test('should render the actions with left alignment classes', async () => {
  const template = `
    <md-card>
      <md-card-actions md-alignment="left"></md-card-actions>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const actions = wrapper.find(MdCardActions)[0]

  expect(actions.hasClass('md-card-actions')).toBe(true)
  expect(actions.hasClass('md-alignment-left')).toBe(true)
})

test('should render the actions with space-between alignment classes', async () => {
  const template = `
    <md-card>
      <md-card-actions md-alignment="space-between"></md-card-actions>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const actions = wrapper.find(MdCardActions)[0]

  expect(actions.hasClass('md-card-actions')).toBe(true)
  expect(actions.hasClass('md-alignment-space-between')).toBe(true)
})

test('should fail with an unsupported alignment value', async () => {
  const template = `
    <md-card>
      <md-card-actions md-alignment="center"></md-card-actions>
    </md-card>
  `
  const mock = mockConsole()

  await mountTemplate(MdCard, template, cardComponents)

  expect(console.error).toBeCalled()

  mock()
})

test('should render the content', async () => {
  const template = `
    <md-card>
      <md-card-content></md-card-content>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const content = wrapper.find(MdCardContent)[0]

  expect(content.hasClass('md-card-content')).toBe(true)
})

test('should render the header', async () => {
  const template = `
    <md-card>
      <md-card-header></md-card-header>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const header = wrapper.find(MdCardHeader)[0]

  expect(header.hasClass('md-card-header')).toBe(true)
})

test('should render the header text', async () => {
  const template = `
    <md-card>
      <md-card-header>
        <md-card-header-text></md-card-header-text>
      </md-card-header>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const header = wrapper.find(MdCardHeader)[0]
  const text = wrapper.find(MdCardHeaderText)[0]

  expect(text.hasClass('md-card-header-text')).toBe(true)
  expect(header.hasClass('md-card-header-flex')).toBe(true)
  text.destroy()
  expect(header.hasClass('md-card-header-flex')).toBe(false)
})

test('should render the card media with medium size', async () => {
  const template = `
    <md-card>
      <md-card-media md-medium>
      </md-card-media>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const media = wrapper.find(MdCardMedia)[0]

  expect(media.hasClass('md-card-media')).toBe(true)
  expect(media.hasClass('md-medium')).toBe(true)
})

test('should render the card media with big size', async () => {
  const template = `
    <md-card>
      <md-card-media md-big>
      </md-card-media>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const media = wrapper.find(MdCardMedia)[0]

  expect(media.hasClass('md-card-media')).toBe(true)
  expect(media.hasClass('md-big')).toBe(true)
})

test('should render the card media with correct ratio', async () => {
  const template = '<md-card-media md-ratio="16:9"></md-card-media>'
  const wrapper = await mountTemplate(MdCardMedia, template, cardComponents)

  expect(wrapper.hasClass('md-ratio-16-9')).toBe(true)
})

test('should render the card media with correct ratio', async () => {
  const template = '<md-card-media md-ratio="16-9"></md-card-media>'
  const wrapper = await mountTemplate(MdCardMedia, template, cardComponents)

  expect(wrapper.hasClass('md-ratio-16-9')).toBe(true)
})

test('should render the card media with correct ratio', async () => {
  const template = '<md-card-media md-ratio="16/9"></md-card-media>'
  const wrapper = await mountTemplate(MdCardMedia, template, cardComponents)

  expect(wrapper.hasClass('md-ratio-16-9')).toBe(true)
})

test('should render the card media with correct ratio', async () => {
  const template = '<md-card-media md-ratio="4:3"></md-card-media>'
  const wrapper = await mountTemplate(MdCardMedia, template, cardComponents)

  expect(wrapper.hasClass('md-ratio-4-3')).toBe(true)
})

test('should render the card media with correct ratio', async () => {
  const template = '<md-card-media md-ratio="4-3"></md-card-media>'
  const wrapper = await mountTemplate(MdCardMedia, template, cardComponents)

  expect(wrapper.hasClass('md-ratio-4-3')).toBe(true)
})

test('should render the card media with correct ratio', async () => {
  const template = '<md-card-media md-ratio="4/3"></md-card-media>'
  const wrapper = await mountTemplate(MdCardMedia, template, cardComponents)

  expect(wrapper.hasClass('md-ratio-4-3')).toBe(true)
})

test('should render the card media with correct ratio', async () => {
  const template = '<md-card-media md-ratio="1:1"></md-card-media>'
  const wrapper = await mountTemplate(MdCardMedia, template, cardComponents)

  expect(wrapper.hasClass('md-ratio-1-1')).toBe(true)
})

test('should render the card media with correct ratio', async () => {
  const template = '<md-card-media md-ratio="1-1"></md-card-media>'
  const wrapper = await mountTemplate(MdCardMedia, template, cardComponents)

  expect(wrapper.hasClass('md-ratio-1-1')).toBe(true)
})

test('should render the card media with correct ratio', async () => {
  const template = '<md-card-media md-ratio="1/1"></md-card-media>'
  const wrapper = await mountTemplate(MdCardMedia, template, cardComponents)

  expect(wrapper.hasClass('md-ratio-1-1')).toBe(true)
})

test('should fail with an unsupported ratio value', async () => {
  const template = `
    <md-card>
      <md-card-media md-ratio="9/16">
      </md-card-media>
    </md-card>
  `
  const mock = mockConsole()

  await mountTemplate(MdCard, template, cardComponents)

  expect(console.error).toBeCalled()

  mock()
})

test('should render the card media actions', async () => {
  const template = `
    <md-card>
      <md-card-media-actions>
      </md-card-media-actions>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const actions = wrapper.find(MdCardMediaActions)[0]

  expect(actions.hasClass('md-card-media-actions')).toBe(true)
})
