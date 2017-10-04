import mountTemplate from 'test/utils/mountTemplate'
import mockConsole from 'test/utils/mockConsole'
import MdCard from '../MdCard.vue'
import MdCardContent from './MdCardContent.vue'

const cardComponents = {
  components: { MdCardContent }
}

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
