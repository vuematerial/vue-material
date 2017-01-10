<template>
  <page-content page-title="Components - Speed Dial">
    <docs-component>
      <div slot="description">
        <p>The floating action button can fling out related actions upon press. The button should remain on screen after the menu is invoked. Tapping in the same spot should either activate the most commonly used action or close the open menu.</p>
      </div>

      <div slot="api">
        <api-table name="md-speed-dial">
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
                <md-table-cell>md-open</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The type of event that will trigger the Speed Dial. Accepts: <code>click</code>|<code>hover</code>. Default: <code>click</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-mode</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The type of effect that will be applied. Accepts: <code>fling</code>|<code>scale</code>. Default: <code>fling</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div class="speed-dial-demo" slot="demo">
            <md-speed-dial md-open="hover" class="md-fab-bottom-left" md-theme="light-blue">
              <md-button class="md-fab" md-fab-trigger>
                <md-icon>add</md-icon>
                <md-icon md-icon-morph>event</md-icon>
              </md-button>

              <md-button class="md-fab md-primary md-mini md-clean">
                <md-icon>playlist_add</md-icon>
              </md-button>

              <md-button class="md-fab md-primary md-mini md-clean">
                <md-icon>note_add</md-icon>
              </md-button>

              <md-button class="md-fab md-primary md-mini md-clean">
                <md-icon>alarm_add</md-icon>
              </md-button>
            </md-speed-dial>

            <md-speed-dial md-mode="scale" class="md-fab-bottom-right">
              <md-button class="md-fab" md-fab-trigger>
                <md-icon>share</md-icon>
                <md-icon md-icon-morph>close</md-icon>
              </md-button>

              <md-button class="md-fab md-mini md-clean">
                <md-icon>email</md-icon>
              </md-button>

              <md-button class="md-fab md-mini md-clean">
                <md-icon>content_copy</md-icon>
              </md-button>
            </md-speed-dial>
          </div>

          <div slot="code">
            <code-block lang="xml">

            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
  .speed-dial-demo {
    height: 300px;
  }
</style>

<script>
  export default {
    data: () => ({

    })
  };
</script>
