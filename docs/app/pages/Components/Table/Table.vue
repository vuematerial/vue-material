<example src="./examples/TableBasic.vue" />
<example src="./examples/TableCard.vue" />
<example src="./examples/TableTemplate.vue" />
<example src="./examples/TableSort.vue" />
<example src="./examples/TableCustomSort.vue" />
<example src="./examples/TableFixed.vue" />
<example src="./examples/TableSearch.vue" />
<example src="./examples/TableSingle.vue" />
<example src="./examples/TableMultiple.vue" />
<example src="./examples/TablePagination.vue" />
<example src="./examples/TablePaginationRemote.vue" />

<template>
  <page-container centered :title="$t('pages.table.title')">
    <div class="page-container-section">
      <p>Data tables display sets of raw data. They usually appear in desktop enterprise products. They have more features than any other component in the Vue Material ecosystem. There are a lot of options that you can tweak to change and impact the table layout.</p>
      <note-block warning>This component is still WIP. Right now you can use the core basic stuff, but soon we will release <strong>Pagination</strong>, <strong>Internal search</strong> and <strong>Edit options</strong>. The current API will not change during the beta phase (likely).</note-block>
    </div>

    <div class="page-container-section">
      <h2 id="simple-table">Simple tables</h2>

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
      <h2 id="advanced-table">Advanced tables</h2>

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
      <h2 id="selection">Selection</h2>

      <p>When dealing with large data sets, you may want to have quick actions over our data, like whether to remove or make some bulk change. Tables have inner selection in two ways: Single and Multiple.</p>
      <p>The single selection is really great to highlight a particular item. Maybe, by clicking on a table row, will show the details of the item. With single selections you'll have access to the selected item and the table will do the rest. You can use the primary and accent hue colors to give more appealing highlight colors:</p>
      <code-example title="Single" :component="examples['table-single']" />
    </div>

    <div class="page-container-section">
      <p>Multiple selections great for bulk changes and you can use the alternate header to hold the options that you can call when there are options selected. Note that if you click on the checkbox or on the entire row, it will do the same action due to <code>md-auto-select</code> option. Really handy:</p>
      <code-example title="Multiple" :component="examples['table-multiple']" />
    </div>

    <div class="page-container-section">
      <p>The table pagination will create the mechanism to show contents through pages.</p>
      <code-example title="Pagination" :component="examples['table-pagination']" />

      <p>Here's an example of a table controlled remotely through ajax.</p>
      <code-example title="Remote pagination" :component="examples['table-pagination-remote']" />

      <api-item title="API - md-table">
        <p>The following options can be applied to the md-table component:</p>
        <api-table :headings="table.props.headings" :props="table.props.props" slot="props" />
        <api-table :headings="table.events.headings" :props="table.events.props" slot="events" />
      </api-item>

      <api-item title="API - md-table-head &amp; md-table-cell">
        <p>The following options can be applied to the head and cell components:</p>
        <api-table :headings="cell.props.headings" :props="cell.props.props" slot="props" />
        <api-table :headings="cell.events.headings" :props="cell.events.props" slot="events" />
      </api-item>

      <api-item title="API - md-table-pagination">
        <p>The following options can be applied to the pagination component:</p>
        <api-table :headings="pagination.props.headings" :props="pagination.props.props" slot="props" />
      </api-item>

    </div>

  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'DocTable',
    mixins: [examples],
    data: () => ({
      table: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'v-model',
            type: 'Array',
            description: 'The model variable to bind the input prompt value',
            defaults: '[]'
          }, {
            name: 'md-model-id',
            type: 'String',
            description: 'Object property in the `v-model` array to use as :key',
            defaults: 'id'
          }, {
            name: 'md-card',
            type: 'Boolean',
            description: 'Renders table as Card',
            defaults: 'false'
          }, {
            name: 'md-sort',
            type: 'String',
            description: 'Lets you define a column to sort your data with',
            defaults: 'null'
          }, {
            name: 'md-sort-order',
            type: 'String',
            description: 'Sort order',
            defaults: 'asc'
          }, {
            name: 'md-sort-fn',
            type: 'Function',
            description: 'Custom sorting function',
            defaults: 'String or Numeric sort depending on the column data'
          }, {
            name: 'md-height',
            type: 'Number|String',
            description: 'Sets the table height',
            defaults: '400'
          }, {
            name: 'md-selected-value',
            type: 'Array|Object',
            description: 'Lets you provide a selected value. Eg. <pre>:md-selected-value.sync="selectedValue"</pre>',
            defaults: 'null'
          }],
        },
        events: {
          headings: ['Name', 'Description', 'Default'],
          props: [],
        },
      },
      cell: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-id',
            type: 'String|Number',
            description: 'You can define an id for the cell',
            defaults: 'null'
          }, {
            name: 'md-label',
            type: 'String',
            description: 'Specifies the cell’s header',
            defaults: 'null'
          }, {
            name: 'md-numeric',
            type: 'Boolean',
            description: 'Aligns text to right',
            defaults: 'false'
          }, {
            name: 'md-tooltip',
            type: 'String',
            description: 'Specify a tooltip',
            defaults: 'null'
          }, {
            name: 'md-sort-by',
            type: 'String',
            description: '&nbsp;',
            defaults: 'null'
          }],
        },
        events: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-selected',
            description: 'Triggered when the user selects one or more items',
            value: 'Selected item or items'
          }],
        },
      },
      pagination: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [{
            name: 'md-page-size',
            type: 'Number',
            description: 'Selected page size',
            defaults: '10',
          }, {
            name: 'md-page-options',
            type: 'Array',
            description: 'Number of items per page available',
            defaults: '[5, 10, 25, 50, 100]',
          }, {
            name: 'md-update',
            type: 'Function',
            description: 'Provides an update of the current pagination status: page, pageSize, sort, sortOrder. If this function returns false it won’t update the component',
            defaults: 'An empty function which returns true'
          }, {
            name: 'md-paginated-data',
            type: 'Array',
            description: 'Used in front end pagination, provides the paginated list of items. Please use as <pre>:md-paginated-data.sync="paginatedData"</pre>',
            defaults: 'null',
          }, {
            name: 'md-data',
            type: 'Array|Object',
            description: 'If you need remote pagination please provide a structure like the following <pre>{\n  mdCount: null,\n  mdPage: null,\n  mdData: []\n}</pre> Otherwise, if you need local pagination just provide the full list of unpaginated data: <pre>[{...}, {...}, ...]</pre>',
            defaults: 'null',
          }],
        },
      },
    }),
  }
</script>
