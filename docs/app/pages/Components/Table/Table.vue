<example src="./examples/TableBasic.vue" />
<example src="./examples/TableSort.vue" />
<example src="./examples/TableFixed.vue" />
<example src="./examples/TableSingle.vue" />
<example src="./examples/TableMultiple.vue" />
<example src="./examples/TablePagination.vue" />
<example src="./examples/Example.vue" />

<template>
  <page-container centered :title="$t('pages.table.title')">
    <div class="page-container-section">
      <p>Lorem ipsum</p>
    </div>

    <div class="page-container-section">
      <h2>Table</h2>

      <code-example title="Basic Table" :component="examples['table-basic']" />
      <code-example title="Sort with table within a card" :component="examples['table-sort']" />
      <code-example title="Fixed headers and empty state" :component="examples['table-fixed']" />
      <code-example title="Single Selection" :component="examples['table-single']" />
      <code-example title="Multiple Selection" :component="examples['table-multiple']" />
      <code-example title="Pagination" :component="examples['table-pagination']" />
      <code-example title="Example" :component="examples['example']" />

      <api-item title="API - md-table">
        <p>This component does not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Table',
    mixins: [examples]
  }
</script>
