import mountTemplate from 'test/utils/mountTemplate'
import mockConsole from 'test/utils/mockConsole'
import MdCard from '../MdCard.vue'
import MdCardExpand from './MdCardExpand.vue'

const cardComponents = {
  components: {
    MdCardExpand
  }
}

test('should render the expand', async () => {
  const template = `
    <md-card>
      <md-card-expand></md-card-expand>
    </md-card>
  `
  const wrapper = await mountTemplate(MdCard, template, cardComponents)
  const expand = wrapper.find(MdCardExpand)[0]

  expect(expand.hasClass('md-card-expand')).toBe(true)
})
