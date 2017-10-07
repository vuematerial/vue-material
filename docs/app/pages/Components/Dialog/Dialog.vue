<example src="./examples/Custom.vue" />
<example src="./examples/Presets.vue" />

<template>
  <page-container centered :title="$t('pages.dialog.title')">
    <div class="page-container-section">
      <p>Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. The dialog component works with any plain html content. You can have tabs, all form components and more.</p>
      <p>The component can be used with a custom markup, using the auxiliary components, or with presets by Vue Material. Those presets emulates the default Dialogs from Javascript, like confirm, alert and prompt.</p>
    </div>

    <div class="page-container-section">
      <h2>Dialog</h2>

      <code-example title="Custom Dialog Markup" :component="examples['custom']" />

      <api-item title="API - md-dialog">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>

    <div class="page-container-section">
      <h2>Presets</h2>

      <code-example title="Alert, Confirm and Prompt" :component="examples['presets']" />

      <api-item title="API - md-dialog">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Dialog',
    mixins: [examples]
  }
</script>
