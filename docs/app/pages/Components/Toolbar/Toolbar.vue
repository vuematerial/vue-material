<example src="./examples/RegularToolbar.vue" />
<example src="./examples/ToolbarSizes.vue" />
<example src="./examples/ContentActions.vue" />

<template>
  <page-container centered :title="$t('pages.toolbar.title')">
    <div class="page-container-section">
      <p>Toolbar actions appear above the view affected by their actions. They may constrain their width to accommodate material passing over them.</p>
    </div>

    <div class="page-container-section">
      <h2>Toolbars</h2>

      <p>Toolbars adjusts its height dimensions based on the screen width to best fit the visible area on small devices. Try to resize your browser to see the difference:</p>

      <code-example title="Regular Toolbars" :component="examples['regular-toolbar']" />

      <api-item title="API - md-toolbar">
        <p>The following options can be applied to all toolbars:</p>

        <api-table :headings="api.regular.classes.headings" :props="api.regular.classes.props" slot="classes" />
        <api-table :headings="api.regular.props.headings" :props="api.regular.props.props" slot="props" />
      </api-item>
    </div>

    <div class="page-container-section">
      <h2>Different Sizes</h2>

      <code-example title="Sizes" :component="examples['toolbar-sizes']" />
    </div>

    <div class="page-container-section">
      <h2>Content and Actions</h2>
      <p>As the Toolbars are mostly used to hold actions that affects the entire application, you can create rows or sections inside of it.</p>
      <p>Although those rows works on every toolbar, they were created to separate contents for large toolbars. This element is represented by the <code>md-toolbar-row</code> class. A row can also have a <code>md-toolbar-offset</code> to add a little space on the left of it. This is commonly used inside the second row of an large toolbar.</p>
      <p>The sections are used to split the content of the toolbar horizontally (or the row inside). You can apply them using two types of section: <code>md-toolbar-section-start</code> will be left-aligned and <code>md-toolbar-section-end</code> right-aligned.</p>

      <code-example title="Rows, Title and Icons" :component="examples['content-actions']" />

      <api-item title="Elements">
        <p>The following classes creates parts of a toolbar:</p>

        <api-table :headings="api.elements.classes.headings" :props="api.elements.classes.props" slot="classes" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'DocToolbar',
  mixins: [examples],
  data: () => ({
    api: {
      regular: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-elevation',
              type: 'String|Number',
              description: 'Sets the toolbar shadow elevation',
              defaults: '4'
            }
          ]
        },
        classes: {
          headings: ['Name', 'Description'],
          props: [
            {
              name: 'md-transparent',
              description: 'Makes the Toolbar background transparent'
            },
            {
              name: 'md-dense',
              description: 'Creates a small sized toolbar'
            },
            {
              name: 'md-medium',
              description: 'Creates a medium sized toolbar'
            },
            {
              name: 'md-large',
              description: 'Creates a large sized toolbar'
            }
          ]
        }
      },
      elements: {
        classes: {
          headings: ['Name', 'Description'],
          props: [
            {
              name: 'md-toolbar-row',
              description: 'Creates a toolbar row, commonly used on large toolbars'
            },
            {
              name: 'md-toolbar-offset',
              description: 'Adds an left offset to any toolbar row. Only works in md-toolbar-row'
            },
            {
              name: 'md-toolbar-section-start',
              description: 'Creates a section on the left of a toolbar or toolbar row. Commonly used to hold the application menu button and the title'
            },
            {
              name: 'md-toolbar-section-end',
              description: 'Creates a section on the right of a toolbar or toolbar row. Commonly used to hold the main action of a toolbar, such as overflow buttons'
            },
            {
              name: 'md-title',
              description: 'Will create the toolbar title. Works inside or outside a toolbar row'
            }
          ]
        }
      }
    }
  })
}
</script>
