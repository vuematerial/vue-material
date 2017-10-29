<example src="./examples/TabRouter.vue" />
<example src="./examples/TabAlignments.vue" />
<example src="./examples/TabContent.vue" />
<example src="./examples/TabIcons.vue" />
<example src="./examples/TabCustomTemplate.vue" />

<template>
  <page-container centered :title="$t('pages.tabs.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>Seamless integration with Vue Router</h2>

      <code-example title="Router" :component="examples['tab-router']" />
    </div>

    <div class="page-container-section">
      <h2>Tab with inner content</h2>

      <code-example title="Content syncing with Router" :component="examples['tab-content']" />
    </div>

    <div class="page-container-section">
      <h2>Alignments</h2>

      <code-example title="With different hue colors" :component="examples['tab-alignments']" />
    </div>

    <div class="page-container-section">
      <h2>Icons</h2>

      <code-example title="With svg support" :component="examples['tab-icons']" />
    </div>

    <div class="page-container-section">
      <h2>Custom Template</h2>

      <code-example title="Template Slot" :component="examples['tab-custom-template']" />

      <api-item title="API - md-tabs">
        <p>This component does not have any extra option.</p>
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
