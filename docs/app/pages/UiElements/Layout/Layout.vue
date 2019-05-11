<example src="./examples/LayoutHorizontalColumns.vue" />
<example src="./examples/LayoutHorizontalGutter.vue" />
<example src="./examples/LayoutHorizontalSizes.vue" />
<example src="./examples/LayoutHorizontalAlignment.vue" />
<example src="./examples/LayoutHorizontalResponsive.vue" />
<example src="./examples/LayoutHorizontalHide.vue" />
<example src="./examples/LayoutHorizontalNested.vue" />

<template>
  <page-container centered :title="$t('pages.layout.title')">
    <div class="page-container-section">
      <p>Responsive layouts in material design adapt to any possible screen size. This UI guidance includes a flexible grid that ensures consistency across layouts, breakpoints that detail about how the contents reflow on different screens and a description of how an app can scale from small to extra-large screens.</p>
      <p>By default you can create gutter-free layouts or make the grid system itself calculate the best margin size for each of your possible screen sizes.</p>
      <p>The layout system use the concept of rows and columns. You can create custom sized columns or leave the system to make your layout fluid. You'll be able to set the size for each breakpoint, even on nested columns.</p>
    </div>

    <div class="page-container-section">
      <h2>Breakpoints</h2>
      <p>Vue Material layout uses breakpoints for responsiveness:</p>
      <api-table :headings="breakpoints.props.headings" :props="breakpoints.props.props" slot="props" />
    </div>

    <div class="page-container-section">
      <h2>Column Layout</h2>

      <p>The layout system in Vue Material is essentially based on columns and makes use of the flexbox to be flexible enough and thereby gives you the best experience with a great and easy API.</p>
      <p>What you have to do to get started with layouts is to create a <code>md-layout</code> parent element, that will hold a list of <code>md-layout-item</code>. You can set up as many columns as you want using <code>md-layout-item</code>:</p>
      <code-example title="Columns" :component="examples['layout-horizontal-columns']" />
    </div>

    <div class="page-container-section">
      <p>By default layout items do not have space between each other. Regular layouts would rather prefer to have spaces between the layout items, like a list of card, for example. You can set Vue Material to calculate automatically the space between elements and these spaces are based on the screen width, using the breakpoints:</p>
      <api-table :headings="gutter.props.headings" :props="gutter.props.props" slot="props" />
      <p>Look at this piece of code and resize your browser to see the changes:</p>
      <code-example title="Gutter" :component="examples['layout-horizontal-gutter']" />
    </div>

    <div class="page-container-section">
      <p>Layout columns also work with nested layouts:</p>
      <code-example title="Nested columns" :component="examples['layout-horizontal-nested']" />
    </div>

    <div class="page-container-section">
      <p>You can use layouts for almost anything in your app, even for small parts. To help you with that you can have different alignments for <code>md-layout</code> with various combinations of horizontal and vertical alignments to the <code>md-alignment-[horizontal]-[vertical]</code> class, e.g. <code>md-alignment-top-center</code>. The alignment works on the parent element and it will change the position of all the child items:</p>
      <code-example title="Alignments" :component="examples['layout-horizontal-alignment']" />
    </div>

    <div class="page-container-section">
      <p>In the previous examples the layout system did the calculation of the size of the child items based on the no. of items. But if you want to set size for each item, you can simply set the class, <code>md-size-[amount]</code>, to the item that you want, e.g. <code>md-size-30</code>. The size are always in % and the values can be multiple of 5 and also accepts the values 33 and 66.</p>
      <p>You don't even need to set the size for all elements, as the flexbox model will calculate the size for the remaining items. Cool, uh?</p>
      <code-example title="Size" :component="examples['layout-horizontal-sizes']" />
    </div>

    <div class="page-container-section">
      <p>A layout system is not good enough if it is not responsive. In the last example you saw fluid layout sizes, but you can change them based on the breakpoint name, by just giving a different class for each breakpoint that you may want. The class is <code>md-[breakpoint]-size-[amount]</code> and works just like the last example. The layout engine of Vue Material will do the magic. Try to resize your browser:</p>
      <code-example title="Responsive" :component="examples['layout-horizontal-responsive']" />
    </div>

    <div class="page-container-section">
      <p>Although this is not the best option, it is quite common to hide elements on smaller screen. You can do that using the <code>md-[breakpoint]-hide</code> classes:</p>
      <code-example title="Hide Elements" :component="examples['layout-horizontal-hide']" />
    </div>

    <api-item title="API - md-layout">
      <p>The following classes can be applied to any HTML Element:</p>

      <api-table :headings="layout.headings" :props="layout.props" slot="classes" />
    </api-item>

    <api-item title="API - md-layout-item">
      <p>The following classes can be applied to any HTML Element that are direct children of <code>md-layout</code>:</p>

      <api-table :headings="item.headings" :props="item.props" slot="classes" />
    </api-item>

    <api-item title="API - md-hide">
      <p>The following classes can be applied to any HTML Element:</p>

      <api-table :headings="hide.headings" :props="hide.props" slot="classes" />
    </api-item>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Layout',
    mixins: [examples],
    data: () => ({
      breakpoints: {
        props: {
          headings: ['Name', 'Size', 'Description'],
          props: [
            {
              name: 'xsmall',
              description: 'Applicable to screens that are maximum 599px wide. For small, medium and large handsets in portrait. Also applies to small tablets in portrait.',
              value: '<599px'
            },
            {
              name: 'small',
              description: 'Applicable to screens that are between 600px and 959px wide. For medium and large handsets in landscape. For small and large tablets in portrait mode and for some desktop monitors.',
              value: '959px'
            },
            {
              name: 'medium',
              description: 'Applicable to screens that are between 960px and 1279px wide. For small and large tablets in landscape and desktop monitors.',
              value: '1279px'
            },
            {
              name: 'large',
              description: 'Applicable to screens that are between 1280px and 1919px wide. For large desktop monitors.',
              value: '1919px'
            },
            {
              name: 'xlarge',
              description: 'Applicable to screens wider than 1920px. For huge desktop monitors or side-by-side screens.',
              value: '>1920px'
            }
          ]
        }
      },
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
      layout: {
        headings: ['Name', 'Description'],
        props: [
          {
            name: 'md-gutter',
            description: 'Enable the automatic gutter space between layout items.'
          },
          {
            name: 'md-layout-nowrap',
            description: 'By default the layout items will always be wrapped under the parent layout. Use this class if you want to disable this behaviour, but the responsiveness will not work.'
          },
          {
            name: 'md-alignment-<code>[x]</code>-<code>[y]</code>',
            description: `Sets the alignment of all children based on a value per coordinate. The alignment only works if both x and y are present e.g. <code>md-alignment-top-center</code>. The possible values are: <br>
              <ul>
                <li>top</li>
                <li>center</li>
                <li>left</li>
                <li>space-around</li>
                <li>space-between</li>
              </ul>
            `
          }
        ]
      },
      item: {
        headings: ['Name', 'Description'],
        props: [
          {
            name: 'md-size-<code>[amount]</code>',
            description: 'Sets a size to a particular item. The value can be multiples of 5, e.g. <code>md-size-25</code>. Also accepts 33, 66 and 100 for easy prototyping.'
          },
          {
            name: `md-<code>[breakpoint]</code>-size-<code>[amount]</code>',
            description: 'Sets a size to a particular item for a particular breakpoint. The breakpoints follow the <a href="https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints" target="_blank">Material Design guidelines</a> for layout. The possible values are:
              <ul>
                <li>xsmall</li>
                <li>small</li>
                <li>medium</li>
                <li>large</li>
                <li>xlarge</li>
              </ul>
            `
          }
        ]
      },
      hide: {
        headings: ['Name', 'Description'],
        props: [
          {
            name: 'md-<code>[breakpoint]</code>-hide',
            description: `Hides a particular element for a particular breakpoint. The breakpoints follow the <a href="https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints" target="_blank">Material Design guidelines</a> for layout. The possible values are:
              <ul>
                <li>xsmall</li>
                <li>small</li>
                <li>medium</li>
                <li>large</li>
                <li>xlarge</li>
              </ul>
            `
          }
        ]
      }
    })
  }
</script>
