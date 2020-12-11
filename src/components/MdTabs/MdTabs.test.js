import mountTemplate from 'test/utils/mountTemplate'
import Vue from 'vue'
import MdTabs from './MdTabs.vue'
import MdTab from './MdTab.vue'

const tabComponents = {
  components: { MdTab }
}

function noSpace (string) {
  return string.replace(/ /g, '')
}

test('should render the tabs', async () => {
  const template = '<md-tabs></md-tabs>'
  const wrapper = await mountTemplate(MdTabs, template)

  expect(wrapper.hasClass('md-tabs')).toBe(true)
})

test('should render the theme class', async () => {
  const template = '<md-tabs md-theme="alt"></md-tabs>'
  const wrapper = await mountTemplate(MdTabs, template)

  expect(wrapper.hasClass('md-theme-alt')).toBe(true)
})

test('should render the tabs in the declared order, no matter the id type', async () => {
  const template = `
    <md-tabs>
      <md-tab md-label="A" id="9">D</md-tab>
      <md-tab md-label="B" id="str">E</md-tab>
      <md-tab md-label="C" id="1">F</md-tab>
    </md-tabs>`
  const wrapper = await mountTemplate(MdTabs, template, tabComponents)

  expect(noSpace(wrapper.find(".md-tabs-navigation")[0].text())).toBe("ABC")
  expect(noSpace(wrapper.find(".md-tabs-container")[0].text())).toBe("DEF")
})

test('should render the tabs in the declared order, even after a previously hidden tab gets displayed in the middle', async () => {
  const template = `
    <md-tabs>
      <md-tab md-label="A">D</md-tab>
      <md-tab md-label="B" v-if="display">E</md-tab>
      <md-tab md-label="C">F</md-tab>
    </md-tabs>`
  const wrapper = await mountTemplate(MdTabs, template, {
    ...tabComponents,
    data: () => ({ display: false })
  })

  wrapper.data().display = true
  await Vue.nextTick()

  expect(noSpace(wrapper.find(".md-tabs-navigation")[0].text())).toBe("ABC")
  expect(noSpace(wrapper.find(".md-tabs-container")[0].text())).toBe("DEF")
})

test('should not render children tabs into a parent tab-bar', async () => {
  const template = `
    <md-tabs>
      <md-tab md-label="Parent1">
        <md-tabs>
          <md-tab md-label="Child"/>
        </md-tabs>
      </md-tab>
      <md-tab md-label="Parent2"/>
    </md-tabs>`
  const wrapper = await mountTemplate(MdTabs, template, tabComponents)

  expect(noSpace(wrapper.find(".md-tabs-navigation")[0].text())).toBe("Parent1Parent2")
})

test('should keep active tab ID when it moves', async () => {
  const template = `
    <md-tabs md-active-tab="B" ref="tabs">
      <md-tab md-label="A" id="A"/>
      <md-tab md-label="Binitial" id="B" v-if="!moved"/>
      <md-tab md-label="C" id="C"/>
      <md-tab md-label="Bmoved" id="B" v-if="moved"/>
      <md-tab md-label="D" id="D"/>
    </md-tabs>`
  const wrapper = await mountTemplate(MdTabs, template, {
    ...tabComponents,
    data: () => ({ moved: false })
  })

  wrapper.data().moved = true
  await Vue.nextTick()
  await Vue.nextTick()

  const tabs = wrapper.vm.$refs.tabs

  // Active tab ID is still the same
  expect(tabs.activeTab).toBe("B")
  // The active tab is visually at its new position
  expect(tabs.activeTabIndex).toBe(2)
  expect(noSpace(tabs.activeButtonEl.textContent)).toBe("Bmoved")
})

test('should keep active tab index when active tab ID is removed', async () => {
  const template = `
    <md-tabs md-active-tab="B" ref="tabs">
      <md-tab md-label="A" id="A"/>
      <md-tab md-label="B" id="B" v-if="display"/>
      <md-tab md-label="C" id="C"/>
      <md-tab md-label="D" id="D"/>
    </md-tabs>`
  const wrapper = await mountTemplate(MdTabs, template, {
    ...tabComponents,
    data: () => ({ display: true })
  })

  wrapper.data().display = false
  await Vue.nextTick()

  const tabs = wrapper.vm.$refs.tabs

  // Active tab index is still the same
  expect(tabs.activeTabIndex).toBe(1)
  // The active tab is visually the new one at this index
  expect(tabs.activeTab).toBe("C")
  expect(noSpace(tabs.activeButtonEl.textContent)).toBe("C")
})

test('should activate the new last tab when the current last tab is removed', async () => {
  const template = `
    <md-tabs md-active-tab="C" ref="tabs">
      <md-tab md-label="A" id="A"/>
      <md-tab md-label="B" id="B"/>
      <md-tab md-label="C" id="C" v-if="display"/>
    </md-tabs>`
  const wrapper = await mountTemplate(MdTabs, template, {
    ...tabComponents,
    data: () => ({ display: true })
  })

  wrapper.data().display = false
  await Vue.nextTick()
  await Vue.nextTick()

  const tabs = wrapper.vm.$refs.tabs

  // Active tab index is still the same
  expect(tabs.activeTabIndex).toBe(1)
  // The active tab is visually the new one at this index
  expect(tabs.activeTab).toBe("B")
  expect(noSpace(tabs.activeButtonEl.textContent)).toBe("B")
})

test('should emit md-changed when mounted and when md-active-tab changes', async () => {
  const template = `
    <md-tabs :md-active-tab="mdActiveTab" @md-changed="events += $event">
      <md-tab id="A" />
      <md-tab id="B" />
    </md-tabs>`
  const wrapper = await mountTemplate(MdTabs, template, {
    ...tabComponents,
    data: () => ({
      mdActiveTab: "A",
      events: ""
    })
  })

  wrapper.data().mdActiveTab = "B"
  await Vue.nextTick()

  expect(wrapper.data().events).toBe("AB")
})
