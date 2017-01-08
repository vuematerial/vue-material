<template>
  <page-content page-title="Components - Tooltip">
    <docs-component>
      <div slot="description">
        <p>Tooltips identify an element when they are activated. They may contain brief helper text about its function. For example, they may contain text information about actionable icons.</p>
      </div>

      <div slot="api">
        <api-table name="md-tooltip">
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
                <md-table-cell>md-direction</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Sets the direction position of the parent element. <br>Default: <code>bottom</code> <br>Accepts: <code>top</code>|<code>right</code>|<code>bottom</code>|<code>left</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-delay</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>Sets the delay to show the tooltip in ms. <br>Default: <code>0</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <div>
              <md-button class="md-icon-button md-raised md-primary">
                <md-icon>folder</md-icon>
                <md-tooltip md-direction="top">My tooltip</md-tooltip>
              </md-button>

              <md-avatar>
                <img src="assets/avatar-2.jpg" alt="People">
                <md-tooltip md-direction="bottom">My tooltip</md-tooltip>
              </md-avatar>
            </div>

            <div>
              <md-button class="md-icon-button md-raised md-warn">
                <md-icon>home</md-icon>
                <md-tooltip md-direction="left">My tooltip</md-tooltip>
              </md-button>

              <md-avatar class="md-avatar-icon">
                <md-icon>person</md-icon>
                <md-tooltip md-direction="right">My tooltip</md-tooltip>
              </md-avatar>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;div&gt;
                &lt;md-button class=&quot;md-icon-button md-raised md-primary&quot;&gt;
                  &lt;md-icon&gt;folder&lt;/md-icon&gt;
                  &lt;md-tooltip md-direction=&quot;top&quot;&gt;My tooltip&lt;/md-tooltip&gt;
                &lt;/md-button&gt;

                &lt;md-avatar&gt;
                  &lt;img src=&quot;assets/avatar-2.jpg&quot; alt=&quot;People&quot;&gt;
                  &lt;md-tooltip md-direction=&quot;bottom&quot;&gt;My tooltip&lt;/md-tooltip&gt;
                &lt;/md-avatar&gt;
              &lt;/div&gt;

              &lt;div&gt;
                &lt;md-button class=&quot;md-icon-button md-raised md-warn&quot;&gt;
                  &lt;md-icon&gt;home&lt;/md-icon&gt;
                  &lt;md-tooltip md-direction=&quot;left&quot;&gt;My tooltip&lt;/md-tooltip&gt;
                &lt;/md-button&gt;

                &lt;md-avatar class=&quot;md-avatar-icon&quot;&gt;
                  &lt;md-icon&gt;person&lt;/md-icon&gt;
                  &lt;md-tooltip md-direction=&quot;right&quot;&gt;My tooltip&lt;/md-tooltip&gt;
                &lt;/md-avatar&gt;
              &lt;/div&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Delay">
          <div slot="demo">
            <div>
              <md-button class="md-icon-button md-raised md-primary">
                <md-icon>folder</md-icon>
                <md-tooltip md-delay="400" md-direction="top">My tooltip</md-tooltip>
              </md-button>

              <md-avatar>
                <img src="assets/avatar-2.jpg" alt="People">
                <md-tooltip md-delay="400" md-direction="bottom">My tooltip</md-tooltip>
              </md-avatar>
            </div>

            <div>
              <md-button class="md-icon-button md-raised md-warn">
                <md-icon>home</md-icon>
                <md-tooltip md-delay="400" md-direction="left">My tooltip</md-tooltip>
              </md-button>

              <md-avatar class="md-avatar-icon">
                <md-icon>person</md-icon>
                <md-tooltip md-delay="400" md-direction="right">My tooltip</md-tooltip>
              </md-avatar>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;div&gt;
                &lt;md-button class=&quot;md-icon-button md-raised md-primary&quot;&gt;
                  &lt;md-icon&gt;folder&lt;/md-icon&gt;
                  &lt;md-tooltip md-delay=&quot;400&quot; md-direction=&quot;top&quot;&gt;My tooltip&lt;/md-tooltip&gt;
                &lt;/md-button&gt;

                &lt;md-avatar&gt;
                  &lt;img src=&quot;assets/avatar-2.jpg&quot; alt=&quot;People&quot;&gt;
                  &lt;md-tooltip md-delay=&quot;400&quot; md-direction=&quot;bottom&quot;&gt;My tooltip&lt;/md-tooltip&gt;
                &lt;/md-avatar&gt;
              &lt;/div&gt;

              &lt;div&gt;
                &lt;md-button class=&quot;md-icon-button md-raised md-warn&quot;&gt;
                  &lt;md-icon&gt;home&lt;/md-icon&gt;
                  &lt;md-tooltip md-delay=&quot;400&quot; md-direction=&quot;left&quot;&gt;My tooltip&lt;/md-tooltip&gt;
                &lt;/md-button&gt;

                &lt;md-avatar class=&quot;md-avatar-icon&quot;&gt;
                  &lt;md-icon&gt;person&lt;/md-icon&gt;
                  &lt;md-tooltip md-delay=&quot;400&quot; md-direction=&quot;right&quot;&gt;My tooltip&lt;/md-tooltip&gt;
                &lt;/md-avatar&gt;
              &lt;/div&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
  .md-button,
  .md-avatar {
    margin: 24px;
  }
</style>
