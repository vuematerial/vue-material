<example src="./examples/ProgressBarIndeterminate.vue" />
<example src="./examples/ProgressBarDeterminate.vue" />
<example src="./examples/ProgressBarBuffer.vue" />
<example src="./examples/ProgressBarQuery.vue" />

<template>
  <page-container centered :title="$t('pages.progressBar.title')">
    <div class="page-container-section">
      <p>Progress indicators are visual indications of an app loading content.</p>
      <p>Progress bars have 4 types for each operation that your application may need: Determinate, Indeterminate, Query or Buffer.</p>
    </div>

    <div class="page-container-section">
      <h2>Progress Bar</h2>

      <p>When indicators are determinate they indicate how long an operation will take when the percentage complete is detectable.</p>
      <code-example title="Determinate" :component="examples['progress-bar-determinate']" />
    </div>

    <div class="page-container-section">
      <p>When indicators are indeterminate they request that the user wait while something finishes when it’s not necessary to indicate how long it will take.</p>
      <code-example title="Indeterminate" :component="examples['progress-bar-indeterminate']" />
    </div>

    <div class="page-container-section">
      <p>When dealing with media content like streaming videos we can use progress bars to show the buffering progress indicator on a video.</p>
      <code-example title="Buffer" :component="examples['progress-bar-buffer']" />
    </div>

    <div class="page-container-section">
      <p>When searching or filtering a large amount of data, we can show a query progress bar. This will tell the user that some content is being retrieved.</p>
      <code-example title="Query" :component="examples['progress-bar-query']" />

      <api-item title="API - md-progress-bar">
        <p>The following options can be applied to all progress bars:</p>

        <api-table :headings="props.headings" :props="props.props" slot="props" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocProgressBar',
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
            description: 'The default mode. Works along with <code>md-value</code> prop. Apply a 0% to 100% loading bar.',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-mode="indeterminate"',
            type: 'String',
            description: 'Create a indeterminate loading bar',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-mode="query"',
            type: 'String',
            description: 'Create a loading bar for queries. Useful when retrieving a lot of contents.',
            defaults: '-'
          },
          {
            offset: true,
            name: 'md-mode="buffer"',
            type: 'String',
            description: 'Create a loading bar with a buffer. Commonly used in videos.',
            defaults: '-'
          },
          {
            name: 'md-value',
            type: 'Number',
            description: 'The current progress amount. From 0 to 100.',
            defaults: 'null'
          },
          {
            name: 'md-buffer',
            type: 'Number',
            description: 'The current buffer amount. From 0 to 100.',
            defaults: 'null'
          }
        ]
      }
    })
  }
</script>
