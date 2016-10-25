<template>
  <single-page class="single-page-home" label="About">
    <single-page-banner label="About"></single-page-banner>

    <section>
      <h2 class="md-headline">Author</h2>
      <div class="author-card">
        <md-avatar class="md-large">
          <img src="assets/marcosmoura.jpg" alt="Marcos Moura">
        </md-avatar>
        <div class="author-card-info">
          <span>Marcos Moura</span>
          <div class="author-card-links">
            <a href="https://linkedin.com/in/marcosvmmoura" target="_blank" rel="noopener">Linkedin</a>
            <a href="https://github.com/marcosmoura" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="md-headline">Credits and Thanks</h2>
      <ul>
        <li>This library aims to delivery components using almost the same API of <a href="https://material.angularjs.org/latest/" target="_blank">Angular Material</a></li>
        <li>Thanks a lot to <a href="https://github.com/elviskang" target="_blank">elviskang</a> for donating the npm package name!</li>
        <li>Thanks to <a href="https://github.com/yyx990803" target="_blank">Evan You</a> for allowing me to use Vue.js Logo.</li>
      </ul>
    </section>

    <section>
      <h2 class="md-headline">Internal Dependencies</h2>
      You don't need to include any other library to work with vue-material. The focus of this project is to have a standalone build with no external dependence, but aiming to deliver the best experience without break the compatibility with the Vue.js core.
      <ul>
        <li>
          <a href="http://www.jacklmoore.com/autosize/" target="_blank">autosize</a>
        </li>

        <li>
          <a href="https://www.npmjs.com/package/element.scrollintoviewifneeded-polyfill" target="_blank">element.scrollintoviewifneeded-polyfill</a>
        </li>

        <li>
          <a href="https://github.com/lazd/scopedQuerySelectorShim" target="_blank">scopedQuerySelectorShim</a>
        </li>
      </ul>
    </section>

    <section>
      <h2 class="md-headline">License</h2>
      <p>MIT</p>
    </section>
  </single-page>
</template>

<style lang="scss" scoped>
  .author-card {
    display: flex;
    align-items: center;

    .md-avatar {
      margin-right: 16px;
    }

    .author-card-info {
      display: flex;
      flex-flow: column;
      flex: 1;
    }

    span {
      font-size: 16px;
    }

    .author-card-links {
      display: flex;

      a + a {
        margin-left: 8px;
      }
    }
  }
</style>
