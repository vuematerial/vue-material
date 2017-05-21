<template>
  <page-content page-title="Components - Grid">
    <docs-component>
      <div slot="description">
        <p>The grid offers a compact view of many items in the same page. Unlike cards, they offer small information and focus on media and a simple action, if able.</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-3">
          <li><code>md-primary</code></li>
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-grid-media">
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row>
                <md-table-cell><code>md-primary</code></md-table-cell>
                <md-table-cell>Applies primary color to background header and footer.</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell><code>md-accent</code></md-table-cell>
                <md-table-cell>Applies accent color to background header and footer.</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell><code>md-warn</code></md-table-cell>
                <md-table-cell>Applies warn color to background header and footer.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
        <api-table name="md-grid-content">
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row>
                <md-table-cell><code>header</code></md-table-cell>
                <md-table-cell>Places the content as a top header.</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell><code>footer</code></md-table-cell>
                <md-table-cell>Places the content as a bottom footer.</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell><code>single-line</code></md-table-cell>
                <md-table-cell>Single line header/footer.</md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell><code>double-line</code></md-table-cell>
                <md-table-cell>Double line header/footer.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Simple grid">
          <div slot="demo">
            <md-grid>
              <md-grid-media>
                <img src="https://placeimg.com/480/640/architecture"/>
                <md-ink-ripple />
                <md-grid-content class="footer">
                  <div class="double-line">
                    <strong>Default footer</strong>
                    <span>Transparent</span>
                  </div>
                  <md-button class="md-icon-button"><md-icon>favorite</md-icon></md-button>
                </md-grid-content>
              </md-grid-media>
              <md-grid-media class="md-primary">
                <md-grid-content class="header">
                  <div class="double-line">
                    <strong>Primary header</strong>
                    <span>Subtitle</span>
                  </div>
                  <md-button class="md-icon-button"><md-icon>favorite</md-icon></md-button>
                </md-grid-content>
                <img src="https://placeimg.com/480/640/nature"/>
                <md-ink-ripple />
              </md-grid-media>
              <md-grid-media class="md-accent">
                <md-grid-content class="header">
                  <div class="single-line">
                    <strong>Accent header</strong>
                  </div>
                  <md-button class="md-icon-button"><md-icon>star</md-icon></md-button>
                </md-grid-content>
                <img src="https://placeimg.com/480/640/people"/>
                <md-ink-ripple />
                <md-grid-content class="footer">
                  <div class="double-line">
                    <strong>Accent footer</strong>
                    <span>Subtitle</span>
                  </div>
                </md-grid-content>
              </md-grid-media>
              <md-grid-media class="md-warn">
                <md-grid-content class="header">
                  <md-button class="md-icon-button"><md-icon>home</md-icon></md-button>
                  <div class="single-line">
                    <strong>Warn header</strong>
                  </div>
                </md-grid-content>
                <img src="https://placeimg.com/480/640/tech"/>
                <md-ink-ripple />
              </md-grid-media>
              <md-grid-media>
                <md-grid-content class="header">
                  <div class="double-line">
                    <strong>Default header</strong>
                    <span>Transparent</span>
                  </div>
                  <md-button class="md-icon-button"><md-icon>done</md-icon></md-button>
                </md-grid-content>
                <img src="https://placeimg.com/480/640/animals"/>
                <md-ink-ripple />
                <md-grid-content class="footer">
                  <div class="single-line">
                    <span>Default footer</span>
                  </div>
                </md-grid-content>
              </md-grid-media>
            </md-grid>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-grid&gt;
                &lt;md-grid-media class=&quot;md-primary&quot;&gt;
                  &lt;md-grid-content class=&quot;single-line&quot;&gt;
                    &lt;div&gt;&lt;strong&gt;Title&lt;/strong&gt;&lt;/div&gt;
                  &lt;/md-grid-content&gt;
                  &lt;md-ink-ripple/&gt;
                  &lt;img src=&quot;https://placeimg.com/480/640/any&quot;&gt;
                  &lt;md-grid-content&gt;
                    &lt;div class=&quot;double-line&quot;&gt;
                      &lt;strong&gt;Title&lt;/strong&gt;
                      &lt;span&gt;Subtitle&lt;/span&gt;
                    &lt;/div&gt;
                    &lt;md-button&gt;
                      &lt;md-icon&gt;favorite&lt;/md-icon&gt;
                    &lt;/md-button&gt;
                  &lt;/md-grid-content&gt;
                &lt;/md-grid-media&gt;
              &lt;/md-grid&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<script>
  export default {
  
  };
</script>
