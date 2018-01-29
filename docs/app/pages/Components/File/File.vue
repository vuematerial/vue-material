<example src="./examples/FileField.vue" />

<template>
  <page-container centered :title="$t('pages.file.title')">
    <div class="page-container-section">
      <p>File inputs allows the user to pick one or multiple files. It can also filter the file type just like a normal input file or select multiple files.</p>
      <note-block tip><code>md-file</code> works just like a regular <code>md-input</code> component. This means that you can pass any <code>md-input</code> prop to <code>md-file</code>, like <strong>placeholder</strong>, <strong>required</strong> and <strong>disabled</strong>, for example.</note-block>
    </div>

    <div class="page-container-section">
      <h2>Regular File</h2>

      <code-example title="File Field" :component="examples['file-field']" />

      <api-item title="API - md-file">
        <p>The following options can be applied to file component:</p>

        <api-table :headings="api.regular.events.headings" :props="api.regular.events.props" slot="events" />
      </api-item>

      <note-block tip>All other <code>&lt;input type=&quot;file&quot;&gt;</code> attributes, such as <strong>multiple</strong> and <strong>accept</strong>, can be used on <code>md-field</code>.</note-block>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'DocFile',
  mixins: [examples],
  data: () => ({
    api: {
      regular: {
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [
            {
              name: 'md-change',
              description: 'Emits a FileList. Triggered every time a file is selected.',
              value: 'FileList'
            }
          ]
        }
      }
    }
  })
}
</script>
