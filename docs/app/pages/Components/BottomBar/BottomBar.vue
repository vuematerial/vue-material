<example src="./examples/VueRouter.vue" />
<example src="./examples/Shift.vue" />
<example src="./examples/ChangingThemes.vue" />
<example src="./examples/CustomTemplate.vue" />

<template>
  <page-container centered :title="$t('pages.bottomBar.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>Seamless integration with Vue Router</h2>

      <code-example title="With default fixed style" :component="examples['vue-router']" />
    </div>

    <div class="page-container-section">
      <h2>Shift effect</h2>

      <code-example title="With Primary and Accent colors" :component="examples['shift']" />
    </div>

    <div class="page-container-section">
      <h2>Dynamic Themes</h2>

      <code-example title="Morphing States" :component="examples['changing-themes']" />
    </div>

    <div class="page-container-section">
      <h2>Custom Template</h2>

      <code-example title="Template Slot" :component="examples['custom-template']" />

      <api-item title="API - md-bottom-bar">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'BottomBar',
  mixins: [examples]
}
</script>
