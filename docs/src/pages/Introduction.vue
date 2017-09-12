<template>
  <page-content page-title="Introduction">
    <div class="main-content">
      <div class="introduction">
        <div class="button-actions">
          <div class="example">
            <img src="assets/vue-material-example.png" alt="Material Design">
          </div>

          <div class="introduction">Build well-crafted apps with Material Design and Vue 2</div>

          <md-button class="md-primary md-raised" href="#/getting-started">Getting Started</md-button>
          <md-button class="md-primary md-raised" href="https://github.com/marcosmoura/vue-material" target="_blank" rel="noopener">Github</md-button>
        </div>

        <div class="row">
          <div class="column">
            <h2 class="md-headline">Material Design</h2>
            <p>Vue Material is lightweight framework built exactly according to the <a href="http://material.google.com" target="_blank" rel="noopener">Material Design</a> specs. Build powerful and well-designed web apps that can can fit on every screen.</p>
          </div>

          <div class="column">
            <h2 class="md-headline">Fully-featured</h2>
            <p>You can generate and use themes dynamically, use components on demand, take advantage of UI Elements and Components with an easy-to-use API and more…</p>
          </div>

          <div class="column">
            <h2 class="md-headline">Compatible</h2>
            <p>It aims to deliver a collection of reusable components and a series of UI Elements to build applications with support to all modern Web Browsers through Vue 2.0.</p>
          </div>
        </div>
      </div>
    </div>
  </page-content>
</template>

<style lang="scss" scoped>
  .introduction {
    max-width: 960px;
    margin: 0 auto;
  }

  .example {
    margin-bottom: 24px;
    overflow: hidden;

    img {
      margin: -45px auto;
      display: block;
    }
  }

  .button-actions {
    margin-bottom: 16px;
    text-align: center;

    .introduction {
      margin-bottom: .8em;
      font-size: 20px;
      line-height: 1.6em;
    }

    .md-button {
      margin-left: 0;
      color: #fff !important;
    }
  }

  .row {
    margin: 0 -10px;
    display: flex;
    flex-flow: row wrap;
  }

  .column {
    margin: 0 10px;
    flex: 1 1 30%;

    @media (max-width: 640px) {
      flex: 1 1 100%;
    }
  }
</style>
