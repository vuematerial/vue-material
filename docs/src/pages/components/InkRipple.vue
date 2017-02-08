<template>
  <page-content page-title="Components - Ink Ripple">
    <docs-component>
      <div slot="description">
        <p>Ink ripples confirm user input by immediately expanding outward from the point of touch. The card lifts to indicate an active state.</p>
        <p>To disable the ripple component globally just call the API: </p>
        <code-block lang="javascript">
          // Anywhere
          Vue.material.inkRipple = false

          // Inside a Vue Intance
          this.$material.inkRipple = false
        </code-block>
      </div>

      <div slot="api">
        <api-table name="md-ink-ripple">
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Disable the ripple effect on the parent element. Default <code>false</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <div class="has-ripple">
              <md-ink-ripple />
              This div has ripple effect
            </div>

            <div class="has-ripple purple">
              <md-ink-ripple />
              This div has ripple effect
            </div>

            <div class="has-ripple blue">
              <md-ink-ripple />
              This div has ripple effect
            </div>

            <div class="has-ripple red">
              <md-ink-ripple />
              This div has ripple effect
            </div>

            <md-card class="card-ripple" md-with-hover>
              <md-card-media>
                <md-ink-ripple />
                <img src="assets/card-image-1.jpg" alt="People">
              </md-card-media>

              <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>favorite</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>bookmark</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>share</md-icon>
                </md-button>
              </md-card-actions>
            </md-card>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;div class=&quot;has-ripple&quot;&gt;
                &lt;md-ink-ripple /&gt;
                This div has ripple effect
              &lt;/div&gt;

              &lt;div class=&quot;has-ripple purple&quot;&gt;
                &lt;md-ink-ripple /&gt;
                This div has ripple effect
              &lt;/div&gt;

              &lt;div class=&quot;has-ripple blue&quot;&gt;
                &lt;md-ink-ripple /&gt;
                This div has ripple effect
              &lt;/div&gt;

              &lt;div class=&quot;has-ripple red&quot;&gt;
                &lt;md-ink-ripple /&gt;
                This div has ripple effect
              &lt;/div&gt;

              &lt;md-card class=&quot;card-ripple&quot; md-with-hover&gt;
                &lt;md-card-media&gt;
                  &lt;md-ink-ripple /&gt;
                  &lt;img src=&quot;assets/card-image-1.jpg&quot; alt=&quot;People&quot;&gt;
                &lt;/md-card-media&gt;

                &lt;md-card-actions&gt;
                  &lt;md-button class=&quot;md-icon-button&quot;&gt;
                    &lt;md-icon&gt;favorite&lt;/md-icon&gt;
                  &lt;/md-button&gt;

                  &lt;md-button class=&quot;md-icon-button&quot;&gt;
                    &lt;md-icon&gt;bookmark&lt;/md-icon&gt;
                  &lt;/md-button&gt;

                  &lt;md-button class=&quot;md-icon-button&quot;&gt;
                    &lt;md-icon&gt;share&lt;/md-icon&gt;
                  &lt;/md-button&gt;
                &lt;/md-card-actions&gt;
              &lt;/md-card&gt;
            </code-block>

            <code-block lang="sass">
              .has-ripple {
                margin-bottom: 16px;
                padding: 20px;
                display: inline-block;
                position: relative;
              }

              .blue {
                color: #2196F3;
              }

              .purple {
                color: #9C27B0;
              }

              .red {
                color: #F44336;
              }

              .card-ripple {
                width: 300px;
                margin-top: 24px;
              }
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
  .has-ripple {
    margin-bottom: 16px;
    padding: 20px;
    display: inline-block;
    position: relative;
  }

  .blue {
    color: #2196F3;
  }

  .purple {
    color: #9C27B0;
  }

  .red {
    color: #F44336;
  }

  .card-ripple {
    width: 300px;
    margin-top: 24px;
  }
</style>
