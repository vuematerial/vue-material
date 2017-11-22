<example src="./examples/LayoutHorizontalColumns.vue" />
<example src="./examples/LayoutHorizontalGutter.vue" />
<example src="./examples/LayoutHorizontalSizes.vue" />
<example src="./examples/LayoutHorizontalAlignment.vue" />
<example src="./examples/LayoutHorizontalResponsive.vue" />
<example src="./examples/LayoutHorizontalHide.vue" />
<example src="./examples/LayoutHorizontalReal.vue" />

<template>
  <page-container centered :title="$t('pages.layout.title')">
    <div class="page-container-section">
      <p>Responsive layouts in material design adapt to any possible screen size. This UI guidance includes a flexible grid that ensures consistency across layouts, breakpoint details about how content reflows on different screens, and a description of how an app can scale from small to extra-large screens.</p>
      <p>By default you can create gutter-free layouts or make the grid system calculate the best margin size for each screen size.</p>
      <p>The layout system use the concept of rows and columns. You can create sized columns or leave the system to make your layout fluid. You'll be able to set the size for each breakpoint, even on nested columns.</p>
    </div>

    <div class="page-container-section">
      <h2>Breakpoints</h2>
      <p>Vue Material layout uses some breakpoints:</p>
      <api-table :headings="breakpoints.props.headings" :props="breakpoints.props.props" slot="props" />
    </div>

    <div class="page-container-section">
      <h2>Column Layout</h2>

      <p>The layout system in Vue Material is essentially based on columns and makes use of flexbox to be flexible enough and give the best experience with a great and easy API.</p>
      <p>What you have to do to getting started with layouts is to create a <code>md-layout</code> parent element, that will hold a list of <code>md-layout-item</code>. You can set up as many columns you want:</p>
      <code-example title="Columns" :component="examples['layout-horizontal-columns']" />
    </div>

    <div class="page-container-section">
      <p>By default layout items do not have space between each other. This can be kind of bad for regular layouts, like a list of card, for example. You can set Vue Material to calculate automatically the space between elements and those spaces are based on the screen width, using the same breakpoints:</p>
      <api-table :headings="gutter.props.headings" :props="gutter.props.props" slot="props" />
      <p>Look at this pice of code and resize you browser to see the changes:</p>
      <code-example title="Gutter" :component="examples['layout-horizontal-gutter']" />
    </div>

    <div class="page-container-section">
      <p>In the last two examples the layout system calculated the size based on the amount of items. But if you want to set sizes for each item? You can simply set a <code>md-size-[amount]</code> in the item that you want, e.g. <code>md-size-30</code>. The sizes, that are always in %, can be values multiple of 5 and also accepts the values 33 and 66.</p>
      <p>You don't even need to set the size for all elements, as the flexbox model will calculate the size for the remaining items. Cool, uh?</p>
      <code-example title="Size" :component="examples['layout-horizontal-sizes']" />
    </div>

    <div class="page-container-section">
      <p>A layout system is not good enough if it is not responsive. In the last example you saw fluid layout sizes, but you can change them based on the breakpoint name, by just giving a different class for each breakpoint that you may want. The class is <code>md-[breakpoint]-size-[amount]</code> and works just like the last example. The layout engine of Vue Material will do the magic. Try to resize your browser:</p>
      <code-example title="Responsive" :component="examples['layout-horizontal-responsive']" />
    </div>

    <div class="page-container-section">
      <p>You can use layouts for almost anything on your app, even on the small parts. To help you with that you can have differents alignments per <code>md-layout</code>, combining horizontal and vertical alignments, using the <code>md-alignment-[horizontal]-[vertical]</code> class, e.g. <code>md-alignment-top-center</code>. The alignment works on the parent element and will affect its items positions:</p>
      <code-example title="Alignments" :component="examples['layout-horizontal-alignment']" />
    </div>

    <div class="page-container-section">
      <p>Although is not the best option, is quite common the need of hiding elements on smaller screen. You can do that using the <code>md-[breakpoint]-hide</code> classes:</p>
      <code-example title="Hide Elements" :component="examples['layout-horizontal-hide']" />
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Content',
    mixins: [examples],
    data: () => ({
      gutter: {
        props: {
          headings: ['Screen Size', 'Amount'],
          props: [
            {
              name: 'xsmall',
              value: '8px'
            },
            {
              name: 'small',
              value: '16px'
            },
            {
              name: 'medium',
              value: '24px'
            },
            {
              name: 'large',
              value: '48px'
            }
          ]
        }
      },
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
