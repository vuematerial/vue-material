<template>
  <page-container centered :title="$t('pages.layout.title')">
    <div class="page-container-section">
      <p>Responsive layouts in material design adapt to any possible screen size. This UI guidance includes a flexible grid that ensures consistency across layouts, breakpoint details about how content reflows on different screens, and a description of how an app can scale from small to extra-large screens.</p>
      <p>By default you can create gutter-free layouts, make the grid system calculate the best margin size for each screen or set it by yourself with the md-gutter property. If you want the automatic calculation the engine will set 16px for small screens and then apply 24px for medium to large.</p>
      <p>You can create columns size by size or rows to make your layout fluid. You can combine columns with rows or even use nested columns.</p>
      <p>The grid system makes use of flexbox to be flexible enough and give the best experience with a great and easy API. You can create responsive layouts with few lines of code with a declarative engine. The system work with some breakpoints:</p>
    </div>

    <div class="page-container-section">
      <api-table :headings="breakpoints.props.headings" :props="breakpoints.props.props" slot="props" />
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Content',
    mixins: [examples],
    data: () => ({
      breakpoints: {
        props: {
          headings: ['Name', 'Size', 'Description'],
          props: [
            {
              name: 'xsmall',
              description: 'For screens who have the maximum of 600px wide. For small, medium and large handsets in portrait. Also applies to small tablets in portrait.',
              value: '<600px'
            },
            {
              name: 'small',
              description: 'For screens who have between of 600px and 960px wide. For medium and large handsets in landscape, small and large tablets in portrait mode and some desktop monitors.',
              value: '960px'
            },
            {
              name: 'medium',
              description: 'For screens who have between of 960px and 1280px wide. For small and large tablets in landscape and desktop monitors.',
              value: '1280px'
            },
            {
              name: 'large',
              description: 'For screens who have between of 1280px and 1920px wide. For large desktop monitors.',
              value: '1920px'
            },
            {
              name: 'xlarge',
              description: 'For screens bigger than 1920px wide. For huge desktop monitors or side-by-side screens.',
              value: '>1920px'
            }
          ]
        }
      }
    })
  }
</script>
