<example src="./examples/TypographyExample.vue" />

<template>
  <page-container centered :title="$t('pages.typography.title')">
    <div class="page-container-section">
      <h2>Typeface</h2>
      <p>Roboto has been refined extensively to work across the wider set of supported platforms. It is slightly wider and rounder, giving it greater clarity and making it more optimistic. Vue Material use Roboto by default, with Noto Sans as a fallback. To get up and running with Roboto font, just install it from <a href="https://fonts.google.com/specimen/Roboto" target="_blank">Google Fonts</a>. Or install it from the following snippet:</p>
      <code-example title="Roboto Font" label="HTML" lang="xml">
        &lt;link rel=&quot;stylesheet&quot; href=&quot;//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic&quot;&gt;
      </code-example>
    </div>

    <div class="page-container-section">
      <h2>Styles</h2>
      <p>Too many type sizes and styles at once can wreck any layout. A typographic scale has a limited set of type sizes that work well together along with the layout grid.</p>
      <p>The <a href="https://material.io/guidelines/style/typography.html#typography-styles" target="_blank">sizes and styles</a> balance content density and reading comfort under typical usage conditions. They are all based on simple classes that gives the styles and works fine with dark themes. Look:</p>
      <note-block>The <code>a</code> tag create a link style and is the only that is affected globally. It will be automatically themed using the accent color.</note-block>
    </div>

    <div class="page-container-section">
      <code-example title="Typography" :component="examples['typography-example']" />

      <api-item title="API">
        <p>The following classes can be applied to any HTML element:</p>

        <api-table :headings="classes.headings" :props="classes.props" slot="classes" />
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Typography',
    mixins: [examples],
    data: () => ({
      classes: {
        headings: ['Name', 'Description'],
        props: [
          {
            name: 'md-display-4',
            description: 'Create the biggest display text'
          },
          {
            name: 'md-display-3',
            description: 'Create the second biggest display text'
          },
          {
            name: 'md-display-2',
            description: 'Create the third biggest display text'
          },
          {
            name: 'md-display-1',
            description: 'Create the forth biggest display text'
          },
          {
            name: 'md-headline',
            description: 'Create a headline text, that is bigger than a title'
          },
          {
            name: 'md-title',
            description: 'Create the regular title. Commonly used inside toolbars'
          },
          {
            name: 'md-subheading',
            description: 'Create a subtitle like element'
          },
          {
            name: 'md-body-2',
            description: 'Create a medium weight variation of body text'
          },
          {
            name: 'md-body-1',
            description: 'Create a regular text. This has the same effect as the body text'
          },
          {
            name: 'md-caption',
            description: 'Create a caption text. This has the same effect as the <small> tag'
          }
        ]
      }
    })
  }
</script>
