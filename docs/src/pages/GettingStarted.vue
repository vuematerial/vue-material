<template>
  <page-content page-title="Getting Started">
    <div class="main-content">
      <article>
        <section>
          <h2 class="md-headline">Include Fonts and Icons</h2>

          <p>Use Roboto and Google Icons from Google CDN:</p>
          <code-block lang="xml">
            &lt;link rel=&quot;stylesheet&quot; href=&quot;//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic&quot;&gt;
            &lt;link rel=&quot;stylesheet&quot; href=&quot;//fonts.googleapis.com/icon?family=Material+Icons&quot;&gt;
          </code-block>
        </section>
      </article>

      <article>
        <h2 class="md-headline">Installation</h2>

        <section>
          <h3 class="md-title">NPM</h3>
          <p>Install Vue Material through npm or yarn <br><small>* Others package managers like JSPM and Bower are not supported yet.</small></p>
          <code-block lang="bash">
            $ npm install vue-material --save
            $ yarn add vue-material
          </code-block>
        </section>

        <section>
          <h3 class="md-title">Standalone</h3>
          <p>Download from Github and reference the script and the stylesheet in your HTML:</p>
          <md-button class="md-raised md-primary" href="https://github.com/marcosmoura/vue-material/archive/master.zip" target="_blank" rel="noopener">download</md-button>
        </section>
      </article>

      <article>
        <h2 class="md-headline">Usage</h2>

        <section>
          <h3 class="md-title">AMD Modules</h3>

          <p>Import and use the whole library:</p>
          <code-block lang="xml">
            &lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/vue-material.css&quot;&gt;
          </code-block>

          <code-block lang="javascript">
            var Vue = require('vue')
            var VueMaterial = require('vue-material')

            Vue.use(VueMaterial)
          </code-block>

          <p>Or to import individual components:</p>
          <code-block lang="xml">
            &lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/vue-material/dist/components/mdCore.css&quot;&gt;
            &lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/vue-material/dist/components/mdButton.css&quot;&gt;
            &lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/vue-material/dist/components/mdIcon.css&quot;&gt;
            &lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/vue-material/dist/components/mdSidenav.css&quot;&gt;
            &lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/vue-material/dist/components/mdToolbar.css&quot;&gt;
          </code-block>

          <code-block lang="javascript">
            var Vue = require('vue')
            var VueMaterial = require('vue-material')

            Vue.use(VueMaterial.mdCore) //Required to boot vue material
            Vue.use(VueMaterial.mdButton)
            Vue.use(VueMaterial.mdIcon)
            Vue.use(VueMaterial.mdSidenav)
            Vue.use(VueMaterial.mdToolbar)
          </code-block>

          <p><strong>Note:</strong> If you are using Webpack you can still import the css files inside your modules. And you can also write everything using ES6 with Babel or Bublé.</p>
        </section>

        <section>
          <h3 class="md-title">Standalone</h3>

          <code-block lang="xml">
            &lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/vue-material.css&quot;&gt;
            &lt;script src=&quot;path/to/vue-material.js&quot;&gt;&lt;/script&gt;
          </code-block>

          <code-block lang="javascript">
            // The VueMaterial variable is global
            Vue.use(VueMaterial)
          </code-block>
        </section>
      </article>

      <article>
        <section>
          <h2 class="md-headline">Themes</h2>

          <p>To get Vue Material working properly, you'll need to configure a default theme. You can also register multiple themes at once. Apply your theme on each code part that you want using <code>v-md-theme</code> directive:</p>

          <md-tabs :md-dynamic-height="false" class="md-transparent">
            <md-tab md-label="Single Theme">
              <code-block lang="javascript">
                Vue.material.theme.register('default', {
                  primary: 'cyan',
                  accent: 'pink'
                })
              </code-block>

              <code-block lang="xml">
                &lt;div id=&quot;app&quot; v-md-theme=&quot;&#039;default&#039;&quot;&gt;
                  &lt;md-toolbar&gt;
                    &lt;div class=&quot;md-title&quot;&gt;My App&lt;/div&gt;
                  &lt;/md-toolbar&gt;

                  &lt;md-button&gt;My Button&lt;/md-button&gt;
                &lt;/div&gt;
              </code-block>
            </md-tab>

            <md-tab md-label="Multiple Themes">
              <code-block lang="javascript">
                Vue.material.theme.registerAll({
                  default: {
                    primary: 'cyan',
                    accent: 'pink'
                  },
                  indigo: {
                    primary: 'indigo',
                    accent: 'pink'
                  }
                })
              </code-block>

              <code-block lang="xml">
                &lt;div id=&quot;app&quot; v-md-theme=&quot;&#039;default&#039;&quot;&gt;
                  &lt;md-toolbar&gt;
                    &lt;div class=&quot;md-title&quot;&gt;My App&lt;/div&gt;
                  &lt;/md-toolbar&gt;

                  &lt;md-button v-md-theme=&quot;&#039;indigo&#039;&quot;&gt;My Button&lt;/md-button&gt;
                &lt;/div&gt;
              </code-block>
            </md-tab>
          </md-tabs>
        </section>
      </article>

      <article>
        <h2 class="md-headline">Browser Support</h2>

        <section>
          <p>Vue Material supports the latest version of all Browsers. This means:</p>
          <ul>
            <li>Google Chrome 50+</li>
            <li>Firefox 48+</li>
            <li>Safari 9+</li>
            <li>Opera 40+</li>
            <li>IE 11</li>
            <li>Edge</li>
          </ul>
        </section>
      </article>

      <article>
        <h2 class="md-headline">Codepen Examples</h2>

        <h3 class="md-title">File Application UI</h3>
        <iframe height="610" scrolling="no" title="File Application UI" src="//codepen.io/vue-material/embed/WoZpMR/?height=610&amp;theme-id=dark&amp;default-tab=result&amp;embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true">See the Pen <a href="http://codepen.io/vue-material/pen/WoZpMR/">Vue Material Example</a> by Vue Material (<a href="http://codepen.io/vue-material">@vue-material</a>) on <a href="http://codepen.io">CodePen</a>.</iframe>
      </article>
    </div>
  </page-content>
</template>

<style lang="scss" scoped>
  .main-content {
    position: relative;
  }

  article {
    max-width: 960px;
  }

  section + section,
  article + article {
    margin-top: 36px;
  }

  .code-block,
  .md-tabs {
    max-width: 100%;
  }

  .md-tab {
    border-top: 1px solid rgba(#000, .12);
    padding: 0;
  }
</style>
