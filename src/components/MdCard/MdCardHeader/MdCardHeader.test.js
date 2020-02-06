import mountTemplate from 'test/utils/mountTemplate'
import MdCard from '../MdCard.vue'
import MdCardHeader from './MdCardHeader.vue'
import MdCardHeaderText from './MdCardHeaderText.vue'

const cardComponents = {
  components: {
    MdCardHeader,
    MdCardHeaderText
  }
}

test('should render the header', async () => {
  const template = `
    <md-card>
      <md-card-header></md-card-header>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const header = wrapper.find(MdCardHeader)

  expect(header.classes('md-card-header')).toBe(true)
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
  const header = wrapper.find(MdCardHeader)
  const text = wrapper.find(MdCardHeaderText)

  expect(text.classes('md-card-header-text')).toBe(true)
  expect(header.classes('md-card-header-flex')).toBe(true)
  text.destroy()
  expect(header.classes('md-card-header-flex')).toBe(false)
})
