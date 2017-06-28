<example src="./examples/Sidenav.vue" />

<template>
  <page-container centered :title="$t('pages.drawer.title')">
    <div class="page-container-section">
      <p>The navigation drawer slides in from the left and contains the navigation destinations for your app.</p>
    </div>

    <div class="page-container-section">
      <h2>Navigation Drawer</h2>

      <code-example title="Side Nav" :component="examples['sidenav']" />
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
