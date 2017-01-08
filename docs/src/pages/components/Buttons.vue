<template>
  <page-content page-title="Components - Button">
    <docs-component>
      <div slot="description">
        <p>Buttons communicate the action that will occur when the user touches them.</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-primary</code></li>
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-button">
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
                <md-table-cell>disabled</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Disable the button and prevent his actions. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>type</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Apply a type to button - Doesn't apply for links.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>href</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Create a anchor on the button - In this case the generated tag will be <code>&lt;a&gt;</code>.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-raised</md-table-cell>
                <md-table-cell>Raised button</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-icon-button</md-table-cell>
                <md-table-cell>Create rounded buttons - Need a &lt;md-icon&gt; inside</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-dense</md-table-cell>
                <md-table-cell>Small dense buttons</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-fab</md-table-cell>
                <md-table-cell>Create an Floating Action Button</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-mini</md-table-cell>
                <md-table-cell>Small md-fab</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-fab-top-left</md-table-cell>
                <md-table-cell>Position the md-fab absolutely on the top left of his parent</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-fab-top-center</md-table-cell>
                <md-table-cell>Position the md-fab absolutely on the top center of his parent</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-fab-top-right</md-table-cell>
                <md-table-cell>Position the md-fab absolutely on the top right of his parent</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-fab-bottom-left</md-table-cell>
                <md-table-cell>Position the md-fab absolutely on the bottom left of his parent</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-fab-bottom-center</md-table-cell>
                <md-table-cell>Position the md-fab absolutely on the bottom center of his parent</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-fab-bottom-right</md-table-cell>
                <md-table-cell>Position the md-fab absolutely on the bottom right of his parent</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Flat">
          <div slot="demo">
            <md-button>Default</md-button>
            <md-button class="md-primary">Primary</md-button>
            <md-button class="md-accent">Accent</md-button>
            <md-button class="md-warn">Warn</md-button>
            <md-button class="md-primary" disabled>Disabled</md-button>
            <md-button class="md-dense">Dense</md-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-button&gt;Default&lt;/md-button&gt;
              &lt;md-button class=&quot;md-primary&quot;&gt;Primary&lt;/md-button&gt;
              &lt;md-button class=&quot;md-accent&quot;&gt;Accent&lt;/md-button&gt;
              &lt;md-button class=&quot;md-warn&quot;&gt;Warn&lt;/md-button&gt;
              &lt;md-button class=&quot;md-primary&quot; disabled&gt;Disabled&lt;/md-button&gt;
              &lt;md-button class=&quot;md-dense&quot;&gt;Dense&lt;/md-button&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Raised">
          <div slot="demo">
            <md-button class="md-raised">Default</md-button>
            <md-button class="md-raised md-primary">Primary</md-button>
            <md-button class="md-raised md-accent">Accent</md-button>
            <md-button class="md-raised md-warn">Warn</md-button>
            <md-button class="md-raised md-primary" disabled>Disabled</md-button>
            <md-button class="md-raised md-dense">Dense</md-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-button class=&quot;md-raised&quot;&gt;Default&lt;/md-button&gt;
              &lt;md-button class=&quot;md-raised md-primary&quot;&gt;Primary&lt;/md-button&gt;
              &lt;md-button class=&quot;md-raised md-accent&quot;&gt;Accent&lt;/md-button&gt;
              &lt;md-button class=&quot;md-raised md-warn&quot;&gt;Warn&lt;/md-button&gt;
              &lt;md-button class=&quot;md-raised md-primary&quot; disabled&gt;Disabled&lt;/md-button&gt;
              &lt;md-button class=&quot;md-raised md-dense&quot;&gt;Dense&lt;/md-button&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Button vs Link vs Router Link">
          <div slot="demo">
            <md-button class="md-raised md-primary">Button</md-button>
            <md-button href="#/components/button" class="md-raised md-primary">Link</md-button>
            <router-link tag="md-button" to="/components/button" class="md-raised md-primary">Router Link</router-link>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-button class=&quot;md-raised md-primary&quot;&gt;Button&lt;/md-button&gt;
              &lt;md-button href=&quot;#/components/button&quot; class=&quot;md-raised md-primary&quot;&gt;Link&lt;/md-button&gt;
              &lt;router-link tag=&quot;md-button&quot; to=&quot;/components/button&quot; class=&quot;md-raised md-primary&quot;&gt;Router Link&lt;/router-link&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Icons - Flat">
          <div slot="demo">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>

            <md-button class="md-icon-button md-primary">
              <md-icon>more_vert</md-icon>
            </md-button>

            <md-button class="md-icon-button md-accent">
              <md-icon>more_vert</md-icon>
            </md-button>

            <md-button class="md-icon-button md-warn">
              <md-icon>more_vert</md-icon>
            </md-button>

            <md-button class="md-icon-button" disabled>
              <md-icon>more_vert</md-icon>
            </md-button>

            <md-button class="md-icon-button md-dense">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-button class=&quot;md-icon-button&quot;&gt;
                &lt;md-icon&gt;more_vert&lt;/md-icon&gt;
              &lt;/md-button&gt;

              &lt;md-button class=&quot;md-icon-button md-primary&quot;&gt;
                &lt;md-icon&gt;more_vert&lt;/md-icon&gt;
              &lt;/md-button&gt;

              &lt;md-button class=&quot;md-icon-button md-accent&quot;&gt;
                &lt;md-icon&gt;more_vert&lt;/md-icon&gt;
              &lt;/md-button&gt;

              &lt;md-button class=&quot;md-icon-button md-warn&quot;&gt;
                &lt;md-icon&gt;more_vert&lt;/md-icon&gt;
              &lt;/md-button&gt;

              &lt;md-button class=&quot;md-icon-button&quot; disabled&gt;
                &lt;md-icon&gt;more_vert&lt;/md-icon&gt;
              &lt;/md-button&gt;

              &lt;md-button class=&quot;md-icon-button md-dense&quot;&gt;
                &lt;md-icon&gt;more_vert&lt;/md-icon&gt;
              &lt;/md-button&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Icons - Raised">
          <div slot="demo">
            <md-button class="md-icon-button md-raised">
              <md-icon>add</md-icon>
            </md-button>

            <md-button class="md-icon-button md-raised md-primary">
              <md-icon>add</md-icon>
            </md-button>

            <md-button class="md-icon-button md-raised md-accent">
              <md-icon>add</md-icon>
            </md-button>

            <md-button class="md-icon-button md-raised md-warn">
              <md-icon>add</md-icon>
            </md-button>

            <md-button class="md-icon-button md-raised" disabled>
              <md-icon>add</md-icon>
            </md-button>

            <md-button class="md-icon-button md-raised md-dense">
              <md-icon>add</md-icon>
            </md-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-button class=&quot;md-icon-button md-raised&quot;&gt;
                &lt;md-icon&gt;add&lt;/md-icon&gt;
              &lt;/md-button&gt;

              &lt;md-button class=&quot;md-icon-button md-raised md-primary&quot;&gt;
                &lt;md-icon&gt;add&lt;/md-icon&gt;
              &lt;/md-button&gt;

              &lt;md-button class=&quot;md-icon-button md-raised md-accent&quot;&gt;
                &lt;md-icon&gt;add&lt;/md-icon&gt;
              &lt;/md-button&gt;

              &lt;md-button class=&quot;md-icon-button md-raised md-warn&quot;&gt;
                &lt;md-icon&gt;add&lt;/md-icon&gt;
              &lt;/md-button&gt;

              &lt;md-button class=&quot;md-icon-button md-raised&quot; disabled&gt;
                &lt;md-icon&gt;add&lt;/md-icon&gt;
              &lt;/md-button&gt;

              &lt;md-button class=&quot;md-icon-button md-raised md-dense&quot;&gt;
                &lt;md-icon&gt;add&lt;/md-icon&gt;
              &lt;/md-button&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Floating Action Button">
          <div class="fab-holder" slot="demo">
            <div>
              <md-button class="md-fab">
                <md-icon>edit</md-icon>
              </md-button>

              <md-button class="md-fab md-primary">
                <md-icon>email</md-icon>
              </md-button>

              <md-button class="md-fab md-warn">
                <md-icon>save</md-icon>
              </md-button>

              <md-button class="md-fab md-clean">
                <md-icon>dialpad</md-icon>
              </md-button>

              <md-button class="md-fab" disabled>
                <md-icon>message</md-icon>
              </md-button>
            </div>

            <div>
              <md-button class="md-fab md-mini">
                <md-icon>edit</md-icon>
              </md-button>

              <md-button class="md-fab md-primary md-mini">
                <md-icon>email</md-icon>
              </md-button>

              <md-button class="md-fab md-warn md-mini">
                <md-icon>save</md-icon>
              </md-button>

              <md-button class="md-fab md-clean md-mini">
                <md-icon>dialpad</md-icon>
              </md-button>

              <md-button class="md-fab md-mini" disabled>
                <md-icon>message</md-icon>
              </md-button>
            </div>

            <md-button class="md-fab md-fab-bottom-left">
              <md-icon>save</md-icon>
            </md-button>

            <md-button class="md-fab md-primary md-fab-bottom-center">
              <md-icon>dialpad</md-icon>
            </md-button>

            <md-button class="md-fab md-fab-bottom-right">
              <md-icon>add</md-icon>
            </md-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;div&gt;
                &lt;md-button class=&quot;md-fab&quot;&gt;
                  &lt;md-icon&gt;edit&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-fab md-primary&quot;&gt;
                  &lt;md-icon&gt;email&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-fab md-warn&quot;&gt;
                  &lt;md-icon&gt;save&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-fab md-clean&quot;&gt;
                  &lt;md-icon&gt;dialpad&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-fab&quot; disabled&gt;
                  &lt;md-icon&gt;message&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/div&gt;

              &lt;div&gt;
                &lt;md-button class=&quot;md-fab md-mini&quot;&gt;
                  &lt;md-icon&gt;edit&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-fab md-primary md-mini&quot;&gt;
                  &lt;md-icon&gt;email&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-fab md-warn md-mini&quot;&gt;
                  &lt;md-icon&gt;save&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-fab md-clean md-mini&quot;&gt;
                  &lt;md-icon&gt;dialpad&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-fab md-mini&quot; disabled&gt;
                  &lt;md-icon&gt;message&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/div&gt;

              &lt;md-button class=&quot;md-fab md-fab-bottom-left&quot;&gt;
                &lt;md-icon&gt;save&lt;/md-icon&gt;
              &lt;/md-button&gt;

              &lt;md-button class=&quot;md-fab md-primary md-fab-bottom-center&quot;&gt;
                &lt;md-icon&gt;dialpad&lt;/md-icon&gt;
              &lt;/md-button&gt;

              &lt;md-button class=&quot;md-fab md-fab-bottom-right&quot;&gt;
                &lt;md-icon&gt;add&lt;/md-icon&gt;
              &lt;/md-button&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themes">
          <div slot="demo">
            <md-button md-theme="indigo" class="md-primary">Indigo</md-button>

            <md-button md-theme="teal" class="md-raised md-primary">Teal</md-button>

            <md-button md-theme="orange" class="md-icon-button md-primary">
              <md-icon>add</md-icon>
            </md-button>

            <md-button md-theme="green" class="md-icon-button md-raised md-primary">
              <md-icon>message</md-icon>
            </md-button>

            <md-button md-theme="brown" class="md-fab md-primary">
              <md-icon>dialpad</md-icon>
            </md-button>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-button md-theme=&quot;indigo&quot; class=&quot;md-primary&quot;&gt;Indigo&lt;/md-button&gt;

              &lt;md-button md-theme=&quot;teal&quot; class=&quot;md-raised md-primary&quot;&gt;Teal&lt;/md-button&gt;

              &lt;md-button md-theme=&quot;orange&quot; class=&quot;md-icon-button md-primary&quot;&gt;
                &lt;md-icon&gt;add&lt;/md-icon&gt;
              &lt;/md-button&gt;

              &lt;md-button md-theme=&quot;green&quot; class=&quot;md-icon-button md-raised md-primary&quot;&gt;
                &lt;md-icon&gt;message&lt;/md-icon&gt;
              &lt;/md-button&gt;

              &lt;md-button md-theme=&quot;brown&quot; class=&quot;md-fab md-primary&quot;&gt;
                &lt;md-icon&gt;dialpad&lt;/md-icon&gt;
              &lt;/md-button&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
  .disabled-button {
    margin-left: 8px;
  }

  .fab-holder {
    height: 300px;
  }
</style>

<script>
  export default {
    data() {
      return {
        buttonDisabled: true
      };
    },
    methods: {
      disablePrimaryButton() {
        this.buttonDisabled = !this.buttonDisabled;
      }
    }
  };
</script>
