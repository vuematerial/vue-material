<template>
  <page-content page-title="Components - Button Toggle">
    <docs-component>
      <div slot="description">
        <p>Toggle buttons may be used to group related options. Arrange layout and spacing to convey that certain toggle buttons are part of a group.</p>
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-primary</code></li>
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-button-toggle">
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
                <md-table-cell>md-single</md-table-cell>
                <md-table-cell><code>Boolean</code></md-table-cell>
                <md-table-cell>Enable single selection. Default <code>false</code></md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>

        <api-table name="md-button">
          <md-table slot="classes">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>md-toggle</md-table-cell>
                <md-table-cell>Active selection</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Multiple">
          <div slot="demo">
            <md-button-toggle>
              <md-button class="md-icon-button md-toggle">
                <md-icon>format_bold</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>format_italic</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>strikethrough_s</md-icon>
              </md-button>

              <md-button class="md-icon-button md-toggle">
                <md-icon>title</md-icon>
              </md-button>
            </md-button-toggle>

            <md-button-toggle class="md-primary">
              <md-button class="md-icon-button md-toggle">
                <md-icon>format_bold</md-icon>
              </md-button>

              <md-button class="md-icon-button md-toggle">
                <md-icon>format_italic</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>format_underline</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>title</md-icon>
              </md-button>
            </md-button-toggle>

            <md-button-toggle class="md-accent">
              <md-button class="md-icon-button md-toggle">
                <md-icon>format_bold</md-icon>
              </md-button>

              <md-button class="md-icon-button md-toggle">
                <md-icon>format_italic</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>format_underline</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>title</md-icon>
              </md-button>
            </md-button-toggle>

            <md-button-toggle class="md-warn">
              <md-button class="md-icon-button md-toggle">
                <md-icon>format_bold</md-icon>
              </md-button>

              <md-button class="md-icon-button md-toggle">
                <md-icon>format_italic</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>strikethrough_s</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>title</md-icon>
              </md-button>
            </md-button-toggle>

            <md-button-toggle class="md-primary">
              <md-button class="md-icon-button">
                <md-icon>format_bold</md-icon>
              </md-button>

              <md-button class="md-icon-button" disabled>
                <md-icon>format_italic</md-icon>
              </md-button>

              <md-button class="md-icon-button" disabled>
                <md-icon>strikethrough_s</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>title</md-icon>
              </md-button>
            </md-button-toggle>

            <md-button-toggle>
              <md-button class="md-toggle">Works</md-button>
              <md-button class="md-toggle">With</md-button>
              <md-button>Text</md-button>
              <md-button>Too</md-button>
            </md-button-toggle>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-button-toggle&gt;
                &lt;md-button class=&quot;md-icon-button md-toggle&quot;&gt;
                  &lt;md-icon&gt;format_bold&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;format_italic&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;strikethrough_s&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button md-toggle&quot;&gt;
                  &lt;md-icon&gt;title&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-button-toggle&gt;

              &lt;md-button-toggle class=&quot;md-primary&quot;&gt;
                &lt;md-button class=&quot;md-icon-button md-toggle&quot;&gt;
                  &lt;md-icon&gt;format_bold&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button md-toggle&quot;&gt;
                  &lt;md-icon&gt;format_italic&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;format_underline&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;title&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-button-toggle&gt;

              &lt;md-button-toggle class=&quot;md-accent&quot;&gt;
                &lt;md-button class=&quot;md-icon-button md-toggle&quot;&gt;
                  &lt;md-icon&gt;format_bold&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button md-toggle&quot;&gt;
                  &lt;md-icon&gt;format_italic&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;format_underline&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;title&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-button-toggle&gt;

              &lt;md-button-toggle class=&quot;md-warn&quot;&gt;
                &lt;md-button class=&quot;md-icon-button md-toggle&quot;&gt;
                  &lt;md-icon&gt;format_bold&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button md-toggle&quot;&gt;
                  &lt;md-icon&gt;format_italic&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;strikethrough_s&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;title&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-button-toggle&gt;

              &lt;md-button-toggle class=&quot;md-primary&quot;&gt;
                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;format_bold&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot; disabled&gt;
                  &lt;md-icon&gt;format_italic&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot; disabled&gt;
                  &lt;md-icon&gt;strikethrough_s&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;title&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-button-toggle&gt;

              &lt;md-button-toggle&gt;
                &lt;md-button class=&quot;md-toggle&quot;&gt;Works&lt;/md-button&gt;
                &lt;md-button class=&quot;md-toggle&quot;&gt;With&lt;/md-button&gt;
                &lt;md-button&gt;Text&lt;/md-button&gt;
                &lt;md-button&gt;Too&lt;/md-button&gt;
              &lt;/md-button-toggle&gt;
            </code-block>
          </div>
        </example-box>

        <example-box card-title="Single Selection">
          <div slot="demo">
            <md-button-toggle md-single>
              <md-button class="md-icon-button">
                <md-icon>format_bold</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>format_italic</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>strikethrough_s</md-icon>
              </md-button>

              <md-button class="md-icon-button md-toggle">
                <md-icon>title</md-icon>
              </md-button>
            </md-button-toggle>

            <md-button-toggle md-single class="md-primary">
              <md-button class="md-icon-button">
                <md-icon>format_bold</md-icon>
              </md-button>

              <md-button class="md-icon-button md-toggle">
                <md-icon>format_italic</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>format_underline</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>title</md-icon>
              </md-button>
            </md-button-toggle>

            <md-button-toggle md-single class="md-accent">
              <md-button class="md-icon-button md-toggle">
                <md-icon>format_bold</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>format_italic</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>format_underline</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>title</md-icon>
              </md-button>
            </md-button-toggle>

            <md-button-toggle md-single class="md-warn">
              <md-button class="md-icon-button">
                <md-icon>format_bold</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>format_italic</md-icon>
              </md-button>

              <md-button class="md-icon-button md-toggle">
                <md-icon>strikethrough_s</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>title</md-icon>
              </md-button>
            </md-button-toggle>

            <md-button-toggle md-single class="md-primary">
              <md-button class="md-icon-button">
                <md-icon>format_bold</md-icon>
              </md-button>

              <md-button class="md-icon-button" disabled>
                <md-icon>format_italic</md-icon>
              </md-button>

              <md-button class="md-icon-button" disabled>
                <md-icon>strikethrough_s</md-icon>
              </md-button>

              <md-button class="md-icon-button">
                <md-icon>title</md-icon>
              </md-button>
            </md-button-toggle>

            <md-button-toggle md-single>
              <md-button>Works</md-button>
              <md-button>With</md-button>
              <md-button>Text</md-button>
              <md-button>Too</md-button>
            </md-button-toggle>
          </div>

          <div slot="code">
            <code-block lang="xml">
              &lt;md-button-toggle md-single&gt;
                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;format_bold&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;format_italic&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;strikethrough_s&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button md-toggle&quot;&gt;
                  &lt;md-icon&gt;title&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-button-toggle&gt;

              &lt;md-button-toggle md-single class=&quot;md-primary&quot;&gt;
                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;format_bold&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button md-toggle&quot;&gt;
                  &lt;md-icon&gt;format_italic&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;format_underline&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;title&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-button-toggle&gt;

              &lt;md-button-toggle md-single class=&quot;md-accent&quot;&gt;
                &lt;md-button class=&quot;md-icon-button md-toggle&quot;&gt;
                  &lt;md-icon&gt;format_bold&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;format_italic&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;format_underline&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;title&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-button-toggle&gt;

              &lt;md-button-toggle md-single class=&quot;md-warn&quot;&gt;
                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;format_bold&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;format_italic&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button md-toggle&quot;&gt;
                  &lt;md-icon&gt;strikethrough_s&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;title&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-button-toggle&gt;

              &lt;md-button-toggle md-single class=&quot;md-primary&quot;&gt;
                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;format_bold&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot; disabled&gt;
                  &lt;md-icon&gt;format_italic&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot; disabled&gt;
                  &lt;md-icon&gt;strikethrough_s&lt;/md-icon&gt;
                &lt;/md-button&gt;

                &lt;md-button class=&quot;md-icon-button&quot;&gt;
                  &lt;md-icon&gt;title&lt;/md-icon&gt;
                &lt;/md-button&gt;
              &lt;/md-button-toggle&gt;

              &lt;md-button-toggle md-single&gt;
                &lt;md-button&gt;Works&lt;/md-button&gt;
                &lt;md-button&gt;With&lt;/md-button&gt;
                &lt;md-button&gt;Text&lt;/md-button&gt;
                &lt;md-button&gt;Too&lt;/md-button&gt;
              &lt;/md-button-toggle&gt;
            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>
  .md-button-toggle + .md-button-toggle {
    margin-top: 16px;
  }
</style>
