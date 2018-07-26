<example src="./examples/ElevationExample.vue" />

<template>
  <page-container centered :title="$t('pages.elevation.title')">
    <div class="page-container-section">
      <p>Measured from the front of one surface to the front of another, an element’s elevation indicates the distance between surfaces and the depth of its shadow.</p>
      <p>Elevation classes range from 1px to 24px in depth. You can add this class to any HTML tag.</p>
    </div>

    <div class="page-container-section">
      <code-example title="Elevation" :component="examples['elevation-example']" />
      <api-item title="API - md-elevation">
        <p>The following classes can be applied to any HTML element:</p>

        <api-table :headings="classes.headings" :props="classes.props" slot="classes" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Elevation',
    mixins: [examples],
    data: () => ({
      classes: {
        headings: ['Name', 'Description'],
        props: [
          {
            name: 'md-elevation-[size]',
            description: 'Add an elevation to the target element. The size can be 1 to 24. Ex.: <code>md-elevation-4</code>'
          }
        ]
      }
    })
  }
</script>
