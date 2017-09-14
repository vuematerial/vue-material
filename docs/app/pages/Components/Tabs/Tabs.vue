<example src="./examples/VueRouter.vue" />
<example src="./examples/Alignments.vue" />
<example src="./examples/TabContent.vue" />
<example src="./examples/Icons.vue" />
<example src="./examples/CustomTemplate.vue" />

<template>
  <page-container centered :title="$t('pages.tabs.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>Seamless integration with Vue Router</h2>

      <code-example title="Router" :component="examples['vue-router']" />
    </div>

    <div class="page-container-section">
      <h2>Tab with inner content</h2>

      <code-example title="Content syncing with Router" :component="examples['tab-content']" />
    </div>

    <div class="page-container-section">
      <h2>Alignments</h2>

      <code-example title="With different hue colors" :component="examples['alignments']" />
    </div>

    <div class="page-container-section">
      <h2>Icons</h2>

      <code-example title="With svg support" :component="examples['icons']" />
    </div>

    <div class="page-container-section">
      <h2>Custom Template</h2>

      <code-example title="Template Slot" :component="examples['custom-template']" />

      <api-item title="API - md-tabs">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'Tabs',
  mixins: [examples]
}
</script>
