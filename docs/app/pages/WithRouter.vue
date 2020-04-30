<template>
  <page-container centered :title="$t('pages.withRouter.title')">
    <div class="page-container-section">
      <h2 class="md-headline">Vue Material Router Link Components</h2>
      <p>So far the <code><router-link to="/components/tabs">md-tab</router-link></code>, <code><router-link to="/components/list">md-list-item</router-link></code>, <code><router-link to="/components/bottom-bar">md-bottom-bar-item</router-link></code> and <code><router-link to="/components/steppers">md-step</router-link></code> components support Vue router.</p>
      <p>These Vue Material components will be auto-generated with the <code>to</code> prop and accept all <a href="https://router.vuejs.org/en/api/router-link.html">router-link props</a> except <code>tag</code>.</p>
      <h2 class="md-headline">Work with Router option <code>linkActiveClass</code></h2>
      <p>Since Vue Router doesn't expose <code>isSameRoute</code> and <code>isIncludedRoute</code> methods, Vue Material cannot detect which links are active. Vue Material injects <code>linkActiveClass</code> as an extra active class, enabling interaction with Vue router. Therefore, if you want to use a custom class for an active link by default, you need to setup like this:</p>
      <code-example title="Individual components">
        const linkActiveClass = 'my-link-active-class'

        // pass custom class to Vue Material
        Vue.material.router.linkActiveClass = linkActiveClass

        // pass custom class to Vue Router
        router = new VueRouter({
          routes,
          linkActiveClass
        })

        const app = new Vue({
          name: 'Root',
          router,
        })

      </code-example>
    </div>
  </page-container>
</template>

<script>
  export default {
    name: 'WithRouter'
  }
</script>
