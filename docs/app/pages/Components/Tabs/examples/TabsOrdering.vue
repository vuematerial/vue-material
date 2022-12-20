<template>
  <div>
    <md-tabs :md-active-tab="0">
      <md-tab id="A" md-label='Tab id="A"'>
        Content of tab with id string "A".
      </md-tab>
      <md-tab id="B" md-label='Tab id="B"' v-if="showMiddleTab">
        Content of tab with id string "B" is currently visible and active:
        when hiding it, its next sibling will be activated.
      </md-tab>
      <md-tab :id="0" md-label="Tab id=0">
        Content of tab with a numeric ID (active by default).
        Try toggling the tab B, just before this tab: this tab is still active.
      </md-tab>
      <md-tab :id="NaN" md-label="Tab id=NaN">
        NaN is a valid numeric ID,
        and can act as a special "View the content of all other tabs (with numeric ID) at once".
      </md-tab>
      <md-tab :id="dynamicId" :md-label="`Dynamic id=${dynamicId}`">
        Content of tab with dynamic id={{ dynamicId }}:
        when removing this tab with this ID, the new tab that replaces it at the same place will be activated.
      </md-tab>
      <md-tab id="Z" md-label='Last tab id="Z"' v-if="showLastTab">
        Last tab: when hiding it, the tab just before it will be activated.
      </md-tab>
    </md-tabs>

    <md-button class="md-primary" @click="showMiddleTab = !showMiddleTab">Toggle second tab (id="B")</md-button>
    <md-button class="md-primary" @click="showLastTab = !showLastTab">Toggle last tab (id="Z")</md-button>
    <md-button class="md-primary" @click="dynamicId++">Change dynamic ID</md-button>
  </div>
</template>

<script>
export default {
  name: 'TabsOrdering',

  data: () => ({
    showMiddleTab: false,
    showLastTab: false,
    dynamicId: 100
  }),
}
</script>
