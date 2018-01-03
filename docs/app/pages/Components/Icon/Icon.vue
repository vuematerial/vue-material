<example src="./examples/MaterialIcons.vue" />
<example src="./examples/FontAwesome.vue" />
<example src="./examples/SvgAssets.vue" />

<template>
  <page-container centered :title="$t('pages.icon.title')">
    <div class="page-container-section">
      <p>Material icons uses geometric shapes to visually represent core ideas, capabilities, or topics. They are generally used along with the <a href="https://material.io/icons/" target="_blank">Material icons</a>, but not restricted to. Icons can use icon fonts or external SVGs. Also, can accept some size dimensions, like <strong>2x</strong>, <strong>3x</strong>, <strong>4x</strong> and <strong>5x</strong>.</p>
    </div>

    <div class="page-container-section">
      <h2>Material Icon Font</h2>
      <p>By default the <code>md-icon</code> will assume that you are using the Material Icons Font. You have to pass the name of the icon with underscore instead of spaces. For example: <code>&#x3C;md-icon&#x3E;thumb_up&#x3C;/md-icon&#x3E;</code>.</p>

      <code-example title="Material Icons" :component="examples['material-icons']" />

      <api-item title="API - md-icon">
        <p>The following options can be applied to all icons:</p>

        <api-table :headings="api.material.classes.headings" :props="api.material.classes.props" slot="classes" />
        <api-table :headings="api.material.events.headings" :props="api.material.events.props" slot="events" />
      </api-item>
    </div>

    <div class="page-container-section">
      <h2>Custom Fonts</h2>
      <p>Alternatevely you can load any custom fonts to be used with <code>md-icon</code>, like <a href="http://fontawesome.io/" target="_blank">Font Awesome</a> for example. Just use the Font Awesome (or any other) classes.</p>

      <code-example title="Font Awesome" :component="examples['font-awesome']" />
    </div>

    <div class="page-container-section">
      <h2>SVG Source</h2>
      <p>When loading an icon font, you will be able to use ALL of it's icons. This may hurts the performance of your application. Instead, you can use only the icons that you really need, loading them using svg.</p>

      <code-example title="SVG Assets" :component="examples['svg-assets']" />

      <api-item title="API">
        <p>The following option is specifically for svg icons:</p>

        <api-table :headings="api.svg.props.headings" :props="api.svg.props.props" slot="props" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'DocIcon',
  mixins: [examples],
  data: () => ({
    api: {
      material: {
        classes: {
          headings: ['Name', 'Description', 'Example'],
          props: [
            {
              name: 'md-size-[dimension]',
              description: 'Increases the size of the icon. It accepts 2x, 3x, 4x or 5x',
              example: 'md-size-3x'
            }
          ]
        },
        events: {
          headings: ['Name', 'Description', 'Value'],
          props: [
            {
              name: 'md-loaded',
              description: 'Triggered right after fetch of the SVG icon',
              example: 'null'
            }
          ]
        }
      },
      svg: {
        props: {
          headings: ['Name', 'Description', 'Default'],
          props: [
            {
              name: 'md-src',
              description: 'The source of the svg icon. Note that for icons on external domais, cors may affect it\'s functionality.',
              defaults: 'null'
            }
          ]
        }
      }
    }
  })
}
</script>
