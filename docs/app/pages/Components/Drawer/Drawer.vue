<example src="./examples/Temporary.vue" />
<example src="./examples/PermanentFull.vue" />
<example src="./examples/PermanentClipped.vue" />
<example src="./examples/PermanentCard.vue" />
<example src="./examples/Persistent.vue" />

<template>
  <page-container centered :title="$t('pages.drawer.title')">
    <div class="page-container-section">
      <p>The navigation drawer slides in from the left and contains the navigation destinations for your app.</p>
    </div>

    <div class="page-container-section">
      <h2>Permanent</h2>

      <code-example title="Full Height" :component="examples['permanent-full']" />
      <code-example title="Clipped" :component="examples['permanent-clipped']" />
      <code-example title="Card" :component="examples['permanent-card']" />
    </div>

    <div class="page-container-section">
      <h2>Persistent</h2>

      <code-example title="Push page content" :component="examples['persistent']" />
    </div>

    <div class="page-container-section">
      <h2>Temporary</h2>

      <code-example title="Side Nav" :component="examples['temporary']" />
    </div>
  </page-container>
</template>

<script>
  import examples from 'docs-mixins/docsExample'

  export default {
    name: 'Drawer',
    mixins: [examples],
    data: () => ({

    })
  }
</script>
