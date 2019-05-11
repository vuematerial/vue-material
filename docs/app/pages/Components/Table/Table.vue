<example src="./examples/TableBasic.vue" />
<example src="./examples/TableCard.vue" />
<example src="./examples/TableTemplate.vue" />
<example src="./examples/TableSort.vue" />
<example src="./examples/TableCustomSort.vue" />
<example src="./examples/TableFixed.vue" />
<example src="./examples/TableSearch.vue" />
<example src="./examples/TableSingle.vue" />
<example src="./examples/TableMultiple.vue" />
<example src="./examples/TablePaginationSoon.vue" />

<template>
  <page-container centered :title="$t('pages.table.title')">
    <div class="page-container-section">
      <p>Data tables display sets of raw data. They usually appear in desktop enterprise products. They are the component that have more features in all Vue Material ecosystem. There are a lot of options that you can tweak to change and impact the table layout.</p>
      <note-block warning>This component is still WIP. Right now you can use the core basic stuff, but soon we will release <strong>Pagination</strong>, <strong>Internal search</strong> and <strong>Edit options</strong>. The current API will not change during the beta phase (likely).</note-block>
    </div>

    <div class="page-container-section">
      <h2>Simple tables</h2>

      <p>To create a basic table, with simple data and without any advanced options, you have a really simple markup to use.</p>
      <p>There are some components that mimic the native table elements:</p>
      <ul>
        <li>
          <code>md-table</code> => <code>table</code>
        </li>

        <li>
          <code>md-table-row</code> => <code>tr</code>
        </li>

        <li>
          <code>md-table-head</code> => <code>th</code>
        </li>

        <li>
          <code>md-table-cell</code> => <code>td</code>
        </li>
      </ul>
    </div>

    <div class="page-container-section">
      <code-example title="Basic Table" :component="examples['table-basic']" />
    </div>

    <div class="page-container-section">
      <p>In pages that only have a table, you can put this table within a card. Fortunately Vue Material provides an option out of the box to add a table card without any effort:</p>
      <code-example title="Table within a card" :component="examples['table-card']" />
    </div>

    <div class="page-container-section">
      <h2>Advanced tables</h2>

      <note-block alert>This section will assume that you have knowledge of <a href="https://vuejs.org/v2/guide/components.html#Scoped-Slots" target="_blank">Vue Scoped Slots</a>. You'll need them to create advanced tables.</note-block>

      <p>Vue Material have advanced tables that can handle with your data, sorting, selecting and manipulating it. You can pass a <code>v-model</code> with you data and tweak the table to suit your needs. Along with that, you should give to data table a custom template. This will allow the table to have its own markup and display all rows for you. This is really powerfull!</p>
      <p>There are plenty of options for you to make your data table awesome, so carefully read this documentation, analyze the code examples with full attention and take a deeper look at the API section.</p>

      <p>Let's start with a <strong>custom template</strong> feature:</p>
      <p>When you provide a model along with a custom template, the data table will render the whole Array of options for you, without the need of a <code>v-for</code>, for example:</p>
      <code-example title="Custom template" :component="examples['table-template']" />
    </div>

    <div class="page-container-section">
      <p>With a custom template, a model and some other properties, you can have automatic sort:</p>
      <code-example title="Sort" :component="examples['table-sort']" />
    </div>

    <div class="page-container-section">
      <p>Sometimes the internal sort from Vue Material will not be enough for you. You can provide your own sort function:</p>
      <code-example title="Custom Sort function" :component="examples['table-custom-sort']" />
    </div>

    <div class="page-container-section">
      <p><strong>With large datasets comes great responsibility</strong>... with your user. We know that Vue Material tables have a great layout, but we need to care about the usability of your screens. Fixed headers will make it easier to interact with the table by keeping all options always visible:</p>
      <code-example title="Fixed headers" :component="examples['table-fixed']" />
    </div>

    <div class="page-container-section">
      <p>It's easy to integrate a search functionality on tables. You only need to change the model that you share with your table. You can also use the <code>md-table-empty-state</code> component to show an empty state when the search returns zero items:</p>
      <code-example title="Search and empty state" :component="examples['table-search']" />
    </div>

    <div class="page-container-section">
      <h2>Selection</h2>

      <p>When dealing with large data sets, you may want to have quick actions over our data, like whether to remove or make some bulk change. Tables have inner selection in two ways: Single and Multiple.</p>
      <p>The single selection is really great to highlight a particular item. Maybe, by clicking on a table row, will show the details of the item. With single selections you'll have access to the selected item and the table will do the rest. You can use the primary and accent hue colors to give more appealing highlight colors:</p>
      <code-example title="Single" :component="examples['table-single']" />
    </div>

    <div class="page-container-section">
      <p>Multiple selections great for bulk changes and you can use the alternate header to hold the options that you can call when there are options selected. Note that if you click on the checkbox or on the entire row, it will do the same action due to <code>md-auto-select</code> option. Really handy:</p>
      <code-example title="Multiple" :component="examples['table-multiple']" />
    </div>

    <div class="page-container-section">
      <p>The table pagination will create the mechanism to show contents through pages. This component will be available soon. :)</p>
      <code-example title="Pagination" :component="examples['table-pagination-soon']" />

      <api-item title="API - md-table">
        <p>Coming soon...</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocTable',
    mixins: [examples]
  }
</script>
