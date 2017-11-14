<template>
  <page-container centered :title="$t('pages.layout.title')">
    <!-- <div class="page-container-section">
      <p>Responsive layouts in material design adapt to any possible screen size. This UI guidance includes a flexible grid that ensures consistency across layouts, breakpoint details about how content reflows on different screens, and a description of how an app can scale from small to extra-large screens.</p>
      <p>By default you can create gutter-free layouts or make the grid system calculate the best margin size for each screen size. If you want the automatic calculation the engine will set <code>16px</code> for small screens, <code>24px</code> for medium and <code>40px</code> large.</p>
      <p>The layout system use the concept of rows and columns. You can create sized columns or leave the system to make your layout fluid. You'll be able to set the size for each breakpoint, even on nested columns.</p>
      <p>This system makes use of flexbox to be flexible enough and give the best experience with a great and easy API. There are the breakpoints:</p>
    </div>

    <div class="page-container-section">
      <api-table :headings="breakpoints.props.headings" :props="breakpoints.props.props" slot="props" />
    </div> -->
    Coming soon
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
