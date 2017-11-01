<example src="./examples/Temporary.vue" />
<example src="./examples/PermanentFull.vue" />
<example src="./examples/PermanentClipped.vue" />
<example src="./examples/PermanentCard.vue" />
<example src="./examples/PersistentFull.vue" />
<example src="./examples/PersistentMini.vue" />

<template>
  <page-container centered :title="$t('pages.drawer.title')">
    <div class="page-container-section">
      <p>The navigation drawer slides in from the left or right and contains the navigation destinations for your app. It is commonly used with lists inside, although can accept any type of content.</p>
      <p>Drawers have 4 types: Permanent, Persistent, Mini variant and Temporary.</p>
      <note-block>In some examples of this demo we are using drawers along with the <router-link to="/components/app">App</router-link> component, but you can totally use it alone.</note-block>
    </div>

    <div class="page-container-section">
      <h2>Permanent</h2>

      <code-example title="Full Height" :component="examples['permanent-full']" />
      <code-example title="Clipped" :component="examples['permanent-clipped']" />
      <code-example title="Card" :component="examples['permanent-card']" />
    </div>

    <div class="page-container-section">
      <h2>Persistent</h2>

      <code-example title="Push page content" :component="examples['persistent-full']" />
      <code-example title="Mini drawer always visible" :component="examples['persistent-mini']" />
    </div>

    <div class="page-container-section">
      <h2>Temporary</h2>

      <code-example title="Works with two side drawers" :component="examples['temporary']" />
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
