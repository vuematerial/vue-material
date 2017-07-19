<example src="./examples/Normal.vue" />
<example src="./examples/Waterfall.vue" />
<example src="./examples/Reveal.vue" />
<example src="./examples/Flexible.vue" />
<example src="./examples/LastRowFixed.vue" />
<example src="./examples/Overlap.vue" />

<template>
  <page-container centered :title="$t('pages.app.title')">
    <div class="page-container-section">
      <p>The content surfaces that comprise applications are referred to in this spec as material, or sheets of material. The content component is commonly used to resemble a piece of paper. It'll be useful to theme a arbitrary content.</p>
    </div>

    <div class="page-container-section">
      <h2>App</h2>

      <code-example title="Default" :component="examples['normal']" />
      <code-example title="Fixed + Waterfall" :component="examples['waterfall']" />
      <code-example title="Reveal" :component="examples['reveal']" />
      <code-example title="Flexible" :component="examples['flexible']" />
      <code-example title="Last Row Fixed" :component="examples['last-row-fixed']" />
      <code-example title="Overlapping content" :component="examples['overlap']" />

      <api-item title="API - md-app">
        <p>This component do not have any extra option.</p>
      </api-item>
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'App',
    mixins: [examples],
    data: () => ({

    })
  }
</script>
