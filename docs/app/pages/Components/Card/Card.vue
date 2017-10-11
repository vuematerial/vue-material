<example src="./examples/RegularCards.vue" />
<example src="./examples/ThemeColors.vue" />
<example src="./examples/Media.vue" />
<example src="./examples/MediaCover.vue" />
<example src="./examples/Layouts.vue" />
<example src="./examples/CardExpansion.vue" />

<template>
  <page-container centered :title="$t('pages.card.title')">
    <div class="page-container-section">
      <p>The content surfaces that comprise applications are referred to in this spec as material, or sheets of material. The content component is commonly used to resemble a piece of paper. It'll be useful to theme a arbitrary content.</p>
    </div>

    <div class="page-container-section">
      <h2>Card</h2>

      <code-example title="Regular Cards" :component="examples['regular-cards']" />
      <code-example title="Theme Colors" :component="examples['theme-colors']" />
      <code-example title="Media cover" :component="examples['media']" />
      <code-example title="Card background with Aspect Ratio" :component="examples['media-cover']" />
      <code-example title="Different layouts" :component="examples['layouts']" />
      <code-example title="Expansion Control" :component="examples['card-expansion']" />

      <api-item title="API - md-card">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
import examples from 'docs-mixins/docsExample'

export default {
  name: 'Card',
  mixins: [examples],
  data: () => ({

  })
}
</script>
