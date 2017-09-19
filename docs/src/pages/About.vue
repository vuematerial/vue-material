<template>
  <page-content page-title="About">
    <div class="main-content">
      <section>
        <h2 class="md-headline">Author</h2>
        <div class="author-card">
          <md-avatar class="md-large">
            <img src="assets/marcosmoura.jpg" alt="Marcos Moura">
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

      <section>
        <h2 class="md-headline">Sponsors &amp; Backers</h2>

        <p>Vue Material do not run under the umbrella of any company or something like that. Is an independent project created by <a href="https://www.github.com/marcosmoura">Marcos Moura</a> on spare time that became one of the most used UI Libraries for Vue.js. The development is active and we are working hard to release great things for you.</p>
        <p>If you think that this project helped you or your company in some way, you can consider become a backer/sponsor on Patreon:</p>
        <p>
          <a href="https://www.patreon.com/marcosmoura">
            <img width="150" src="https://camo.githubusercontent.com/3d9b27bdf72d7e5407fbad6f9240f6cadc98a7a5/68747470733a2f2f63352e70617472656f6e2e636f6d2f65787465726e616c2f6c6f676f2f6265636f6d655f615f706174726f6e5f627574746f6e2e706e67" data-canonical-src="https://c5.patreon.com/external/logo/become_a_patron_button.png" style="max-width:100%;">
          </a>
        </p>

        <br>

        <h3>Sponsors</h3>
        <p>Yatima Kagurazaka</p>
        <p>
          <img width="150" src="https://user-images.githubusercontent.com/1357885/30575587-406d25f6-9cd8-11e7-8c73-5d08e956e6f8.png">
        </p>

        <br>

        <h4>Backers</h4>

        <ul>
          <li>Ivo Benner</li>
          <li>Nathanael Björkgård</li>
        </ul>
      </section>

      <section>
        <h2 class="md-headline">Browser Support</h2>

        <p>Vue Material supports the latest version of all Browsers. This means:</p>
        <ul>
          <li>Google Chrome 52+</li>
          <li>Firefox 48+ </li>
          <li>Safari 9+ </li>
          <li>Opera 38+ </li>
          <li>Edge 12+ </li>
          <li>IE 11</li>
        </ul>
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
        You don't need to include any other library to work with vue-material. The focus of this project is to have a standalone build with no external dependencies, but aiming to deliver the best experience without breaking compatibility with the Vue.js core.
        <ul>
          <li>
            <a href="http://vuejs.org" rel="noopener" target="_blank">Vue</a>
          </li>

          <li>
            <a href="http://www.jacklmoore.com/autosize/" rel="noopener" target="_blank">autosize</a>
          </li>

          <li>
            <a href="https://www.npmjs.com/package/element.scrollintoviewifneeded-polyfill" rel="noopener" target="_blank">element.scrollintoviewifneeded-polyfill</a>
          </li>
        </ul>
      </section>

      <section>
        <h2 class="md-headline">License</h2>
        <p>MIT</p>
      </section>
    </div>
  </page-content>
</template>

<style lang="scss" scoped>
  section {
    max-width: 960px;

    + section {
      margin-top: 56px;
    }
  }

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
