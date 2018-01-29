<example src="./examples/ProgressSpinnerIndeterminate.vue" />
<example src="./examples/ProgressSpinnerDeterminate.vue" />
<example src="./examples/ProgressSpinnerSizes.vue" />

<template>
  <page-container centered :title="$t('pages.progressSpinner.title')">
    <div class="page-container-section">
      <p>Progress indicators are visual indications of an app loading content.</p>
      <p>Progress spinners have 2 types for each operation that your application may need: Determinate or Indeterminate.</p>
    </div>

    <div class="page-container-section">
      <h2>Progress Spinner</h2>

      <p>When indicators are determinate they indicate how long an operation will take when the percentage complete is detectable.</p>
      <code-example title="Determinate" :component="examples['progress-spinner-determinate']" />
    </div>

    <div class="page-container-section">
      <p>When indicators are indeterminate they request that the user wait while something finishes when it’s not necessary to indicate how long it will take.</p>
      <code-example title="Indeterminate" :component="examples['progress-spinner-indeterminate']" />
    </div>

    <div class="page-container-section">
      <p>You can always change the sizes and stroke with of a spinner to suit your needs:</p>
      <code-example title="Sizes" :component="examples['progress-spinner-sizes']" />

      <api-item title="API - md-progress-spinner">
        <p>The following options can be applied to all progress spinners:</p>

        <api-table :headings="props.headings" :props="props.props" slot="props" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocProgressSpinner',
    mixins: [examples],
    data: () => ({
      props: {
        headings: ['Name', 'Description', 'Default'],
        props: [
          {
            name: 'md-mode',
            type: 'String',
            description: 'Set the mode the progress. See below the detailed description of each mode.',
            defaults: 'determinate'
          },
          {
            offset: true,
            name: 'md-mode="determinate"',
            type: 'String',
            description: 'The default mode. Works along with <code>md-value</code> prop. Apply a 0% to 100% loading spinner.',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-mode="indeterminate"',
            type: 'String',
            description: 'Create a indeterminate loading spinner',
            defaults: '-'
          },
          {
            name: 'md-value',
            type: 'Number',
            description: 'The current progress amount. From 0 to 100.',
            defaults: 'null'
          },
          {
            name: 'md-diameter',
            type: 'Number',
            description: 'The diameter of the spinner in px.',
            defaults: '60'
          },
          {
            name: 'md-stroke',
            type: 'Number',
            description: 'The stroke size.',
            defaults: '6'
          }
        ]
      }
    })
  }
</script>
