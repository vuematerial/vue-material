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
