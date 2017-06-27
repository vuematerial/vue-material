<example src="./examples/RegularToolbar.vue" />
<example src="./examples/ToolbarSizes.vue" />
<example src="./examples/ContentActions.vue" />

<template>
  <page-container centered :title="$t('pages.content.title')">
    <div class="page-container-section">
      <p>Toolbar actions appear above the view affected by their actions. They may constrain their width to accommodate material passing over them.</p>
    </div>

    <div class="page-container-section">
      <h2>Toolbars</h2>

      <code-example title="Regular Toolbars" :component="examples['regular-toolbar']" />

      <api-item title="API">
        <p>The following options can be applied to all buttons, even the FAB ones:</p>

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
      <p>As the Toolbars are mostly used to hold actions that affects the entire application, you can create rows or sections inside it.</p>
      <p>Although those rows works on every toolbar, they we're created to hold contents for large toolbars. This element is represented by the <code>.md-toolbar-row</code> class. A row can also have a <code>.md-toolbar-offset</code> to add a little space on the left of it. This is commonly used inside the second row of an large toolbar.</p>
      <p>The sections are used to split horizontally the content of the toolbar (or the row inside). You can apply them using two types of section: <code>.md-toolbar-section-start</code> will be left-aligned and <code>.md-toolbar-section-end</code> right-aligned.</p>

      <code-example title="Rows, Title and Icons" :component="examples['content-actions']" />
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Content',
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
                description: 'Set the toolbar shadow elevation',
                defaults: '4'
              }
            ]
          },
          classes: {
            headings: ['Name', 'Description'],
            props: [
              {
                name: 'md-transparent',
                description: 'Make the Toolbar background transparent'
              },
              {
                name: 'md-dense',
                description: 'Create a small sized toolbar'
              },
              {
                name: 'md-medium',
                description: 'Create a medium sized toolbar'
              },
              {
                name: 'md-large',
                description: 'Create a large sized toolbar'
              }
            ]
          }
        }
      }
    })
  }
</script>
