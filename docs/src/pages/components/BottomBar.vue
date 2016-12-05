<template>
  <page-content page-title="Components - Bottom Bar">
    <docs-component>
      <div slot="description">
        <p>Bottom navigation bars make it easy to explore and switch between top-level views in a single tap.</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
          <li><code>md-transparent</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-bottom-bar">
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
                <md-table-cell>md-shift</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable the shifting variant. Default <code>false</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-bottom-bar-item">
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
                <md-table-cell>md-icon</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Icon name on the <a href="https://material.io/icons/" target="_blank" rel="noopener">Material Icons</a> docs.</md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>md-active</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Set initial selection. Default <code>false</code></md-table-cell>
              </md-table-row>

              <md-table-row>
                <md-table-cell>href</md-table-cell>
                <md-table-cell><code>String</code></md-table-cell>
                <md-table-cell>Create a anchor on the item - In this case the generated tag will be <code>&lt;a&gt;</code>.</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div slot="demo">
            <div class="phone-viewport">
              <md-bottom-bar>
                <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
              </md-bottom-bar>
            </div>

            <div class="phone-viewport">
              <md-bottom-bar class="md-accent">
                <md-bottom-bar-item href="#/components/bottom-bar" md-icon="history">Recents</md-bottom-bar-item>
                <md-bottom-bar-item href="#/components/bottom-bar" md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
                <md-bottom-bar-item href="#/components/bottom-bar" md-icon="near_me">Nearby</md-bottom-bar-item>
              </md-bottom-bar>
            </div>

            <div class="phone-viewport">
              <md-bottom-bar class="md-warn">
                <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
              </md-bottom-bar>
            </div>

            <div class="phone-viewport">
              <md-bottom-bar class="md-transparent">
                <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
              </md-bottom-bar>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-bottom-bar&gt;
                &lt;md-bottom-bar-item md-icon=&quot;history&quot;&gt;Recents&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;favorite&quot; md-active&gt;Favorites&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;near_me&quot;&gt;Nearby&lt;/md-bottom-bar-item&gt;
              &lt;/md-bottom-bar&gt;

              &lt;md-bottom-bar class=&quot;md-accent&quot;&gt;
                &lt;md-bottom-bar-item md-icon=&quot;history&quot;&gt;Recents&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;favorite&quot; md-active&gt;Favorites&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;near_me&quot;&gt;Nearby&lt;/md-bottom-bar-item&gt;
              &lt;/md-bottom-bar&gt;

              &lt;md-bottom-bar class=&quot;md-warn&quot;&gt;
                &lt;md-bottom-bar-item md-icon=&quot;history&quot;&gt;Recents&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;favorite&quot; md-active&gt;Favorites&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;near_me&quot;&gt;Nearby&lt;/md-bottom-bar-item&gt;
              &lt;/md-bottom-bar&gt;

              &lt;md-bottom-bar class=&quot;md-transparent&quot;&gt;
                &lt;md-bottom-bar-item md-icon=&quot;history&quot;&gt;Recents&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;favorite&quot; md-active&gt;Favorites&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;near_me&quot;&gt;Nearby&lt;/md-bottom-bar-item&gt;
              &lt;/md-bottom-bar&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Shifting">
          <div slot="demo">
            <div class="phone-viewport">
              <md-bottom-bar md-shift>
                <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
              </md-bottom-bar>
            </div>

            <div class="phone-viewport">
              <md-bottom-bar class="md-accent" md-shift>
                <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
              </md-bottom-bar>
            </div>

            <div class="phone-viewport">
              <md-bottom-bar class="md-warn" md-shift>
                <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
              </md-bottom-bar>
            </div>

            <div class="phone-viewport">
              <md-bottom-bar class="md-transparent" md-shift>
                <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
              </md-bottom-bar>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-bottom-bar md-shift&gt;
                &lt;md-bottom-bar-item md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;books&quot; md-active&gt;Books&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
              &lt;/md-bottom-bar&gt;

              &lt;md-bottom-bar class=&quot;md-accent&quot; md-shift&gt;
                &lt;md-bottom-bar-item md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;books&quot; md-active&gt;Books&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
              &lt;/md-bottom-bar&gt;

              &lt;md-bottom-bar class=&quot;md-warn&quot; md-shift&gt;
                &lt;md-bottom-bar-item md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;books&quot; md-active&gt;Books&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
              &lt;/md-bottom-bar&gt;

              &lt;md-bottom-bar class=&quot;md-transparent&quot; md-shift&gt;
                &lt;md-bottom-bar-item md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;books&quot; md-active&gt;Books&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
              &lt;/md-bottom-bar&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Themes">
          <div slot="demo">
            <div class="phone-viewport" v-md-theme="'orange'">
              <md-bottom-bar>
                <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
              </md-bottom-bar>
            </div>

            <div class="phone-viewport" v-md-theme="'teal'">
              <md-bottom-bar>
                <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
              </md-bottom-bar>
            </div>

            <div class="phone-viewport" v-md-theme="'green'">
              <md-bottom-bar md-shift>
                <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
              </md-bottom-bar>
            </div>

            <div class="phone-viewport" v-md-theme="'indigo'">
              <md-bottom-bar md-shift>
                <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
              </md-bottom-bar>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-bottom-bar&gt;
                &lt;md-bottom-bar-item md-icon=&quot;history&quot;&gt;Recents&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;favorite&quot; md-active&gt;Favorites&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;near_me&quot;&gt;Nearby&lt;/md-bottom-bar-item&gt;
              &lt;/md-bottom-bar&gt;

              &lt;md-bottom-bar&gt;
                &lt;md-bottom-bar-item md-icon=&quot;history&quot;&gt;Recents&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;favorite&quot; md-active&gt;Favorites&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;near_me&quot;&gt;Nearby&lt;/md-bottom-bar-item&gt;
              &lt;/md-bottom-bar&gt;

              &lt;md-bottom-bar md-shift&gt;
                &lt;md-bottom-bar-item md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;books&quot; md-active&gt;Books&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
              &lt;/md-bottom-bar&gt;

              &lt;md-bottom-bar md-shift&gt;
                &lt;md-bottom-bar-item md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;books&quot; md-active&gt;Books&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
              &lt;/md-bottom-bar&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Dynamic Theme Example">
          <div slot="demo">
            <div class="phone-viewport">
              <md-bottom-bar md-shift v-md-theme="playground.theme">
                <md-bottom-bar-item @click.native="setTheme('blue')" md-icon="ondemand_video">Movies</md-bottom-bar-item>
                <md-bottom-bar-item @click.native="setTheme('teal')" md-icon="music_note">Music</md-bottom-bar-item>
                <md-bottom-bar-item @click.native="setTheme('brown')" md-icon="books" md-active>Books</md-bottom-bar-item>
                <md-bottom-bar-item @click.native="setTheme('indigo')" md-icon="photo">Pictures</md-bottom-bar-item>
              </md-bottom-bar>
            </div>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-bottom-bar md-shift v-md-theme=&quot;playground.theme&quot;&gt;
                &lt;md-bottom-bar-item @click.native=&quot;setTheme(&#039;blue&#039;)&quot; md-icon=&quot;ondemand_video&quot;&gt;Movies&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item @click.native=&quot;setTheme(&#039;teal&#039;)&quot; md-icon=&quot;music_note&quot;&gt;Music&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item @click.native=&quot;setTheme(&#039;brown&#039;)&quot; md-icon=&quot;books&quot; md-active&gt;Books&lt;/md-bottom-bar-item&gt;
                &lt;md-bottom-bar-item @click.native=&quot;setTheme(&#039;indigo&#039;)&quot; md-icon=&quot;photo&quot;&gt;Pictures&lt;/md-bottom-bar-item&gt;
              &lt;/md-bottom-bar&gt;
            </code-block>

            <code-block lang="javascript">
              export default {
                data() {
                  return {
                    playground: {
                      theme: &#039;brown&#039;
                    }
                  };
                },
                methods: {
                  setTheme(theme) {
                    this.playground.theme = theme;
                  }
                }
              };
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="scss" scoped>
  .md-bottom-bar {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .phone-viewport {
    width: 320px;
    height: 150px;
    margin-right: 16px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    background-color: darken(#fafafa, 5%);
  }
</style>

<script>
  export default {
    data() {
      return {
        playground: {
          theme: 'brown'
        }
      };
    },
    methods: {
      setTheme(theme) {
        this.playground.theme = theme;
      }
    }
  };
</script>
