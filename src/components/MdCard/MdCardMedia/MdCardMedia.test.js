import mountTemplate from 'test/utils/mountTemplate'
import mockConsole from 'test/utils/mockConsole'
import MdCard from '../MdCard.vue'
import MdCardMedia from './MdCardMedia.vue'
import MdCardMediaActions from './MdCardMediaActions.vue'
import MdCardMediaCover from './MdCardMediaCover.vue'

const cardComponents = {
  components: {
    MdCardMedia,
    MdCardMediaActions,
    MdCardMediaCover
  }
}

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
      <md-card-media-actions></md-card-media-actions>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const actions = wrapper.find(MdCardMediaActions)[0]

  expect(actions.hasClass('md-card-media-actions')).toBe(true)
})

test('should render the card media cover', async () => {
  const template = `
    <md-card>
      <md-card-media-cover></md-card-media-cover>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const cover = wrapper.find(MdCardMediaCover)[0]
  const backdrop = wrapper.find('.md-card-backdrop')[0]

  expect(cover.hasClass('md-card-media-cover')).toBe(true)
})

test('should render the card media cover with text scrim', async () => {
  const template = `
    <md-card>
      <md-card-media-cover md-text-scrim></md-card-media-cover>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const cover = wrapper.find(MdCardMediaCover)[0]
  const backdrop = wrapper.find('.md-card-backdrop')[0]

  expect(cover.hasClass('md-card-media-cover')).toBe(true)
  expect(cover.hasClass('md-text-scrim')).toBe(true)
  expect(Boolean(backdrop)).toBe(true)
})

test('should render the card media cover with solid background', async () => {
  const template = `
    <md-card>
      <md-card-media-cover md-solid></md-card-media-cover>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const cover = wrapper.find(MdCardMediaCover)[0]
  const backdrop = wrapper.find('.md-card-backdrop')[0]

  expect(cover.hasClass('md-card-media-cover')).toBe(true)
  expect(cover.hasClass('md-solid')).toBe(true)
  expect(Boolean(backdrop)).toBe(false)
})
