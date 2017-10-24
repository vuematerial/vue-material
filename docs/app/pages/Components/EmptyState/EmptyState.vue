<example src="./examples/BasicEmptyState.vue" />
<example src="./examples/RoundedEmptyState.vue" />

<template>
  <page-container centered :title="$t('pages.emptyState.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>Empty State</h2>

      <code-example title="Basic Empty State" :component="examples['basic-empty-state']" />
      <code-example title="Rounded" :component="examples['rounded-empty-state']" />

      <api-item title="API - md-empty-state">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'EmptyState',
    mixins: [examples]
  }
</script>
