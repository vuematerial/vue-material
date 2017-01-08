<template>
  <page-content page-title="Components - Snackbar">
    <docs-component>
      <div slot="description">
        <p>Snackbars contain a single line of text directly related to the operation performed. They may contain a text action, but no icons.</p>
      </div>

      <div slot="api">
        <api-table name="md-snackbar">
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
                <md-table-cell>md-position</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Specify which vertical and horizontal position the snackbar will take. Accepts <code>top left</code>|<code>top center</code>|<code>right center</code>|<code>bottom left</code>|<code>bottom center</code>|<code>bottom right</code>. Default: <code>bottom center</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-duration</md-table-cell>
                <md-table-cell><code>Number</code></md-table-cell>
                <md-table-cell>The duration visibility in miliseconds. Default: <code>4000</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="events">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Value</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>open</md-table-cell>
                <md-table-cell>None</md-table-cell>
                <md-table-cell>Triggered when the snackbar open.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>close</md-table-cell>
                <md-table-cell>None</md-table-cell>
                <md-table-cell>Triggered when the snackbar closes.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table slot="methods">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>open</md-table-cell>
                <md-table-cell>Opens the Snackbar.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>close</md-table-cell>
                <md-table-cell>Closes the Snackbar.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <form novalidate @submit.stop.prevent="open">
              <div>
                <div class="md-body-2">Vertical</div>
                <md-radio v-model="vertical" id="top" name="snackbar-vertical" md-value="top">top</md-radio>
                <md-radio v-model="vertical" id="bottom" name="snackbar-vertical" md-value="bottom">bottom</md-radio>
              </div>

              <div>
                <div class="md-body-2">Horizontal</div>
                <md-radio v-model="horizontal" id="left" name="snackbar-horizontal" md-value="left">left</md-radio>
                <md-radio v-model="horizontal" id="center" name="snackbar-horizontal" md-value="center">center</md-radio>
                <md-radio v-model="horizontal" id="right" name="snackbar-horizontal" md-value="right">right</md-radio>
              </div>

              <div>
                <div class="md-body-2">Delay</div>

                <md-input-container>
                  <md-input type="number" v-model="duration"></md-input>
                </md-input-container>
              </div>

              <md-button type="submit" class="md-primary md-raised">Open Snackbar</md-button>

              <md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">
                <span>Connection timeout. Showing limited messages.</span>
                <md-button class="md-accent" md-theme="light-blue" @click="$refs.snackbar.close()">Retry</md-button>
              </md-snackbar>
            </form>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;form novalidate @submit.stop.prevent=&quot;open&quot;&gt;
                &lt;div&gt;
                  &lt;div class=&quot;md-body-2&quot;&gt;Vertical&lt;/div&gt;
                  &lt;md-radio v-model=&quot;vertical&quot; id=&quot;top&quot; name=&quot;snackbar-vertical&quot; md-value=&quot;top&quot;&gt;top&lt;/md-radio&gt;
                  &lt;md-radio v-model=&quot;vertical&quot; id=&quot;bottom&quot; name=&quot;snackbar-vertical&quot; md-value=&quot;bottom&quot;&gt;bottom&lt;/md-radio&gt;
                &lt;/div&gt;

                &lt;div&gt;
                  &lt;div class=&quot;md-body-2&quot;&gt;Horizontal&lt;/div&gt;
                  &lt;md-radio v-model=&quot;horizontal&quot; id=&quot;left&quot; name=&quot;snackbar-horizontal&quot; md-value=&quot;left&quot;&gt;left&lt;/md-radio&gt;
                  &lt;md-radio v-model=&quot;horizontal&quot; id=&quot;center&quot; name=&quot;snackbar-horizontal&quot; md-value=&quot;center&quot;&gt;center&lt;/md-radio&gt;
                  &lt;md-radio v-model=&quot;horizontal&quot; id=&quot;right&quot; name=&quot;snackbar-horizontal&quot; md-value=&quot;right&quot;&gt;right&lt;/md-radio&gt;
                &lt;/div&gt;

                &lt;div&gt;
                  &lt;div class=&quot;md-body-2&quot;&gt;Delay&lt;/div&gt;

                  &lt;md-input-container&gt;
                    &lt;md-input type=&quot;number&quot; v-model=&quot;duration&quot;&gt;&lt;/md-input&gt;
                  &lt;/md-input-container&gt;
                &lt;/div&gt;

                &lt;md-button type=&quot;submit&quot; class=&quot;md-primary md-raised&quot;&gt;Open Snackbar&lt;/md-button&gt;

                &lt;md-snackbar :md-position=&quot;vertical + &#039; &#039; + horizontal&quot; ref=&quot;snackbar&quot; :md-duration=&quot;duration&quot;&gt;
                  &lt;span&gt;Connection timeout. Showing limited messages.&lt;/span&gt;
                  &lt;md-button class=&quot;md-accent&quot; md-theme=&quot;light-blue&quot; @click=&quot;$refs.snackbar.close()&quot;&gt;Retry&lt;/md-button&gt;
                &lt;/md-snackbar&gt;
              &lt;/form&gt;
            </code-block>

            <code-block lang="javacript">
              export default {
                data: () => ({
                  vertical: 'bottom',
                  horizontal: 'center',
                  duration: 4000
                }),
                methods: {
                  open() {
                    this.$refs.snackbar.open();
                  }
                }
              };
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>

    <md-button class="md-fab md-fab-bottom-right">
      <md-icon>add</md-icon>
    </md-button>
  </page-content>
</template>

<style lang="sass" scoped>

</style>

<script>
  export default {
    data: () => ({
      vertical: 'bottom',
      horizontal: 'center',
      duration: 4000
    }),
    methods: {
      open() {
        this.$refs.snackbar.open();
      }
    }
  };
</script>
