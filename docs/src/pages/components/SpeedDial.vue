<template>
  <page-content page-title="Components - Speed Dial">
    <docs-component>
      <div slot="description">
        <p>The floating action button can fling out related actions upon press. The button should remain on screen after the menu is invoked. Tapping in the same spot should either activate the most commonly used action or close the open menu.</p>
        <p>You will need to add the <code>md-fab-trigger</code> attribute in the first md-button to indicate the trigger.</p>
        <p>If you want the "morph" effect on icons, you should create two icons inside the <code>md-fab-trigger</code> element and add the <code>md-icon-morph</code> attribute to the first one. When the speed dial gets activated the md-icon-morph will be shown.</p>
      </div>

      <div slot="api">
        <api-table name="md-speed-dial">
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
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
            </md-table-body>
          </md-table>

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
                <md-table-cell>The type of event that will trigger the Speed Dial. Accepts: <code>click</code>|<code>hover</code>. Default: <code>click</code> <br><small>* This attribute is not reactive.</small></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-mode</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The type of effect that will be applied. Accepts: <code>fling</code>|<code>scale</code>. Default: <code>fling</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-direction</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>The direction that the Speed Dial will dispose the buttons. Accepts: <code>top</code>|<code>right</code>|<code>bottom</code>|<code>left</code>. Default: <code>top</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Mode and event type">
          <div class="speed-dial-demo" slot="demo">
            <md-speed-dial md-open="hover" class="md-fab-bottom-left" md-theme="purple">
              <md-button class="md-fab" md-fab-trigger>
                <md-icon md-icon-morph>close</md-icon>
                <md-icon>share</md-icon>
              </md-button>

              <md-button class="md-fab md-primary md-mini md-clean">
                <md-icon>email</md-icon>
              </md-button>

              <md-button class="md-fab md-primary md-mini md-clean">
                <md-icon>content_copy</md-icon>
              </md-button>
            </md-speed-dial>

            <md-speed-dial md-mode="scale" class="md-fab-bottom-right">
              <md-button class="md-fab" md-fab-trigger>
                <md-icon md-icon-morph>close</md-icon>
                <md-icon>share</md-icon>
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

        <example-box card-title="Directions">
          <div class="speed-dial-demo" slot="demo">
            <md-speed-dial md-open="hover" md-direction="bottom" class="md-fab-top-left" md-theme="light-blue">
              <md-button class="md-fab" md-fab-trigger>
                <md-icon md-icon-morph>event</md-icon>
                <md-icon>add</md-icon>
              </md-button>

              <md-button class="md-fab md-primary md-mini md-clean">
                <md-icon>note_add</md-icon>
              </md-button>

              <md-button class="md-fab md-primary md-mini md-clean">
                <md-icon>alarm_add</md-icon>
              </md-button>
            </md-speed-dial>

            <md-speed-dial md-open="hover" md-direction="left" class="md-fab-top-right" md-theme="light-blue">
              <md-button class="md-fab" md-fab-trigger>
                <md-icon md-icon-morph>event</md-icon>
                <md-icon>add</md-icon>
              </md-button>

              <md-button class="md-fab md-primary md-mini md-clean">
                <md-icon>note_add</md-icon>
              </md-button>

              <md-button class="md-fab md-primary md-mini md-clean">
                <md-icon>alarm_add</md-icon>
              </md-button>
            </md-speed-dial>

            <md-speed-dial md-open="hover" md-direction="top" class="md-fab-bottom-right" md-theme="light-blue">
              <md-button class="md-fab" md-fab-trigger>
                <md-icon md-icon-morph>event</md-icon>
                <md-icon>add</md-icon>
              </md-button>

              <md-button class="md-fab md-primary md-mini md-clean">
                <md-icon>note_add</md-icon>
              </md-button>

              <md-button class="md-fab md-primary md-mini md-clean">
                <md-icon>alarm_add</md-icon>
              </md-button>
            </md-speed-dial>

            <md-speed-dial md-open="hover" md-direction="right" class="md-fab-bottom-left" md-theme="light-blue">
              <md-button class="md-fab" md-fab-trigger>
                <md-icon md-icon-morph>event</md-icon>
                <md-icon>add</md-icon>
              </md-button>

              <md-button class="md-fab md-primary md-mini md-clean">
                <md-icon>note_add</md-icon>
              </md-button>

              <md-button class="md-fab md-primary md-mini md-clean">
                <md-icon>alarm_add</md-icon>
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
    height: 250px;
  }
</style>

<script>
  export default {
    data: () => ({

    })
  };
</script>
