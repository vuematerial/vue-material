<example src="./examples/SnackbarExample.vue" />

<template>
  <page-container centered :title="$t('pages.snackbar.title')">
    <div class="page-container-section">
      <p>Snackbars provide brief feedback about an operation through a message at the bottom of the screen.</p>
      <p>They can have a custom duration on the screen or be persistent. It can be centered or left aligned.</p>
      <note-block>On mobile devices the snackbar will fit the whole width space.</note-block>
    </div>

    <div class="page-container-section">
      <h2>Duration and position</h2>

      <code-example title="Dynamic values" :component="examples['snackbar-example']" />

      <api-item title="API - md-snackbar">
        <p>The following options can be applied to any snackbar:</p>

        <api-table :headings="props.headings" :props="props.props" slot="props" />
        <api-table :headings="events.headings" :props="events.props" slot="events" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocSnackbar',
    mixins: [examples],
    data: () => ({
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'md-active',
            type: 'Boolean',
            description: 'Option used to trigger the snackbar visibility. Should be used with the <code>.sync</code> modifier.',
            defaults: 'false'
          },
          {
            name: 'md-duration',
            type: 'Number',
            description: 'Sets the duration in milliseconds before close the snackbar.',
            defaults: '4000'
          },
          {
            name: 'md-persistent',
            type: 'Boolean',
            description: 'This will make the snackbar persistent in your application, even changing routes.',
            defaults: 'false'
          },
          {
            name: 'md-position',
            type: 'String',
            description: 'Sets the snackbar position on the bottom of the screen.',
            defaults: 'null'
          },
          {
            offset: true,
            name: 'md-position="center"',
            type: 'String',
            description: 'Make the snackbar centered.',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-position="left"',
            type: 'String',
            description: 'Make the snackbar left aligned.',
            defaults: '-'
          }
        ]
      },
      events: {
        headings: ['Name', 'Description', 'Value'],
        props: [
          {
            name: 'md-opened',
            description: 'Triggered when a snackbar opens',
            value: 'null'
          },
          {
            name: 'md-closed',
            description: 'Triggered when a snackbar closes',
            value: 'null'
          }
        ]
      }
    })
  }
</script>
