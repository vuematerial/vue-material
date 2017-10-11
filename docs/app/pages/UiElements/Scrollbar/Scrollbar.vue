<example src="./examples/ScrollbarExample.vue" />

<template>
  <page-container centered :title="$t('pages.scrollbar.title')">
    <div class="page-container-section">
      <p>Scrollbars show the track on how much a content has been reviewed. This is an standard on every single device out there.</p>
      <p>To enable the Material scrollbar styles, just add the <code>md-scrollbar</code> class to the scrollable component that you want. If you want this effect in the whole page, you can put the class in the <code>html</code> tag.</p>

      <note-block alert>The scrollbars <strong>only</strong> works on <code>html</code> tag and on Vue Material components, like <code>md-content</code> or <code>md-drawer</code>. Due to CSS limitations, the style will be applied only on Webkit/Blink browsers (Chrome, Safari and Opera).</note-block>
    </div>

    <div class="page-container-section">
      <code-example title="Scrollbar" :component="examples['scrollbar-example']" />
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Scrollbar',
    mixins: [examples]
  }
</script>
