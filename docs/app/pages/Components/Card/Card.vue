<example src="./examples/RegularCards.vue" />
<example src="./examples/CardsWithHover.vue" />

<template>
  <page-container centered :title="$t('pages.card.title')">
    <div class="page-container-section">
      <p>The content surfaces that comprise applications are referred to in this spec as material, or sheets of material. The content component is commonly used to resemble a piece of paper. It'll be useful to theme a arbitrary content.</p>
    </div>

    <div class="page-container-section">
      <h2>Card</h2>

      <code-example title="Regular Cards" :component="examples['regular-cards']" />
      <code-example title="Cards with hover" :component="examples['cards-with-hover']" />

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
