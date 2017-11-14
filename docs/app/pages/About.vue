<template>
  <page-container centered :title="$t('pages.about.title')">
    <section class="page-container-section">
      <h2 class="md-headline">Vue Material</h2>
      <strong>Material Design for Vue.js</strong>
      <p>Vue Material is simple, lightweight and built exactly according to the Google Material Design specs.</p>
      <p>Build well-designed apps that can fit on every screen with support to all modern Web Browsers with dynamic themes, components on demand and all with an ease-to-use API.</p>
    </section>

    <section class="page-container-section">
      <h2 class="md-headline">Author</h2>
      <div class="author-card">
        <md-avatar class="md-large">
          <img src="assets/examples/marcosmoura.jpg" alt="Marcos Moura">
        </md-avatar>

        <div class="author-card-info">
          <span>Marcos Moura</span>
          <div class="author-card-links">
            <a href="https://github.com/marcosmoura" target="_blank" rel="noopener">GitHub</a>
            <a href="https://linkedin.com/in/marcosvmmoura" target="_blank" rel="noopener">Linkedin</a>
          </div>
        </div>
      </div>
    </section>

    <section class="page-container-section">
      <h2 class="md-headline">Browser Support</h2>

      <p>Vue Material supports the latest version of all Browsers</p>
    </section>

    <section class="page-container-section">
      <h2 class="md-headline">Credits and Thanks</h2>
      <ul>
        <li>Thanks a lot to <a href="https://github.com/elviskang" target="_blank">elviskang</a> for donating the npm package name!</li>
        <li>Thanks a lot to <a href="https://github.com/brunocastro" target="_blank">Bruno Castro</a> for the awesome Vue Material Logo.</li>
      </ul>
    </section>

    <section class="page-container-section">
      <h2 class="md-headline">License</h2>
      <p>MIT</p>
    </section>
  </page-container>
</template>

<script>
  export default {
    name: 'About'
  }
</script>
