<example src="./examples/Divider.vue" />

<template>
  <page-container centered :title="$t('pages.divider.title')">
    <div class="page-container-section">
      <p>A divider is a thin, lightweight rule that groups content in lists and page layouts and helps to organize page content and hierarchy into individual tiles.</p>
      <p>The dividers can be used in lists and to separate content. They fit well in navigation panels and menus.</p>
    </div>

    <div class="page-container-section">
      <h2>Divider</h2>

      <code-example title="Divider" :component="examples['divider']" />

      <api-item title="API - md-divider">
        <p>The following class can be use in dividers inside any component:</p>

        <api-table :headings="classes.headings" :props="classes.props" slot="classes" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'DocDivider',
  mixins: [examples],
  data: () => ({
    classes: {
      headings: ['Name', 'Description'],
      props: [
        {
          name: 'md-inset',
          description: 'Creates a inset divider, which is commonly used to separate related content.'
        }
      ]
    }
  })
}
</script>
